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
    backgroundSize: 'cover',
    height: '100%',

    '.connect-header': {
      marginTop: '1rem',
      fontWeight: 'bold',

      [customTheme.breakpoints.down('lg')]: {
        fontSize: '34px'
      }
    },

    '.qr-code-wrapper': {
      marginTop: '1rem',
      borderRadius: '1.5rem',
      backgroundColor: customTheme.colors.btnPrimary00,
      padding: '2rem 3.5rem 3.5rem 3.5rem',
      boxShadow: '0px 70px 80px 0px #986ce478',
      width: '26.5rem',
      margin: '7rem auto',
      color: customTheme.colors.white,

      [customTheme.breakpoints.down('lg')]: {
        width: '24.5rem',

        '.font-size-26px': {
          fontSize: '21px'
        }
      },

      '.qr-code-container': {
        padding: '1rem',
        backgroundColor: customTheme.colors.white,
        borderRadius: '1.5rem',
        marginTop: '1rem',

        'svg': {
          width: '100%',
          height: '100%'
        }
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
