import React, { useEffect, useRef, useState } from 'react';
import { Box, InputBase, InputProps, Button } from '@mui/material';
import { RequestTypeLabelStyle } from './index.style';
import { REQUEST_TYPE } from '../../../consts'


type RequestTypeLabelProps = {
  type: number;
};

export const RequestTypeLabelComponent: React.FC<RequestTypeLabelProps> = ({ type }) => {

  const [ reqType, setReqType ] = useState<boolean>(true);

  useEffect(()=>{
    if (type === 0) {
      setReqType(true);
    } else {
      setReqType(false);
    }
  }, [])

	return <RequestTypeLabelStyle onClick={() => setReqType(type => !type) }
  >
    {
      reqType ? 'Proof' : 'Data'
    }
  </RequestTypeLabelStyle>
}