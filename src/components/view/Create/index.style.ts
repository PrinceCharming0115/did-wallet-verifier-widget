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
      
      '.main-header': {
        fontWeight: 'bold'
      },

      '.main-footer': {
        marginTop: '2rem'
      },

      '.main-content': {
        '.label': {
          fontSize: '1rem',
          fontWeight: 700
        },

        '.qr-content-header': {
          display: 'flex',
          justifyContent: 'space-between',

          '.add-attribute-btn-wrapper': {
            display: 'flex',
            justifyContent: 'space-between',
            width: '28rem',

            [customTheme.breakpoints.down('xl')]: {
              width: '23rem'
            },
          }
        },

        '.flow-content': {
          display: 'flex',

          '.qr-content': {
            width: '65%',
            display: 'flex',
            justifyContent: 'space-between',

            '.add-btn': {
              padding: '0.6rem 1rem',
              fontSize: '15px'
            },

            '.verify-container' : {
              width: '48rem',

              '.request-icon': {
                width: '16px',
                marginLeft: '0.75rem',
              }
            },

            '.request-type-item': {
              padding: '0.8rem',
              marginTop: '0.5rem'
            },

            '.attribute-list': {
              width: '28rem',        

              [customTheme.breakpoints.down('xl')]: {
                width: '23rem'
              },
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

          '.select-identity': {
            width: '100%',
            color: customTheme.colors.black,
            borderRadius: '0.5rem',
            backgroundColor: customTheme.colors.secondary00
          }
        }
      },

      '.save-btn': {
        padding: '1.2rem 2rem',
        fontSize: '16px'
      },
    },

    '.margin-top-2rem': {
      marginTop: '2rem'
    },

    '.margin-top-8px': {
      marginTop: '0.5rem'
    },

    '.line-height-36px': {
      lineHeight: '36px'
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
