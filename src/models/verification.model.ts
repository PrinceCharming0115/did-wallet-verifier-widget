export interface VerificationModel {
  id: number,
  did: string;
  verificationFlowName: string;
  verificationFlow: string;
  createdAt: Date;
  deletedAt: string|null;
  updatedAt: string|null;
  accessCount: number;
}
