import { StyledComponentProps, styled } from "@mui/material";
import { url } from "inspector";
import { CustomTheme } from "../../../styles/type";

type DownloadAppStyleProps = StyledComponentProps;

export const DownloadAppComponentStyle = styled(
  "div"
)<DownloadAppStyleProps>(({ theme }) => {
  const customTheme = theme as CustomTheme;

  return {
    textAlign: 'center',
    backgroundImage: 'url("../../../assets/world.jpg")',

    '.font-size-30px': {
      fontSize: '30px',
      fontWeight: 'bold'
    },

    '.font-nunito': {
      fontFamily: 'Nunito'
    },

    '.btn' : {
      width: '10rem',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: customTheme.colors.black,
      textAlign: 'left',
      padding: '0.25rem 0.5rem',
      borderRadius: '0.5rem',
      margin: '0 0.25rem',
    },

    '.qr-code-wrapper': {
      marginTop: '1rem',
      borderRadius: '1.5rem',
      backgroundColor: customTheme.colors.btnPrimary00,
      padding: '1rem 2.5rem 2.5rem 2.5rem',
      boxShadow: '0px 70px 80px 0px #986ce478',
      width: '15rem',
      margin: '3.5rem auto',
      color: customTheme.colors.white,

      '.qr-code-container': {
        padding: '0.75rem',
        backgroundColor: customTheme.colors.white,
        borderRadius: '1.5rem',
        marginTop: '1rem'
      }
    },

    '.font-size-11px': {
        fontSize: '11px',
    },

    '.font-size-20px': {
        fontSize: '20px'
    },

    '.font-size-18px': {
        fontSize: '18px'
    },

    '.line-height-1px': {
        lineHeight: 1
    },

    '.next-btn-group': {
      display: 'inline-flex',
      alignItems: 'center',
      backgroundColor: customTheme.colors.primary100,
      borderRadius: '1rem',
      padding: '0.75rem 1rem',

      '.next-btn': {
        marginLeft: '2rem',
        display: 'flex',
        alignItems: 'center',
        padding: '0.75rem 1rem',
        borderRadius: '1.75rem',
        backgroundColor: customTheme.colors.btnPrimary00,

        'img': {
          marginLeft: '1rem'
        },

        'span': {
          letterSpacing: '1.2px'
        }
      }
    }
  }
});
