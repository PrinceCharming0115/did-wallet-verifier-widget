import React from 'react';
import { BoxProps, Button } from '@mui/material';
import { FlowLabelComponentStyle } from './index.style';
import { TrashSVG } from '../../../assets/icon';

type FlowLabelComponentProps = BoxProps & {
  label: string;
  isCreated?: boolean;
};

export const FlowLabelComponent: React.FC<FlowLabelComponentProps> = (props) => {
  const { label, isCreated, ...rest } = props;

  return <FlowLabelComponentStyle className={rest.className} >
    { label }
    <Button className="remove-btn">
      <img src={TrashSVG}></img>
    </Button>
  </FlowLabelComponentStyle>
}