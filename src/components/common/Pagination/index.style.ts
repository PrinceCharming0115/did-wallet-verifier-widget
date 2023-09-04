import { StyledComponentProps, styled } from '@mui/material';
import { PATH } from '../../../consts';
import { CustomTheme } from "../../../styles/type";

type PaginationStyleProps = StyledComponentProps & {

};

export const PaginationStyle = styled('div')<PaginationStyleProps>(
  ({ theme }) => {
    const customTheme = theme as CustomTheme;

    return {

      display: 'flex',
      float: 'right',
      color: 'black',
    
     '.pagination-button': {
        cursor: "pointer",             
      },

      '.pagination-context': {
        margin: '0 1rem'
      }
    }
  }
);
