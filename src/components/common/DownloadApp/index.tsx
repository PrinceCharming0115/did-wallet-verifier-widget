import React from 'react';
import { BoxProps, Button, Box, Typography } from '@mui/material';
import QRCode from 'react-qr-code';
import { DownloadAppComponentStyle } from './index.style';
import { ButtonComponent } from '../Button';
import { TriangleSVG, AppleSVG, RightArrowSVG } from '../../../assets/icon';

type DownloadAppComponentProps = {
  setComponentNum: (componentNum: number) => void;
}


export const DownloadAppComponent: React.FC<DownloadAppComponentProps> = (props) => {
  const { setComponentNum } = props;

  const handleClick = () => {
    setComponentNum(2);
  }

  const mockJson = {
    1: 'Apple',
    2: 'Orange',
    3: 'Banana',
    4: 'Pear'
  }

  return <DownloadAppComponentStyle>
    
    <Typography variant='h4' className='font-size-30px font-nunito'>Download Exoid App</Typography>
    <Box className='margin-top-2rem'>
		<ButtonComponent className='btn'>
			<img src={AppleSVG}></img>
			<Typography className='line-height-1px font-nunito'>
				<span className='font-size-11px'>Download on the </span>
				<br/>
				<span className='font-size-20px'>App Store</span>
			</Typography>
		</ButtonComponent>
		<ButtonComponent className='btn'>
			<img src={TriangleSVG}></img>
			<Typography className='line-height-1px font-nunito'>
				<span className='font-size-11px'>GET IT ON</span>
				<br/>
				<span className='font-size-20px'>Google Play</span>
			</Typography>
		</ButtonComponent>
    </Box>
		<Box className='qr-code-wrapper'>
			<Typography className='font-nunito font-size-18px'>Or scan this QR code to download</Typography>
			<Box className='qr-code-container'>
				<QRCode size={210} value={JSON.stringify(mockJson)} />
			</Box>
		</Box>
		<Box className='next-btn-group'>
			<Typography className='font-nunito'>Once you've installed the app, click this button.</Typography>
				<ButtonComponent className='next-btn' onClick={handleClick}>
					<span className='font-nunito'>Next</span>
					<img src={RightArrowSVG}></img>
				</ButtonComponent>
		</Box>
  </DownloadAppComponentStyle>
}