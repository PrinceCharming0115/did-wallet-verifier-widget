import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  BoxProps,
  Typography,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';
import { CSVLink, CSVDownload } from "react-csv";
import { useDispatch, useSelector } from 'react-redux';
import { ButtonComponent, PaginationComponent } from '../../common';
import { MainViewStyle } from './index.style';
import { PlusSVG } from '../../../assets/sidebar';
import { InteractionSVG } from '../../../assets/icon';
import { PATH } from '../../../consts';
import { VerificationModel } from '../../../models';
import { getDateFormat } from '../../../utils';
import { AppActions, RootState } from '../../../redux/store';


type MainViewProps = BoxProps & {
  verifications: VerificationModel[];
  setPageNumber: (currentNumber: number) => void;
  pageNumber: number;
  verificationTotalNumber: number;
};

export const MainView: React.FC<MainViewProps> = (props) => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { interactions } = useSelector((state: RootState) => state.interaction);

  const onClickHandle = (id: number) => {
    dispatch(AppActions.interaction.getInteractionsRequest({verificationID: id, pageNumber: 0}))
    
    console.log("interactions", interactions);
  
    // // Generate the CSV content
    // const csvContent = "data:text/csv;charset=utf-8,"
    //   + JSON.stringify(interactions);
  
    // // Create a temporary link element
    // const link = document.createElement("a");
    // link.href = encodeURI(csvContent);
    // link.download = "interactions.csv";
  
    // // Trigger the link click event to start the download
    // link.click();
  }

  return <MainViewStyle>
    <Typography className='font-size-40px font-nunito bold-text'>Available flows</Typography>
    <Box className='new-btn-group'>
      <ButtonComponent onClick={() => {navigate(PATH.CREATE)}} className='primary-btn font-nunito new-flow-btn'>
        <PlusSVG svgColor='white' />
        <span className='new-flow-span'>New flow</span>
      </ButtonComponent>  
    </Box>

    <TableContainer component={Paper} className='flow-table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='thead-cell'>Name</TableCell>
            <TableCell className='thead-cell'>Date Created</TableCell>
            <TableCell align='center' className='thead-cell'>Access Counter</TableCell>
            <TableCell align='center' className='thead-cell'>Interactions</TableCell>
            <TableCell className='thead-cell'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.verifications.length > 0 && props.verifications.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.verificationFlowName}
              </TableCell>
              <TableCell>{getDateFormat(row.createdAt)}</TableCell>
              <TableCell align='center'>{row.accessCount}</TableCell>
              <TableCell align='center'>
                <Button onClick={() => {onClickHandle(row.id)}} className='interaction-btn'>
                  <img src={InteractionSVG}></img>
                </Button>
              </TableCell>
              <TableCell>
                <Link  className='link-to-page' to={`${PATH.FLOW}/${row.id}`}>Verification page</Link>
              </TableCell>
            </TableRow>
          ))}
          {
            props.verifications.length === 0 && 
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
        totalNumber={props.verificationTotalNumber} />
    </TableContainer>
  </MainViewStyle>
};