import { StyledComponentProps, styled } from "@mui/material";
import { CustomTheme } from "../../../styles/type";

type FlowLabelComponentStyleProps = StyledComponentProps;

export const FlowLabelComponentStyle = styled(
  "div"
)<FlowLabelComponentStyleProps>(({ theme }) => {
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
    }
  }
});
