import { StyledComponentProps, styled } from "@mui/material";
import { CustomTheme } from "../../../styles/type";

type AgeRangeComponentStyleProps = StyledComponentProps;

export const AgeRangeComponentStyle = styled(
  "div"
)<AgeRangeComponentStyleProps>(({ theme }) => {
  const customTheme = theme as CustomTheme;

  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '.request-container': {
      borderRadius: '0.5rem',
      backgroundColor: customTheme.colors.secondary00,
      width: '28rem',
      padding: '1rem 1rem 1rem 1rem',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'space-between',

      [customTheme.breakpoints.down('xl')]: {
        width: '23rem'
      },
  
    },

    '.request-type': {
      marginRight: '2rem',
      borderRadius: '30px',
      color: '#8A6BE1',
      backgroundColor: customTheme.colors.secondary00,
      padding: '0.3rem 1rem',
      width: '5rem',
      textAlign: 'center',
    },
    
    '.remove-btn' : {
        padding: 0,
        border: 'none',
        minWidth: '10px'
    },

    '.input-wrapper': {
        display: 'flex',
        alignItems: 'center',

        '.age-input': {
            width: '3rem',
            borderRadius: '1rem',
            backgroundColor: customTheme.colors.white,
            color: customTheme.colors.black,
            textAlign: 'center',
            padding: '2px',
            height: '1.5rem',
            border: 'none',
            outline: 'none',
            fontSize: '15px',
            margin: '0 1rem'
        },

        '.age-input::-webkit-inner-spin-button, .age-input::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
          margin: '0'
        },

        '.age-label': {
            fontSize: '12px'
        }
    }
  }
});
