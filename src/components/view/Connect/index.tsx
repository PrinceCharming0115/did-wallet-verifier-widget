import React from 'react';
import {
  Box,
  BoxProps,
  Typography
} from '@mui/material';
import QRCode from 'react-qr-code';
import { ConnectViewStyle } from './index.style';

type ConnectViewProps = BoxProps & {
};

export const ConnectView: React.FC<ConnectViewProps> = (props) => {

  const mockJson = {
    1: 'Apple',
    2: 'Orange',
    3: 'Banana',
    4: 'Pear'
  }

  return <ConnectViewStyle>
    <Typography variant='h4' className='font-size-40px connect-header font-nunito'>Connect with Exoid mobile</Typography>
		<Box className='qr-code-wrapper'>
			<Typography className='font-size-26px font-nunito'>Scan this QR code with Exoid Mobile to connect</Typography>
			<Box className='qr-code-container'>
				<QRCode value={JSON.stringify(mockJson)} />
			</Box>
		</Box>
  </ConnectViewStyle>
};