// import node modules
import React, { useEffect, useState, useRef } from 'react';
import Dropdown from 'react-dropdown';

// import mui components
import {
  BoxProps,
  FormControl,
  FormLabel,
  Typography
} from '@mui/material';

// import styles
import { DropDownStyle } from './index.style';
import 'react-dropdown/style.css';

type Props = BoxProps & {
  values: any[],
  className?: string,
  onChangeValue?: Function,
  placeholder?: string,
  value?: string,
  setValue?: Function,
  disabled?: boolean
}

export const DropDownComponent: React.FC<Props> = ({
  values,
  className,
  onChangeValue,
  placeholder,
  value,
  setValue,
  disabled
}) => {

  const changeValue = (e: any) => {
    onChangeValue && onChangeValue(e.value)
  }
  
  return (
    <DropDownStyle >
      <FormControl
        fullWidth
      >        
        <Dropdown
          className={`dropdown-main ${className} `}
          options={values}
          value={value ? value : ""}
          placeholder={placeholder}
          onChange={(e) => changeValue(e)}
          disabled={disabled}
        />        
      </FormControl>
    </DropDownStyle>
  )
};