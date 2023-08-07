import { StyledComponentProps, styled } from "@mui/material";
import { CustomTheme } from "../../../styles/type";

type AgeRangeComponentStyleProps = StyledComponentProps;

export const AgeRangeComponentStyle = styled(
  "div"
)<AgeRangeComponentStyleProps>(({ theme }) => {
  const customTheme = theme as CustomTheme;

  return {
    borderRadius: '0.5rem',
    backgroundColor: customTheme.colors.secondary00,
    width: '28rem',
    padding: '1rem 1rem 1rem 1rem',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
    
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
