import React from 'react';
import {
  Box,
  BoxProps,
  Typography
} from '@mui/material';
import QRCode from 'react-qr-code';
import { ConnectViewStyle } from './index.style';
import { qrCodeDataType } from '../../../consts';

type ConnectViewProps = BoxProps & {
  qrCodeData: qrCodeDataType
};

export const ConnectView: React.FC<ConnectViewProps> = (props) => {

  return <ConnectViewStyle>
    <Typography variant='h4' className='font-size-40px connect-header font-nunito'>Connect with Exoid mobile</Typography>
		<Box className='qr-code-wrapper'>
			<Typography className='font-size-26px font-nunito'>Scan this QR code with Exoid Mobile to connect</Typography>
			<Box className='qr-code-container'>
				<QRCode value={JSON.stringify(props.qrCodeData)} />
			</Box>
		</Box>
  </ConnectViewStyle>
};