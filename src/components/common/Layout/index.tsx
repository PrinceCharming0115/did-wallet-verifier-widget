import React from 'react';
import { useLocation } from 'react-router-dom';
import { BoxProps, Box } from '@mui/material';
import { DesktopSidebarComponent } from '../Sidebar';
import { LayoutStyle } from './index.style';
import { DownSVG, ProfileSVG } from '../../../assets/icon';

type LayoutProps = BoxProps & {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = (props) => {
  const location = useLocation();

  const { children } = props;

  return <LayoutStyle>
    <Box className='navbar-container'>
      <DesktopSidebarComponent
        currentPath={location.pathname}
      />
    </Box>

    <Box className='main-container'>
      <Box className='body-container'>
        <Box className='profile'>
          <img src={ProfileSVG}></img>
          <span>DID: swqd123dind</span>
          <img src={DownSVG}></img>
        </Box>
        {children}
      </Box>
    </Box>
  </LayoutStyle>
};

export const withLayout = (Page: React.FC): React.FC => () => {
  return (
    <Layout>
      <Page />
    </Layout>
  )
};