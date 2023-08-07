import { StyledComponentProps, styled } from "@mui/material";
import { url } from "inspector";
import { CustomTheme } from "../../../styles/type";

type ConnectStyleProps = StyledComponentProps;

export const ConnectViewStyle = styled(
  "div"
)<ConnectStyleProps>(({ theme }) => {
  const customTheme = theme as CustomTheme;

  return {
    textAlign: 'center',
    // backgroundImage: 'url("/world.jpg")',
    backgroundSize: 'cover',
    height: '100%',

    '.connect-header': {
      marginTop: '1rem',
      fontWeight: 'bold'
    },

    '.qr-code-wrapper': {
      marginTop: '1rem',
      borderRadius: '1.5rem',
      backgroundColor: customTheme.colors.btnPrimary00,
      padding: '2rem 3.5rem 3.5rem 3.5rem',
      boxShadow: '0px 70px 80px 0px #986ce478',
      width: '26.5rem',
      margin: '4rem auto',
      color: customTheme.colors.white,

      '.qr-code-container': {
        padding: '0.75rem',
        backgroundColor: customTheme.colors.white,
        borderRadius: '1.5rem',
        marginTop: '1rem'
      }
    },

    '.font-size-12px': {
      fontSize: '12px'
    },

    '.font-size-26px': {
      fontSize: '26px'
    },

    '.line-height-1px': {
      lineHeight: 1
    },
  }
});
