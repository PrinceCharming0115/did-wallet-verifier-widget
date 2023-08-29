import React from 'react';
import {
  Box,
  BoxProps,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import QRCode from 'react-qr-code';
import { ButtonComponent } from '../../common';
import { DownloadViewStyle } from './index.style';
import { TriangleSVG, AppleSVG, RightArrowSVG } from '../../../assets/icon';
import { PATH } from '../../../consts';

type DownloadViewProps = BoxProps & {
};

export const DownloadView: React.FC<DownloadViewProps> = (props) => {

  const qrCodeDataToDownload ={
    value: process.env.REACT_APP_QRCODE_DATA_TO_DOWNLOAD
  } 

  return <DownloadViewStyle>
    <Typography variant='h4' className='font-size-40px bold-text font-nunito'>Download Exoid App</Typography>
    <Box className='margin-top-2rem'>
    <Box className='btn-group'>
      <ButtonComponent className='btn'>
        <img src={AppleSVG}></img>
        <Typography className='line-height-1px font-nunito'>
          <span className='font-size-12px'>Download on the </span>
          <br/>
          <span className='font-size-25px'>App Store</span>
        </Typography>
      </ButtonComponent>
      <ButtonComponent className='btn'>
        <img src={TriangleSVG}></img>
        <Typography className='line-height-1px font-nunito'>
          <span className='font-size-12px'>GET IT ON</span>
          <br/>
          <span className='font-size-25px'>Google Play</span>
        </Typography>
      </ButtonComponent>
    </Box>
    </Box>
    <Box className='qr-code-wrapper'>
      <Typography className='font-nunito font-size-21px'>Or scan this QR code to download</Typography>
      <Box className='qr-code-container'>
          <QRCode value={JSON.stringify(qrCodeDataToDownload)} />
      </Box>
    </Box>
    <Box className='next-btn-group'>
      <Typography className='font-nunito font-size-18px'>Once you've installed the app, click this button.</Typography>
      <Link to={PATH.CONNECT} className='next-btn font-size-18px font-weight-300'>
        <span className='font-nunito'>Next</span>
        <img src={RightArrowSVG}></img>
      </Link>
    </Box>
  </DownloadViewStyle>
};