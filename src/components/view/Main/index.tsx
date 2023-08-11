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
import { ButtonComponent } from '../../common';
import { MainViewStyle } from './index.style';
import { PlusSVG } from '../../../assets/sidebar';
import { InteractionSVG } from '../../../assets/icon';
import { PATH } from '../../../consts';

type MainViewProps = BoxProps & {
};

function createData(
  name: string,
  createDate: string,
  counter: number,
  flow: string
) {
  return { name, createDate, counter, flow };
}

const rows = [
  createData('Example - Driving License verification', '20/07/2023', 20, "{firstname: {}, lastname: {}, emailAddress: {}, age: {$gt: 20, $lt: 50}}"),
  createData('Example - Human verification', '20/07/2023', 8, "{firstname: {}, lastname: {}, citizenship: {$in: ['Italy', 'Finland']}}"),
];

export const MainView: React.FC<MainViewProps> = (props) => {
  const navigate = useNavigate();

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
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.createDate}</TableCell>
              <TableCell align='center'>{row.counter}</TableCell>
              <TableCell align='center'>
                <CSVLink data={JSON.stringify(row)} filename='interaction.csv' className='interaction-btn'>
                  <img src={InteractionSVG}></img>
                </CSVLink>
              </TableCell>
              <TableCell>
                <Link  className='link-to-page' to={`${PATH.FLOW}/1`}>Verification page</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </MainViewStyle>
};