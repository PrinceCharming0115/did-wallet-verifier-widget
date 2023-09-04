import React, { useEffect } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { Provider, useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from "@mui/material";
import { darkTheme } from './styles';
import { PATH } from './consts';
import { store, AppActions, RootState } from './redux/store';

import {
  MainPage,
  DownloadPage,
  CreateFlowPage,
  DetailFlowPage,
  ConnectPage
} from './pages';

function App() {

  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {

    if (token) {
      dispatch(AppActions.auth.getMeRequest({
        errors: {
          USER_IS_NOT_EXIST: () => {
            dispatch(AppActions.auth.logout());
          },
          UNAUTHORIZED: () => {
            dispatch(AppActions.auth.logout());
          }
        }
      }));
    }
  }, [token, dispatch]);

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Routes>
          {
            token && <>            
              <Route path={PATH.CREATE} element={<CreateFlowPage />}></Route>
              <Route path={PATH.MAIN} element={<MainPage />}></Route>
              <Route path={PATH.FLOW_DETAIL} element={<DetailFlowPage />}></Route>
              <Route path="*" element={<Navigate to={PATH.MAIN} />}></Route>
            </>
          }
          <Route path={PATH.CONNECT} element={<ConnectPage />}></Route>
          <Route path={PATH.DOWNLOAD} element={<DownloadPage />}></Route>
          <Route path="*" element={<Navigate to={PATH.DOWNLOAD} />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
