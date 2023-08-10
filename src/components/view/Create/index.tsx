import React, { useState } from 'react';
import { 
  BoxProps, 
  Box, 
  Typography 
} from '@mui/material';
import QRCode from 'react-qr-code';
import { ButtonComponent } from '../../common';
import { InputComponent } from '../../common';
import { DropDownComponent } from '../../common/Dropdown';
import { FlowLabelComponent } from '../../common';
import { CreateFlowViewStyle } from './index.style';
import { requestList, credentialSubjectArray } from '../../../consts';
import { QuestionSVG } from '../../../assets/icon';
import { AgeRangeComponent } from '../../common/AgeRange';
import { CountryRequestComponent } from '../../common/CountryRequest';

type CreateFlowViewProps = BoxProps & {};

type AttributeListType = {
  attribute: string;
  type: string;
}
export const CreateFlowView: React.FC<CreateFlowViewProps> = (props) => {

  const [isAddAttribute, setIsAddAttribute ] = useState<boolean>(false);
  const [attributeList, setAttributeList] = useState<AttributeListType[]>([]);
  

  const [credentialSubject, setCredentialSubject] = useState<any>({});

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

    tempCredentialSubject[filtered.key] = {};
    setCredentialSubject({ ...tempCredentialSubject })
  }

  const removeAttribute = (index: number) => {
    const tempArray = attributeList;
    tempArray.splice(index, 1);

    setAttributeList([...tempArray]);
  }

  const ageInputChange = (value: number, type: string) => {
    const tempCredentialSubject = credentialSubject;
    if (type === 'from') {
      tempCredentialSubject['age']['$gt'] = value;
    } else {
      tempCredentialSubject['age']['$lt'] = value;
    }

    setCredentialSubject({...tempCredentialSubject});
  }

  const setSelectedCountries = (values: string[], type: string) => {
    const tempCredentialSubject = credentialSubject;
    if (type === 'include') {
      tempCredentialSubject['citizenship']['$in'] = values;
    } else {
      tempCredentialSubject['citizenship']['$nin'] = values;
    }
    setCredentialSubject({...tempCredentialSubject});
  }
  
  return <CreateFlowViewStyle>
    <Box className='main font-nunito'>      
      <Box >
        <Typography className='main-header font-size-40px font-nunito'>Verification flow</Typography>
      </Box>

      <Box className='main-content margin-top-2rem'>
        <Box className='flow-header'>
          <Typography className='label font-nunito'> Verification Flow name </Typography>

          <Box className='label-container margin-top-8px'>
            <InputComponent />
          </Box>
        </Box>

        <Box className='flow-content margin-top-2rem'>
          <Box className='qr-content'>
            <Box className='verify-container'>              
            <Box className='qr-content-header'>
              <Box className='add-attribute-btn-wrapper'>
                <Typography className='bold-text line-height-36px font-nunito'>Request information to verify</Typography>
                <ButtonComponent className='add-btn primary-btn font-nunito' onClick={handleAddAttributeClick}>Add attribute</ButtonComponent> 
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
                      ? <CountryRequestComponent setCountries={setSelectedCountries} group='include' label={item.attribute} index={index} type={item.type} removeAttribute={removeAttribute}></CountryRequestComponent>
                      : item.attribute === 'List of countries to exclude'
                        ? <CountryRequestComponent setCountries={setSelectedCountries} group='exclude' label={item.attribute} index={index} type={item.type} removeAttribute={removeAttribute}></CountryRequestComponent>
                          : <FlowLabelComponent label={item.attribute} index={index} type={item.type} removeAttribute={removeAttribute}></FlowLabelComponent>
                }
              </Box>
              ))
            }
            {
              isAddAttribute && 
              <Box className='label-container margin-top-8px'>
                <DropDownComponent
                  values={requestList}
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
            <ButtonComponent className='save-btn primary-btn font-nunito'>Save flow</ButtonComponent>    
          </Box>
      }
    </Box>
  </CreateFlowViewStyle>
}