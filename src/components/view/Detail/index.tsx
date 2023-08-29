import React, { useState, useCallback } from 'react';
import { 
  BoxProps, 
  Box, 
  Typography,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Modal,
  Button
 } from '@mui/material';
import { Link } from 'react-router-dom';
import QRCode from 'react-qr-code';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ButtonComponent, InputComponent, PaginationComponent } from '../../common';
import { DetailFlowViewStyle } from './index.style';
import { CloseSVG, EyeSVG, InteractionExportSVG, PdfSVG, PngSVG, UsersSVG } from '../../../assets/icon';
import { CSVLink } from 'react-csv';
import { VerificationModel, InteractionModel } from '../../../models';
import { credentialSubjectArray } from '../../../consts';
import { getDateFormat } from '../../../utils';

type DetailFlowViewProps = BoxProps & {
  verification: VerificationModel;
  interactions: InteractionModel[];
  interactionTotalNumber: number;
  setPageNumber: (currentNumber: number) => void;
  pageNumber: number;
};


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#F5F2FD',
  borderRadius: '1.5rem',
  boxShadow: 24,
  fontFamily: 'Nunito',
  p: 4,

  '.modal-header': {
    display: 'flex',
    justifyContent: 'space-between',

    '.close-btn': {
      minWidth: '10px',
      padding: 0
    },

    '#modal-modal-title': {
      fontSize: '30px',
      fontWeight: 'bold'
    }
  },

  '.modal-content': {
    marginTop: '2rem'
  },

  '.interaction-detail': {
    borderRadius: '1rem',
    backgroundColor: 'white',
    marginBottom: '0.5rem',
    padding: '0.5rem 1rem',

    '.interaction-item': {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1rem',
      borderBottom: '1px solid gray'
    },

    '.interaction-item:last-child': {
      borderBottom: 'none'
    }
  }
};

