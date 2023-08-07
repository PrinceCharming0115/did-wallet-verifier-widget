import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BoxProps, Box, Divider, Typography } from '@mui/material';
import { DesktopSidebarComponentStyle } from './index.style';
import { Logo } from '../../../assets/images';
import { CheckSVG, PlusSVG, ContactSVG } from '../../../assets/sidebar';
import { PATH } from '../../../consts';


type DesktopSidebarComponentProps = BoxProps & {
  currentPath: string;
};

export const DesktopSidebarComponent: React.FC<DesktopSidebarComponentProps> = (props) => {
  const navigate = useNavigate();

  const { currentPath } = props;

  return <DesktopSidebarComponentStyle>
    <img className="sidebar-logo-img" src={Logo} alt='sidebar logo' />
    <Box sx={{ height: '16px' }}></Box>
    <Box className='sidebar-list'>
      <Link to={PATH.MAIN} className='sidebar-item active'>
        <CheckSVG svgColor='black' />
        <Typography className='sidebar-link-text'>Verification flows</Typography>
      </Link>
      <Link to={PATH.CREATE} className='sidebar-item'>
        <PlusSVG  svgColor='white'/>
        <Typography className='sidebar-link-text'>Create new flows</Typography>
      </Link>
      <Link to={PATH.MAIN} className='sidebar-item'>
        <ContactSVG svgColor='white' />
        <Typography className='sidebar-link-text'>Get in touch</Typography>
      </Link>
    </Box>
  </DesktopSidebarComponentStyle>
};