import { StyledComponentProps, styled } from "@mui/material";
import { url } from "inspector";
import { CustomTheme } from "../../../styles/type";

type WalletConnectStyleProps = StyledComponentProps;

export const WalletConnectComponentStyle = styled(
  "div"
)<WalletConnectStyleProps>(({ theme }) => {
  const customTheme = theme as CustomTheme;

  return {
    textAlign: 'center',
    backgroundImage: 'url("../../../assets/world.jpg")',

    '.font-size-30px': {
      fontSize: '30px'
    },

    '.connect-header': {
      marginTop: '1rem'
    },

    '.qr-code-wrapper': {
      marginTop: '1rem',
      borderRadius: '1.5rem',
      backgroundColor: customTheme.colors.btnPrimary00,
      padding: '1.5rem 2.5rem 2.5rem 2.5rem',
      boxShadow: '0px 70px 80px 0px #986ce478',
      width: '16rem',
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

    '.font-size-24px': {
      fontSize: '20px'
    },

    '.line-height-1px': {
      lineHeight: 1
    },
  }
});
