import React from 'react';
import { BoxProps, Button, Input } from '@mui/material';
import { AgeRangeComponentStyle } from './index.style';
import { TrashSVG } from '../../../assets/icon';
import { Box } from '@mui/system';

type AgeRangeComponentProps = BoxProps & {
  label: string;
};

export const AgeRangeComponent: React.FC<AgeRangeComponentProps> = (props) => {
  const { label, ...rest } = props;

  return <AgeRangeComponentStyle className={rest.className} >
    { label }
    <Box className='input-wrapper'>
      <span className='age-label'>FROM</span>
      <input type='number' className='age-input' />
      <span className='age-label'>TO</span>
      <input type='number' className='age-input' />
      <Button className="remove-btn">
        <img src={TrashSVG}></img>
      </Button>
    </Box>
  </AgeRangeComponentStyle>
}