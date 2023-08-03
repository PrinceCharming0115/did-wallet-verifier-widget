import React from 'react';
import { BoxProps, Box, Typography, Select, MenuItem } from '@mui/material';
import QRCode from 'react-qr-code';
import { ButtonComponent } from '../Button';
import { InputComponent } from '../Input';
import { FlowLabelComponent } from '../FlowLabel';
import { CreateFlowModalStyle } from './index.style';
import { DownloadAppComponent } from '../DownloadApp';
import { WalletConnectComponent } from '../WalletConnect';
import { RequestTypeLabelComponent } from '../RequestTypeLabel';
import { QuestionSVG } from '../../../assets/icon';

type CreateFlowModalProps = BoxProps & {};

export const CreateFlowModal: React.FC<CreateFlowModalProps> = (props) => {

  const mockJson = {
    1: 'Apple',
    2: 'Orange',
    3: 'Banana',
    4: 'Pear'
  }

  return <CreateFlowModalStyle>
    <Box className='modal'>
      {/* <DownloadAppComponent /> */}
      {/* <WalletConnectComponent /> */}
      <Box className='modal-header'>
        Verification flow
      </Box>
      <Box className='modal-content margin-top-2rem'>
        <Box className='flow-header'>
          <Typography className='label'> Verification Flow name </Typography>
          <Box className='label-container margin-top-8px'>
            <InputComponent />
          </Box>
        </Box>
        <Box className='flow-content margin-top-2rem'>
          <Box className='qr-content'>
            <Box className='verify-container'>              
              <Box className='qr-content-header'>
                <Typography className='bold-text line-height-36px'>Request information to verify</Typography>
                <ButtonComponent className='add-btn primary-btn'>Add attribute</ButtonComponent>                
              </Box>

              <Box style={{ height: '1rem' }}></Box>
              
              <Box className='label-container margin-top-8px'>
                <FlowLabelComponent label='Driving Licence verification' />
              </Box>
              <Box className='label-container margin-top-8px'>
                <FlowLabelComponent label='Driving Licence verification' />
              </Box>
              <Box className='label-container margin-top-8px'>
                <FlowLabelComponent label='Driving Licence verification' />
              </Box>
              <Box className='label-container margin-top-8px'>
                <Select
                  value={10}
                  onChange={() => {}}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Box>
            </Box>
            <Box className='request-type-container'>
              <Typography className='bold-text display-flex line-height-36px'>Kind of request<img className='request-icon' src={QuestionSVG}></img></Typography>
              <Box style={{ height: '1rem' }}></Box>
              <Box className='request-type-item'>
                <RequestTypeLabelComponent type={0}></RequestTypeLabelComponent>
              </Box>
              <Box className='request-type-item'>
                <RequestTypeLabelComponent type={0}></RequestTypeLabelComponent>
              </Box>
              <Box className='request-type-item'>
                <RequestTypeLabelComponent type={0}></RequestTypeLabelComponent>
              </Box>
            </Box>
          </Box>
          <Box className='qr-preview'>
            <Typography variant='h5' className='qr-code-preview-header bold-text'>QR Code Preview</Typography>
            <Box className='qr-code-wrapper'>
              <Box className='qr-code-container'>
                <QRCode size={180} value={JSON.stringify(mockJson)} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className='modal-footer'>
        <ButtonComponent className='save-btn primary-btn'>Save flow</ButtonComponent>    
      </Box>
    </Box>
  </CreateFlowModalStyle>
}