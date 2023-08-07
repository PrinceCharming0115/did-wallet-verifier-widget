import React, { useState, useEffect } from 'react';
import { BoxProps, Box, Typography, Select, MenuItem } from '@mui/material';
import QRCode from 'react-qr-code';
import { ButtonComponent } from '../Button';
import { InputComponent } from '../Input';
import { DropDownComponent } from '../Dropdown';
import { FlowLabelComponent } from '../FlowLabel';
import { CreateFlowModalStyle } from './index.style';
import { DownloadAppComponent } from '../DownloadApp';
import { WalletConnectComponent } from '../WalletConnect';
import { RequestTypeLabelComponent } from '../RequestTypeLabel';
import { requestList } from '../../../consts';
import { QuestionSVG } from '../../../assets/icon';
import { AgeRangeComponent } from '../AgeRange';
import { CountryRequestComponent } from '../CountryRequest';

type CreateFlowModalProps = BoxProps & {};

export const CreateFlowModal: React.FC<CreateFlowModalProps> = (props) => {
  type AttributeListType = {
    attribute: string;
    type: number
  }

  const [componentNum, setComponentNum] = useState<number>(3);
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

  return <CreateFlowModalStyle componentNum={componentNum}>
    <Box className='modal font-nunito'>
      {
        componentNum === 1
          ? <DownloadAppComponent setComponentNum={setComponentNum} />
          : componentNum === 2
            ? <WalletConnectComponent />
            : <>
                <Box className='modal-header'>
                  Verification flow
                </Box>
                <Box className='modal-content margin-top-2rem'>
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
                <Box className='modal-footer'>
                  <ButtonComponent className='save-btn primary-btn font-nunito'>Save flow</ButtonComponent>    
                </Box>
              </> 
      }
      
      
      
    </Box>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
    </style>
  </CreateFlowModalStyle>
}