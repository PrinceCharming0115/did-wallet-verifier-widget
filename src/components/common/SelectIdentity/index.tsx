import React, { useEffect, useRef, useState } from 'react';
import { Box, InputBase, InputProps, Button } from '@mui/material';
import { SelectIdentityStyle } from './index.style';
import { REQUEST_TYPE } from '../../../consts'


type RequestTypeLabelProps = {
  type: number;
};

export const SelectIdentityComponent: React.FC<RequestTypeLabelProps> = ({ type }) => {

  const [ reqType, setReqType ] = useState<boolean>(true);

  useEffect(()=>{
    if (type === 0) {
      setReqType(true);
    } else {
      setReqType(false);
    }
  }, [])

	return <SelectIdentityStyle onClick={() => setReqType(type => !type) }
  >
    {
      reqType ? 'Proof' : 'Data'
    }
  </SelectIdentityStyle>
}