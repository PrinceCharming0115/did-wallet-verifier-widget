import { StyledComponentProps, styled } from "@mui/material";
import { CustomTheme } from "../../../styles/type";

type CountryRequestComponentStyleProps = StyledComponentProps;

export const CountryRequestComponentStyle = styled(
  "div"
)<CountryRequestComponentStyleProps>(({ theme }) => {
  const customTheme = theme as CustomTheme;

  return {
    borderRadius: '0.5rem',
    backgroundColor: customTheme.colors.secondary00,
    width: '28rem',
    padding: '1rem 1rem 1rem 1rem',
    boxSizing: 'border-box',
    
    '.remove-btn' : {
      padding: 0,
      border: 'none',
      minWidth: '10px'
    },

    '.label-wrapper': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    '.Dropdown-control': {
      height: '2.75rem !important',
      borderRadius: '0.75rem !important',
      marginTop: '1rem',

      '.Dropdown-arrow': {
        top: '21px !important'
      }
    },

    '.selected-country-list': {
      display: 'inline-block',
      marginTop: '1rem',
      '.selected-country': {
        backgroundColor: customTheme.colors.white,
        borderRadius: '1rem',
        padding: '0.5rem 0.75rem',
        float: 'left',
        marginLeft: '0.5rem',
        marginBottom: '1rem',

        'span': {
          fontSize: '14px',
        },

        'button': {
          minWidth: '5px',
          marginLeft: '0.5rem',
          padding: '0'
        }
      }
    }
  }
});
