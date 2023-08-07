import React from 'react';
import { BoxProps, Button, Input } from '@mui/material';
import { CountryRequestComponentStyle } from './index.style';
import { TrashSVG, CancelSVG } from '../../../assets/icon';
import { Box } from '@mui/system';
import { DropDownComponent } from '../Dropdown';

type CountryRequestComponentProps = BoxProps & {
  label: string;
};

export const CountryRequestComponent: React.FC<CountryRequestComponentProps> = (props) => {
  const { label, ...rest } = props;

  const mockData = ['UK','France', 'Italy','Cyprus','Finland'];

  return <CountryRequestComponentStyle className={rest.className} >
    <Box className='label-wrapper'>
      { label }
      <Button className="remove-btn">
        <img src={TrashSVG}></img>
      </Button>
    </Box>
    <Box className='selected-country-list'>
      <Box className='selected-country'>
        <span>France</span>
        <Button><img src={CancelSVG}></img></Button>
      </Box>
      <Box className='selected-country'>
        <span>UK</span>
        <Button><img src={CancelSVG}></img></Button>
      </Box>
      <Box className='selected-country'>
        <span>Italy</span>
        <Button><img src={CancelSVG}></img></Button>
      </Box>
      <Box className='selected-country'>
        <span>Cyprus</span>
        <Button><img src={CancelSVG}></img></Button>
      </Box>
      <Box className='selected-country'>
        <span>Germany</span>
        <Button><img src={CancelSVG}></img></Button>
      </Box>
    </Box>
    <DropDownComponent 
      values={mockData} 
      className='white-background'
      placeholder='Add new country'
    />
  </CountryRequestComponentStyle>
}