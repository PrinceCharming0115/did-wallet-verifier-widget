import React from 'react';
import { useLocation } from 'react-router-dom';
import { BoxProps, Box, Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { DesktopSidebarComponent } from '../Sidebar';
import { LayoutStyle } from './index.style';
import { DownSVG, ProfileSVG } from '../../../assets/icon';
import { PATH } from '../../../consts';
import { RootState, AppActions, AppDispatch } from '../../../redux/store';

type LayoutProps = BoxProps & {
  children: React.ReactNode;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export const Layout: React.FC<LayoutProps> = (props) => {
  const location = useLocation();
  const currentPath = location.pathname

  const { children } = props;
  const { openAlert }  = useSelector((state: RootState) => state.verification);
  const dispatch = useDispatch<AppDispatch>();



  const handleAlertClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(AppActions.verification.setAlertStatus(false));
  };

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
    <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleAlertClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
      <Alert onClose={handleAlertClose} severity="success" sx={{ width: '100%' }}>
        Successfully saved.
      </Alert>
    </Snackbar>
  </LayoutStyle>
};

export const withLayout = (Page: React.FC): React.FC => () => {
  return (
    <Layout>
      <Page />
    </Layout>
  )
};