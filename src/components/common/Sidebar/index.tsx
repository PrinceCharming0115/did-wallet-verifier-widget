import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BoxProps, Box, Divider, Typography } from '@mui/material';
import { DesktopSidebarComponentStyle } from './index.style';
import { Logo } from '../../../assets/images';
import { CheckSVG, PlusSVG, ContactSVG } from '../../../assets/sidebar';
import { PATH } from '../../../consts';
import { current } from '@reduxjs/toolkit';


type DesktopSidebarComponentProps = BoxProps & {
  currentPath: string;
};

export const DesktopSidebarComponent: React.FC<DesktopSidebarComponentProps> = (props) => {
  const navigate = useNavigate();

  const { currentPath } = props;

  return <DesktopSidebarComponentStyle>
    <Link to={PATH.FIRST}>    
      <img className="sidebar-logo-img" src={Logo} alt='sidebar logo' />
    </Link>
    <Box sx={{ height: '16px' }}></Box>
    <Box className='sidebar-list'>
      <Link to={PATH.MAIN} className={`sidebar-item ${currentPath !== PATH.CREATE ? 'active' : ''}`}>
        <CheckSVG svgColor={`${currentPath !== PATH.CREATE ? 'black' : 'white'}`} />
        <Typography className='sidebar-link-text'>Verification flows</Typography>
      </Link>
      <Link to={PATH.CREATE} className={`sidebar-item ${currentPath === PATH.CREATE ? 'active' : ''}`}>
        <PlusSVG  svgColor={`${currentPath === PATH.CREATE ? 'black' : 'white'}`}/>
        <Typography className='sidebar-link-text'>Create new flows</Typography>
      </Link>
      <Link to={PATH.MAIN} className='sidebar-item'>
        <ContactSVG svgColor='white' />
        <Typography className='sidebar-link-text'>Get in touch</Typography>
      </Link>
    </Box>
  </DesktopSidebarComponentStyle>
};