import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  BoxProps, 
  Box, 
  Snackbar,
  Menu,
  MenuItem
} from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { DesktopSidebarComponent } from '../Sidebar';
import { LayoutStyle } from './index.style';
import { DownSVG, ProfileSVG } from '../../../assets/icon';
import { PATH } from '../../../consts';
import { RootState, AppActions, AppDispatch } from '../../../redux/store';
import { Root } from 'react-dom/client';

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
  const { did } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleAlertClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(AppActions.verification.setAlertStatus(false));
  };

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const disconnect = () => {
    setAnchorEl(null);
    dispatch(AppActions.auth.logout());
    navigate(PATH.CONNECT)
  }

  return <LayoutStyle currentPath={currentPath}>
    <Box className='navbar-container'>
      <DesktopSidebarComponent
        currentPath={currentPath}
      />
    </Box>

    <Box className='main-container'>
      <Box className='body-container'>
        {
          (currentPath !== PATH.CONNECT && currentPath !== PATH.FIRST && currentPath !== PATH.DOWNLOAD && !!localStorage.getItem('token')) &&
          <Box className='profile-contaienr'>
              <img src={ProfileSVG}></img>
            <Box className='profile' onClick={handleClick}>
              <span>DID: {did}</span>
              <img src={DownSVG}></img>
            </Box>
            <Menu
              sx={{
                '& .MuiMenu-list': {
                  backgroundColor: '#ebebeb',
                  color: 'black'
                }
              }}
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={disconnect}>Disconnect</MenuItem>
            </Menu>
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