import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppActions, RootState } from '../../redux/store';
import { MainView } from '../../components/view';

export const MainContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { verifications, verificationTotalNumber }  = useSelector((state: RootState) => state.verification);


  const [pageNumber, setPageNumber] = useState<number>(1);
  
  useEffect(() => {
    dispatch(AppActions.verification.getVerificationsRequest({pageNumber}))
  }, [dispatch]);

  useEffect(() => {
    dispatch(AppActions.verification.getVerificationsRequest({pageNumber}))
  }, [pageNumber]);

  return <MainView 
    setPageNumber={setPageNumber} 
    pageNumber={pageNumber} 
    verifications={verifications}
    verificationTotalNumber={verificationTotalNumber}
  />
}