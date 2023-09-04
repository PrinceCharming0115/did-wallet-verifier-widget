import getVerifications from './getVerifications.saga';
import saveVerification from './saveVerification.saga';
import getVerification from './getVerification.saga';

export default [
  getVerifications,
  saveVerification,
  getVerification
]