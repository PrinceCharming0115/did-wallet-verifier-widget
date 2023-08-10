import React from 'react';
import { 
  BoxProps, 
  Button ,
  Box
} from '@mui/material';
import { FlowLabelComponentStyle } from './index.style';
import { TrashSVG } from '../../../assets/icon';

type FlowLabelComponentProps = BoxProps & {
  label: string;
  index: number;
  type: string;
  removeAttribute: (index: number) => void;
};

export const FlowLabelComponent: React.FC<FlowLabelComponentProps> = (props) => {
  const { label, index, type, removeAttribute } = props;

  return <FlowLabelComponentStyle >
    <Box className='request-container'>
      { label }
      <Button className="remove-btn" onClick={() => removeAttribute(index)}>
        <img src={TrashSVG}></img>
      </Button>
    </Box>
    <Box className='request-type'>
      {type}
    </Box>
  </FlowLabelComponentStyle>
}