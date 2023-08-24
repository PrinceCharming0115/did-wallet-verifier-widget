import React, { useEffect } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { Provider, useDispatch } from 'react-redux';
import { ThemeProvider } from "@mui/material";
import { darkTheme } from './styles';
import { PATH } from './consts';
import { store, AppActions } from './redux/store';

import {
  MainPage,
  DownloadPage,
  CreateFlowPage,
  DetailFlowPage,
  ConnectPage
} from './pages';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      console.log("askdf;alskdfj;alskdfj")
      dispatch(AppActions.auth.getMeRequest({
        errors: {
          USER_IS_NOT_EXIST: () => {
            console.log("not exist!")
          },
          UNAUTHORIZED: () => {
            console.log('unauthrized')
          }
        }
      }));
    }
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      {/* <Provider store={store}> */}
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<DownloadPage />}></Route>
            <Route path={PATH.CONNECT} element={<ConnectPage />}></Route>
            <Route path={PATH.CREATE} element={<CreateFlowPage />}></Route>
            <Route path={PATH.MAIN} element={<MainPage />}></Route>
            <Route path={PATH.FLOW_DETAIL} element={<DetailFlowPage />}></Route>
            {/* <Route path={PATH.CONNECT} element={<ConnectPage />}></Route> */}
            {/* 
            <Route path="*" element={<Navigate to={PATH.MAIN} />}></Route> */}
          </Routes>
        </BrowserRouter>
      {/* </Provider> */}
    </ThemeProvider>
  )
}

export default App;
