import React from 'react';
import { BoxProps, Button } from '@mui/material';
import { FlowLabelComponentStyle } from './index.style';
import { TrashSVG } from '../../../assets/icon';

type FlowLabelComponentProps = BoxProps & {
  label: string;
  index: number;
  removeAttribute: (index: number) => void;
};

export const FlowLabelComponent: React.FC<FlowLabelComponentProps> = (props) => {
  const { label, index, removeAttribute } = props;

  return <FlowLabelComponentStyle >
    { label }
    <Button className="remove-btn" onClick={() => removeAttribute(index)}>
      <img src={TrashSVG}></img>
    </Button>
  </FlowLabelComponentStyle>
}