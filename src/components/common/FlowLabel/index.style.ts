import { StyledComponentProps, styled } from "@mui/material";
import { CustomTheme } from "../../../styles/type";

type FlowLabelComponentStyleProps = StyledComponentProps;

export const FlowLabelComponentStyle = styled(
  "div"
)<FlowLabelComponentStyleProps>(({ theme }) => {
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
    }
  }
});
