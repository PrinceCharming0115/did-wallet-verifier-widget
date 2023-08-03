import React from 'react';
import {
  Box,
  BoxProps,
} from '@mui/material';
import { CreateFlowModal } from '../../common';
import { MainViewStyle } from './index.style';

type MainViewProps = BoxProps & {
};

export const MainView: React.FC<MainViewProps> = (props) => {

  return <MainViewStyle>
    <CreateFlowModal />
  </MainViewStyle>
};