import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DetailFlowView } from '../../components/view';
import { AppActions, AppDispatch, RootState } from '../../redux/store';
import { useLocation } from 'react-router-dom';

export const DetailFlowContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { verification } = useSelector((state: RootState) => state.verification);
  const { interactions, interactionTotalNumber } = useSelector((state: RootState) => state.interaction);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const location = useLocation();

  const paths = location.pathname.split('/');
  
  useEffect(() => {
    dispatch(AppActions.verification.getVerificationRequest({ verificationID: parseInt(paths[paths.length - 1]) }));

    dispatch(AppActions.interaction.getInteractionsRequest({ verificationID: parseInt(paths[paths.length - 1]), pageNumber: pageNumber }));
  }, []);

  useEffect(() => {
    dispatch(AppActions.interaction.getInteractionsRequest({ verificationID: parseInt(paths[paths.length - 1]), pageNumber: pageNumber }));
  }, [pageNumber]);

  return <DetailFlowView 
    verification={verification} 
    interactions={interactions}
    pageNumber={pageNumber} 
    setPageNumber={setPageNumber}
    interactionTotalNumber={interactionTotalNumber}
  />
}