export const DetailFlowView: React.FC<DetailFlowViewProps> = (props) => {
 
  type AttributeListType = {
    attribute: string;
    type: number
  }

  const [isAddAttribute, setIsAddAttribute ] = useState<boolean>(false);
  const [attributeList, setAttributeList] = useState<AttributeListType[]>([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const qrcodeRef = React.createRef();

  
  let temp = '';
  if (!!props.verification.verificationFlow) {
    temp = JSON.parse(props.verification.verificationFlow);
  }
  const verificationFlowKeys = Object.keys(temp);

  const handleAddAttributeClick = () => {
    setIsAddAttribute(true);
  }

  const handleAttributeChange = (value: string) => {
    const temp = {
      attribute: value,
      type: 0
    };
    setAttributeList([...attributeList, temp]);
    setIsAddAttribute(false);
  }

  const removeAttribute = (index: number) => {
    const tempArray = attributeList;
    tempArray.splice(index, 1);

    setAttributeList([...tempArray]);
  }

  const exportQRCodeToPDF = () => {
    const qrCodeElement = document.querySelector('#QRCode') as HTMLElement;
    html2canvas(qrCodeElement).then(canvas => {
      const imageData = canvas.toDataURL('image/png');
  
      const pdf = new jsPDF();
  
      pdf.addImage(imageData, 'PNG', 10, 10, 50, 50); 
  
      pdf.save('qrcode.pdf');
    });
  }

  const exportQRCodeToPNG = () => {
    const qrCodeElement = document.querySelector('#QRCode') as HTMLElement;
    html2canvas(qrCodeElement).then(canvas => {
     
      const imageData = canvas.toDataURL('image/png');
       
      const link = document.createElement('a');
      link.href = imageData;
      link.download = 'qrcode.png'; 
      link.click();
    });
  }

  return <DetailFlowViewStyle>
    <Box className='main font-nunito'>
      
      <Box >
        <Typography className='main-header font-size-40px font-nunito'>Verification flow</Typography>
      </Box>
      <Box className='main-content margin-top-2rem'>
        <Box className='flow-info'>
          <Box>
            <Box className='flow-header'>
              <Typography className='label font-nunito'> Verification Flow name </Typography>
              <Box className='label-container margin-top-8px'>
                <InputComponent readOnly value={!!props.verification.verificationFlowName && props.verification.verificationFlowName} />
              </Box>
            </Box>
            <Box className='flow-content margin-top-2rem'>
              <Box className='qr-content'>
                <Box className='verify-container'>        
                  <Box className='qr-content-header'>
                    <Typography className='bold-text line-height-36px font-nunito'>Request information to verify</Typography>            
                  </Box>    
                {
                  verificationFlowKeys.length > 0 && verificationFlowKeys.map((item, index) => (
 
                    <Box className='request-name' key={index}>                
                     <InputComponent readOnly value={ credentialSubjectArray.filter(obj => obj.key === item)[0].text } />
                    </Box>  
                  ))
                }      
                 
                </Box>             
              </Box>

              
            </Box>
          </Box>
          <Box className='qr-preview'>
            <Typography variant='h5' className='qr-code-preview-header bold-text font-nunito'>QR Access Onboard</Typography>
            <Box className='qr-code-wrapper'>
              <Box className='qr-code-container' id="QRCode">
                {
                  !!props.verification.verificationFlow && 
                    <QRCode size={180} value={props.verification.verificationFlow} />
                }
              </Box>
            </Box>
            <Box className='export-btn-group'>
              <ButtonComponent onClick={exportQRCodeToPDF} className='primary-btn export-btn'>
                <img src={PdfSVG}></img>
                <span className='font-nunito'>PDF</span>
              </ButtonComponent>
              <ButtonComponent onClick={exportQRCodeToPNG} className='primary-btn export-btn'>
                <img src={PngSVG}></img>
                <span className='font-nunito'>PNG</span>
              </ButtonComponent>
            </Box>
          </Box>
        </Box>
        <Box className='interaction-container'>
          <Typography className='bold-text line-height-36px font-nunito'>Interaction mornitoring</Typography>
          <Box className='export-interaction-container'>
            <Box className='export-table-container'>
              <TableContainer component={Paper} className='interaction-table'>
                <Table sx={{ minWidth: 450 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className='thead-cell'>Name</TableCell>
                      <TableCell align='center' className='thead-cell'>Result</TableCell>
                      <TableCell align='center' className='thead-cell'>Date</TableCell>
                      <TableCell align='center' className='thead-cell'>Details</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {  props.interactions.length > 0 && props.interactions.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {'Fedg'}
                        </TableCell>
                        <TableCell 
                          align='center'
                          className={
                            row.result === 1 ?
                              'verified' :
                                row.result === 2 ?
                                  'pending' : 
                                    'failed'
                          }
                          >
                          {
                            row.result === 1 ?
                              'Verified' :
                                row.result === 2 ?
                                  'Pending' : 
                                    'Failed'
                          }
                        </TableCell>
                        <TableCell align='center'>{getDateFormat(row.createdAt)}</TableCell>
                        <TableCell align='center'>
                          <Link onClick={handleOpen} to='#javascript'>
                            <img src={EyeSVG}></img>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                    {
                      props.interactions.length === 0 && 
                      <TableRow>
                        <TableCell className='text-center' colSpan={5}>
                          There is no data to display.
                        </TableCell>
                      </TableRow>
                    }
                  </TableBody>
                </Table>
                <PaginationComponent 
                  setPageNumber={props.setPageNumber} 
                  pageNumber={props.pageNumber} 
                  totalNumber={props.interactionTotalNumber} />
              </TableContainer>
            </Box>
            <Box className='export-interaction-group'> 
              <CSVLink data={props.interactions} filename='interactions.csv' className='primary-btn'>
                <img src={InteractionExportSVG}></img>
                <span className='font-nunito'>Export Interactions</span>
              </CSVLink>
              <Box className='counter-container'>
                <img src={UsersSVG}></img>
                <span className='counter font-nunito'>{ props.interactionTotalNumber }</span>
                <span className='font-nunito'>Access counter</span>
              </Box>
            </Box>
          </Box> 
        </Box>
      </Box>
    </Box>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box className='modal-header'>
          <span id="modal-modal-title" className='font-nunito'>
            Interaction details
          </span>
          <Button className='close-btn' onClick={handleClose}>
            <img src={CloseSVG}></img>
          </Button>
        </Box>
        <Box className='modal-content'>
          <Box className='interaction-detail'>
            <Box className='interaction-item'>
              <span>Name</span>
              <span>Mario Rossi</span>
            </Box>
            <Box className='interaction-item'>
              <span>Birthday</span>
              <span>13/12/1999</span>
            </Box>
            <Box className='interaction-item'>
              <span>Document Type</span>
              <span>Driving License</span>
            </Box>
            <Box className='interaction-item'>
              <span>Country</span>
              <span>Italy</span>
            </Box>
            <Box className='interaction-item'>
              <span>Address</span>
              <span>Exoid Street 12</span>
            </Box>
          </Box>
          <Box className='interaction-detail'>
            <Box className='interaction-item'>
              <span>Issuing day</span>
              <span>12 May 2018</span>
            </Box>
            <Box className='interaction-item'>
              <span>Expiration day</span>
              <span>12 May 2028</span>
            </Box>
          </Box>
          <Box className='interaction-detail'>
            <Box className='interaction-item'>
              <span>Date</span>
              <span>20/12/2023</span>
            </Box>
            <Box className='interaction-item'>
              <span>Connection ID</span>
              <span>34612swqd23ind</span>
            </Box>
          </Box>
          <Box className='interaction-detail'>
            <Box className='interaction-item'>
              <span>Result</span>
              <span>Verified</span>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  </DetailFlowViewStyle>
}