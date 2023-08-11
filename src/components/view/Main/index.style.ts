import { StyledComponentProps, styled } from '@mui/material';
import { CustomTheme } from '../../../styles/type';

type MainViewStyleProps = StyledComponentProps & {};

export const MainViewStyle = styled('div')<MainViewStyleProps>(
  ({ theme }) => {
    const customTheme = theme as CustomTheme;

    return {
      '.new-btn-group': {
        marginTop: '1.5rem'
      },

      '.new-flow-btn': {
        padding: '1rem',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '16px',

        '.new-flow-span': {
          marginLeft: '1rem'
        }
      },

      '.flow-table': {
        backgroundColor: customTheme.colors.white,
        marginTop: '3rem',
        boxShadow: 'none',

        'table' : {
          borderCollapse: 'separate',
          borderSpacing: '0px 7px',

          '.interaction-btn': {
            padding: 0,
            minWidth: '10px'
          },

          'thead > tr > th': {
            backgroundColor: 'transparent',
            paddingBottom: '10px'
          },

          'tbody th' : {
            borderRadius: '1rem 0 0 1rem'
          },  

          'tbody td:last-child': {
            borderRadius: '0 1rem 1rem 0'
          },

          'th, td': {
            color: customTheme.colors.black,
            fontFamily: 'Nunito',
            fontSize: '17px',
            border: 'none',
            fontWeight: '500',
            backgroundColor: customTheme.colors.primary100,
            lineHeight: '1'
          },
  
          '.thead-cell': {
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontSize: '14px'
          },
  
          '.link-to-page': {
            color: customTheme.colors.btnPrimary00,
            textDecoration: 'none'
          }
        },

      }
    }
  }
);