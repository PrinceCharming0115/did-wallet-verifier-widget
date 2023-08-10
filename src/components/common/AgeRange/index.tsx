import React from 'react';
import { BoxProps, Button } from '@mui/material';
import { AgeRangeComponentStyle } from './index.style';
import { TrashSVG } from '../../../assets/icon';
import { Box } from '@mui/system';

type AgeRangeComponentProps = BoxProps & {
  label: string;
  index: number;
  type: string;
  removeAttribute: (index: number) => void;
  handleInputChange: (value: number, type: string) => void;
};

export const AgeRangeComponent: React.FC<AgeRangeComponentProps> = (props) => {
  const { label, index, type, removeAttribute, handleInputChange, ...rest } = props;


  return <AgeRangeComponentStyle className={rest.className} >
    <Box className='request-container'>
      { label }
      <Box className='input-wrapper'>
        <span className='age-label'>FROM</span>
        <input onChange={(e) => {handleInputChange(parseInt(e.target?.value), 'from')}} type='number' className='age-input' />
        <span className='age-label'>TO</span>
        <input onChange={(e) => {handleInputChange(parseInt(e.target?.value), 'to')}} type='number' className='age-input' />
        <Button className="remove-btn" onClick={() => removeAttribute(index)}>
          <img src={TrashSVG}></img>
        </Button>
      </Box>
    </Box>
    <Box className='request-type'>
      {type}
    </Box>
  </AgeRangeComponentStyle>
}