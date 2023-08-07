import React, { useState, useEffect } from 'react';
import { BoxProps, Box, Typography } from '@mui/material';
import QRCode from 'react-qr-code';
import { ButtonComponent } from '../../common';
import { InputComponent } from '../../common';
import { DropDownComponent } from '../../common/Dropdown';
import { FlowLabelComponent } from '../../common';
import { CreateFlowViewStyle } from './index.style';
import { RequestTypeLabelComponent } from '../../common';
import { requestList } from '../../../consts';
import { QuestionSVG } from '../../../assets/icon';
import { AgeRangeComponent } from '../../common/AgeRange';
import { CountryRequestComponent } from '../../common/CountryRequest';

type CreateFlowViewProps = BoxProps & {};

export const CreateFlowView: React.FC<CreateFlowViewProps> = (props) => {
  type AttributeListType = {
    attribute: string;
    type: number
  }

  const [isAddAttribute, setIsAddAttribute ] = useState<boolean>(false);
  const [attributeList, setAttributeList] = useState<AttributeListType[]>([]);


  const handleAddAttributeClick = () => {
    setIsAddAttribute(true);
  }

  const handleAttributeChange = (value: string) => {
    const temp = {
      attribute: value,
      type: 0
    };
    setAttributeList([...attributeList, temp]);
    setIsAddAttribute(false);
  }

  const removeAttribute = (index: number) => {
    const tempArray = attributeList;
    tempArray.splice(index, 1);

    setAttributeList([...tempArray]);
  }

  const mockJson = {
    1: 'Apple',
    2: 'Orange',
    3: 'Banana',
    4: 'Pear'
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
                <Typography className='bold-text line-height-36px font-nunito'>Request information to verify</Typography>
                <ButtonComponent className='add-btn primary-btn font-nunito' onClick={handleAddAttributeClick}>Add attribute</ButtonComponent>                
              </Box>

              <Box style={{ height: '1rem' }}></Box>
              {
                attributeList.map((item: AttributeListType, index: number) => (
                <Box className='label-container margin-top-8px' key={index}>
                  <FlowLabelComponent label={item.attribute} index={index} removeAttribute={removeAttribute} />
                </Box>
                ))
              }
              {/* <Box className='label-container margin-top-8px'>
                  <FlowLabelComponent label='Driving Licence verification' />
              </Box>
              <Box className='label-container margin-top-8px'>
                  <FlowLabelComponent label='Driving Licence verification' />
              </Box>
              <Box className='label-container margin-top-8px'>
                  <AgeRangeComponent label='Age range' />
              </Box>
              <Box className='label-container margin-top-8px'>
                  <CountryRequestComponent label='List of countries to include' />
              </Box> */}
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
              <Box className='request-type-container'>
              <Typography className='bold-text display-flex line-height-36px font-nunito'>Kind of request<img className='request-icon' src={QuestionSVG}></img></Typography>
              <Box style={{ height: '1rem' }}></Box>
              {
                  attributeList.map((item: AttributeListType, index: number) => (
                  <Box className='request-type-item' key={index}>
                      <RequestTypeLabelComponent type={item.type}/>
                  </Box>
                  ))
              }
              {/* <Box className='request-type-item'>
                  <RequestTypeLabelComponent type={0}/>
              </Box>
              <Box className='request-type-item'>
                  <RequestTypeLabelComponent type={0}/>
              </Box>
              <Box className='request-type-item'>
                  <RequestTypeLabelComponent type={0}/>
              </Box> */}
              </Box>
          </Box>
          <Box className='qr-preview'>
              <Typography variant='h5' className='qr-code-preview-header bold-text font-nunito'>QR Code Preview</Typography>
              <Box className='qr-code-wrapper'>
              <Box className='qr-code-container'>
                <QRCode size={180} value={JSON.stringify(mockJson)} />
              </Box>
              </Box>
            </Box>
          </Box>
      </Box>
      <Box className='main-footer'>
        <ButtonComponent className='save-btn primary-btn font-nunito'>Save flow</ButtonComponent>    
      </Box>
    </Box>
  </CreateFlowViewStyle>
}