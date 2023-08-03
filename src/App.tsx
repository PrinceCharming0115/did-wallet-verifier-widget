import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { ThemeProvider } from "@mui/material";
import { darkTheme } from './styles';
import { PATH } from './consts';
import { store } from './redux/store';

import {
  MainPage
} from './pages';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={PATH.MAIN} element={<MainPage />}></Route>
            <Route path="*" element={<Navigate to={PATH.MAIN} />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  )
}

export default App;
