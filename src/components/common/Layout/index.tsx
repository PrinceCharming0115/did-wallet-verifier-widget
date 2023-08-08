import React from 'react';
import { useLocation } from 'react-router-dom';
import { BoxProps, Box } from '@mui/material';
import { DesktopSidebarComponent } from '../Sidebar';
import { LayoutStyle } from './index.style';
import { DownSVG, ProfileSVG } from '../../../assets/icon';
import { PATH } from '../../../consts';

type LayoutProps = BoxProps & {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = (props) => {
  const location = useLocation();
  const currentPath = location.pathname

  const { children } = props;

  return <LayoutStyle currentPath={currentPath}>
    <Box className='navbar-container'>
      <DesktopSidebarComponent
        currentPath={currentPath}
      />
    </Box>

    <Box className='main-container'>
      <Box className='body-container'>
        {
          (currentPath !== PATH.CONNECT && currentPath !== PATH.FIRST) &&
            <Box className='profile'>
              <img src={ProfileSVG}></img>
              <span>DID: swqd123dind</span>
              <img src={DownSVG}></img>
            </Box>
        }
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