import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client'
import { ConnectView } from '../../components/view';
import { PATH, qrCodeDataType } from '../../consts';
import { RootState, AppActions, AppDispatch } from '../../redux/store';

export const ConnectContainer = () => {

  const [socketID, setSocketID] = useState<string>('');
  const socket = io(process.env.REACT_APP_SOCKET_SERVER_ENDPOINT ?? '');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    socket.on("connect", () => {
      setSocketID(socket.id);
      console.log("socketID:", socket.id);
   
      socket.on(socket.id, (token) => {
        localStorage.setItem("token", token);
        dispatch(AppActions.auth.setToken(token));
        navigate(PATH.MAIN);
      });
    });
    
  }, []);

  const qrCodeData: qrCodeDataType = {
    endpoint: process.env.REACT_APP_CONNECT_ENDPOINT ?? '',
    socketID: socketID
  }

  return <ConnectView qrCodeData={qrCodeData} />
}