import React from 'react';
import { BoxProps, Button, Box, Typography } from '@mui/material';
import QRCode from 'react-qr-code';
import { WalletConnectComponentStyle } from './index.style';
import { ButtonComponent } from '../Button';
import { TriangleSVG, AppleSVG, RightArrowSVG } from '../../../assets/icon';

export const WalletConnectComponent: React.FC = () => {

  const mockJson = {
    1: 'Apple',
    2: 'Orange',
    3: 'Banana',
    4: 'Pear'
  }

  return <WalletConnectComponentStyle>
    <Typography variant='h4' className='font-size-30px connect-header font-nunito'>Connect with Exoid mobile</Typography>
		<Box className='qr-code-wrapper'>
			<Typography className='font-size-24px font-nunito'>Scan this QR code with Exoid Mobile to connect</Typography>
			<Box className='qr-code-container'>
				<QRCode size={230} value={JSON.stringify(mockJson)} />
			</Box>
		</Box>
  </WalletConnectComponentStyle>
}