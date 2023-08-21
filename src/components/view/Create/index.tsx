import React, { useState } from 'react';
import { 
  BoxProps, 
  Box, 
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import QRCode from 'react-qr-code';
import { useSelector } from 'react-redux';
import { ButtonComponent, InputComponent, FlowLabelComponent } from '../../common';
import { DropDownComponent } from '../../common/Dropdown';
import { CreateFlowViewStyle } from './index.style';
import { requestList, credentialSubjectArray, countryList, COUNTRY_REQUEST_TYPE } from '../../../consts';
import { QuestionSVG } from '../../../assets/icon';
import { AgeRangeComponent } from '../../common/AgeRange';
import { CountryRequestComponent } from '../../common/CountryRequest';
import { Verification } from '../../../redux/types';
import { PATH } from '../../../consts';

type CreateFlowViewProps = BoxProps & {
  saveVerification: (data: Verification.SaveVerificationRequestAction) => void
};

type AttributeListType = {
  attribute: string;
  type: string;
}

const schema = Yup.object().shape({
  verificationName: Yup.string().required("Verification name is required."),
});

export const CreateFlowView: React.FC<CreateFlowViewProps> = (props) => {

  const [isAddAttribute, setIsAddAttribute ] = useState<boolean>(false);
  const [attributeList, setAttributeList] = useState<AttributeListType[]>([]);
  const [selectRequestList, setSelectRequestList] = useState<string[]>(requestList);
  const [contriesToInclude, setCountriesToInclude] = useState<string[]>(countryList);
  const [contriesToExclude, setCountriesToExclude] = useState<string[]>(countryList);
  
  const [credentialSubject, setCredentialSubject] = useState<any>({});
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();


  const { handleSubmit, getValues, register, formState: { errors, isValid } } = useForm<Verification.VerificationFormType>({
    resolver: yupResolver(schema),
    defaultValues: {
      verificationName: ""
    }
  })

  const handleAddAttributeClick = () => {
    setIsAddAttribute(true);
  }

  const handleAttributeChange = (value: string) => {
    const filtered = credentialSubjectArray.filter(obj => obj.text === value)[0];
    const temp = {
      attribute: value,
      type: filtered?.type
    };
    setAttributeList([...attributeList, temp]);
    setIsAddAttribute(false);

    const tempCredentialSubject = credentialSubject;

    if (!tempCredentialSubject.hasOwnProperty(filtered.key)) {
      tempCredentialSubject[filtered.key] = {};
    }
    setCredentialSubject({ ...tempCredentialSubject });

    const tempRequestList = selectRequestList;
    
    setSelectRequestList(tempRequestList.filter(item => item !== value));
  }

  const removeAttribute = (index: number, label: string, isCountry?: string) => {
    const filtered = credentialSubjectArray.filter(obj => obj.text === label)[0];
    if (filtered.key === 'citizenship') {
      if (isCountry === COUNTRY_REQUEST_TYPE.INCLUDE) {
        delete credentialSubject[filtered.key]['$in'];
        if (!credentialSubject[filtered.key].hasOwnProperty('$nin'))  {
          delete credentialSubject[filtered.key];
        }
      } else {
        delete credentialSubject[filtered.key]['$nin'];
        if (!credentialSubject[filtered.key].hasOwnProperty('$in'))  {
          delete credentialSubject[filtered.key];
        }
      }
      
    } else {
      delete credentialSubject[filtered.key];
    }
    const tempArray = attributeList;
    tempArray.splice(index, 1);

    setAttributeList([...tempArray]);

    setSelectRequestList([...selectRequestList, label]);
  }

  const ageInputChange = (value: number, type: string) => {
    const tempCredentialSubject = credentialSubject;
    if (type === 'from') {
      tempCredentialSubject["age"]["$gt"] = value;
    } else {
      tempCredentialSubject["age"]["$lt"] = value;
    }

    setCredentialSubject({...tempCredentialSubject});
  }

  const setSelectedCountries = (value: string, type: string) => {
    
    const tempCredentialSubject = credentialSubject;
    if (type === COUNTRY_REQUEST_TYPE.INCLUDE) {
      const filteredCountiresToInclude = contriesToInclude.filter((country: string) => country !== value);
      setCountriesToInclude(filteredCountiresToInclude);
      const filteredCountiresToExclude = contriesToExclude.filter((country: string) => country !== value);
      setCountriesToExclude(filteredCountiresToExclude);
      const includes = tempCredentialSubject["citizenship"]["$in"] ?? [];
      tempCredentialSubject["citizenship"]["$in"] = [...includes, value];
    } else {
      const filteredCountiresToInclude = contriesToInclude.filter((country: string) => country !== value);
      setCountriesToInclude(filteredCountiresToInclude);
      const filteredCountiresToExclude = contriesToExclude.filter((country: string) => country !== value);
      setCountriesToExclude(filteredCountiresToExclude);
      const excludes = tempCredentialSubject["citizenship"]["$nin"] ?? [];
      tempCredentialSubject["citizenship"]["$nin"] = [...excludes, value];
    }
    setCredentialSubject({...tempCredentialSubject});
  }

  const onSaveFlowBtnClick = () => {
    const formData = getValues();
    const saveData: Verification.SaveVerificationRequestAction = {
      verificationFlowName: formData.verificationName,
      verificationFlow: credentialSubject
    };

    props.saveVerification({
      verificationFlowName: formData.verificationName,
      verificationFlow: credentialSubject,
      next: () => {
        navigate(PATH.MAIN);
      }
    });
  }
 
  return <CreateFlowViewStyle>
    <Box className='main font-nunito'>      
      <Box >
        <Typography className='main-header font-size-40px font-nunito'>Verification flow</Typography>
      </Box>
      <form onSubmit={handleSubmit(onSaveFlowBtnClick)}>
        <Box className='main-content margin-top-2rem'>
          <Box className='flow-header'>
            <Typography className='label font-nunito'> Verification Flow name </Typography>

            <Box className='label-container margin-top-8px'>
              <InputComponent name='verificationName' register={register} error={!!errors.verificationName} />
            </Box>
          </Box>

          <Box className='flow-content margin-top-2rem'>
            <Box className='qr-content'>
              <Box className='verify-container'>              
              <Box className='qr-content-header'>
                <Box className='add-attribute-btn-wrapper'>
                  <Typography className='bold-text line-height-36px font-nunito'>Request information to verify</Typography>
                  <ButtonComponent type='button' className='add-btn primary-btn font-nunito' onClick={handleAddAttributeClick}>Add attribute</ButtonComponent> 
                </Box>
                <Typography className='bold-text display-flex line-height-36px font-nunito'>Kind of request<img className='request-icon' src={QuestionSVG}></img></Typography>               
              </Box>

              <Box style={{ height: '1rem' }}></Box>
              {
                attributeList.map((item: AttributeListType, index: number) => (
                <Box className='label-container margin-top-8px' key={index}>
                  {
                    item.attribute === 'Age range' 
                      ? <AgeRangeComponent handleInputChange={ageInputChange} label={item.attribute} index={index} type={item.type} removeAttribute={removeAttribute} ></AgeRangeComponent>
                      : item.attribute === 'List of countries to include'
                        ? <CountryRequestComponent
                          setCountries={setSelectedCountries}
                          group={COUNTRY_REQUEST_TYPE.INCLUDE}
                          label={item.attribute}
                          index={index}
                          type={item.type}
                          removeAttribute={removeAttribute}
                          options={contriesToInclude}
                        />
                        : item.attribute === 'List of countries to exclude'
                          ? <CountryRequestComponent  
                            setCountries={setSelectedCountries}
                            group={COUNTRY_REQUEST_TYPE.EXCLUDE}
                            label={item.attribute}
                            index={index}
                            type={item.type}
                            removeAttribute={removeAttribute}
                            options={contriesToExclude}
                          />
                            : <FlowLabelComponent label={item.attribute} index={index} type={item.type} removeAttribute={removeAttribute}></FlowLabelComponent>
                  }
                </Box>
                ))
              }
              {
                isAddAttribute && 
                <Box className='label-container margin-top-8px'>
                  <DropDownComponent 
                    className='attribute-list'
                    values={selectRequestList}
                    placeholder={'Choose new attribute'}
                    onChangeValue={handleAttributeChange}
                  />
                </Box>
              }
              
              </Box>

          </Box>
          <Box className='qr-preview'>
              <Typography variant='h5' className='qr-code-preview-header bold-text font-nunito'>QR Code Preview</Typography>
              <Box className='qr-code-wrapper'>
              <Box className='qr-code-container'>
                <QRCode size={180} value={JSON.stringify(credentialSubject)} />
              </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {
          attributeList.length !== 0 && 
            <Box className='main-footer'>
              <ButtonComponent disabled={!isValid} type='submit' className='save-btn primary-btn font-nunito'>Save flow</ButtonComponent>    
            </Box>
        }
      </form>
    </Box>

  </CreateFlowViewStyle>
}