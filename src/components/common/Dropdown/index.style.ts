// import mui module
import { StyledComponentProps, styled } from '@mui/material';
import { CustomTheme } from "../../../styles/type";

type DropDownStyleProps = StyledComponentProps & {};

export const DropDownStyle = styled('div')<DropDownStyleProps>(({ theme }) => {
    const customTheme = theme as CustomTheme;

    return {
      width: '100%',

      '.label-container': {
        display: 'flex',
        color: 'red',

        '.label-show': {
          color: 'black',
          marginLeft: '0.5rem',
          fontSize: '1rem'
        },
      },

      '.dropdown-main': {

        '.Dropdown-control': {
          backgroundColor: customTheme.colors.secondary00,
          border: 'none',
          borderRadius: '8px',
          height: '3.5rem',
          lineHeight: '1.2rem',
          display: 'flex',
          alignItems: 'center',
          padding: '1rem',
        },
        
        '.Dropdown-arrow': {
          top: '26px',
          right: '15px'
        },

        '.Dropdown-menu': {
          borderRadius: '1rem',
          border: 'none',
          marginTop: '1px',
          boxShadow: '0px 10px 35px -10px grey',

          '&::-webkit-scrollbar': {
            width: '7px',
            height: '2rem',
            backgroundColor: customTheme.colors.secondary00
          },
          '&::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: customTheme.colors.btnPrimary00,
            borderRadius: '10px'
          }
        },

        '.Dropdown-option': {
          borderBottom: '1px solid #D9D9D9',
          margin: '0 1.5rem',
          padding: '10px'
        }
      },

      '.white-background': {
        '.Dropdown-control': {
          backgroundColor: customTheme.colors.white
        }
      }
    }
});