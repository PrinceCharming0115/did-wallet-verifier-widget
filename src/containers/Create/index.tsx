import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CreateFlowView } from '../../components/view';
import { AppDispatch, AppActions, RootState, AppActionTypes } from '../../redux/store';

export const CreateFlowContainer = () => {

  const dispatch = useDispatch();

  type saveDataType = {
    verificationName: string;
    verificationFlow: object;
  }

  const saveVerification = (data: AppActionTypes.Verification.SaveVerificationRequestAction) => {
    dispatch(AppActions.verification.saveVerificationRequest(data));
  }

  return <CreateFlowView saveVerification={saveVerification} />
}