import { StyledComponentProps, styled } from "@mui/material";
import { CustomTheme } from "../../../styles/type";

type CreateFlowViewStyleProps = StyledComponentProps & {};

export const CreateFlowViewStyle = styled(
  "div"
)<CreateFlowViewStyleProps>(({ theme }) => {
  const customTheme = theme as CustomTheme;

  return {

    '.main': {
      backgroundColor: customTheme.colors.white,
      backgroundSize: 'cover',
      borderRadius: '2rem',
      display: 'flex',
      flexDirection: 'column',      
      
      // '.title': {
      //   fontSize: '1.8rem',
      //   fontWeight: '700'
      // },

      // '.btn': {
      //   borderRadius: '0.5rem',
      //   backgroundColor: `${customTheme.colors.black} !important`
      // }

      '.main-header': {
        fontWeight: 'bold'
      },

      '.main-content': {
        '.label': {
          fontSize: '1rem',
          fontWeight: 700
        },

        '.qr-content-header': {
          display: 'flex',
          justifyContent: 'space-between',
        },

        '.flow-content': {
          display: 'flex',

          '.qr-content': {
            width: '65%',
            display: 'flex',
            justifyContent: 'space-between',

            '.add-btn': {
              padding: '0.6rem 1rem',
            },

            '.verify-container' : {
              width: '28rem',
            },

            '.request-type-container' : {
              width: '25%',

              '.request-icon': {
                width: '16px',
                marginLeft: '0.75rem',
              }
            },

            '.request-type-item': {
              padding: '0.8rem',
              marginTop: '0.5rem'
            }
          },

          '.qr-preview': {
            // width: '35%',
            marginLeft: 'auto',  
            textAlign: 'center',

            '.qr-code-preview-header': {
              fontSize: '24px'
            },

            '.qr-code-wrapper': {
              marginTop: '1rem',
              borderRadius: '1.5rem',
              backgroundColor: customTheme.colors.btnPrimary00,
              padding: '2.25rem',
              boxShadow: '0px 70px 80px 0px #986ce478',

              '.qr-code-container': {
                padding: '0.75rem',
                backgroundColor: customTheme.colors.white,
                borderRadius: '1.5rem'
              }
            },
          },
        },

        '.label-container': {
          // width: '28rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',

          '.select-identity': {
            width: '100%',
            color: customTheme.colors.black,
            borderRadius: '0.5rem',
            backgroundColor: customTheme.colors.secondary00
          }
        }
      },

      '.save-btn': {
        padding: '1.2rem 2rem'
      },
    },

    '.margin-top-2rem': {
      marginTop: '2rem'
    },

    '.margin-top-8px': {
      marginTop: '0.5rem'
    },

    '.bold-text' : {
      fontWeight: 'bold'
    },

    '.line-height-36px': {
      lineHeight: '36px'
    },

    '.font-nunito': {
      fontFamily: 'Nunito'
    },

    '.primary-btn': {
      borderRadius: '5rem',
      backgroundColor: customTheme.colors.btnPrimary00,
      color: customTheme.colors.white,
      letterSpacing: '0.7px',
      fontWeight: '400'
    },

    '.display-flex': {
      display: 'flex',
      justifyContent: 'center'
    },

      '.MuiPopover-paper': {
        backgroundColor: `${customTheme.colors.white} !important`
    }
  }
});
