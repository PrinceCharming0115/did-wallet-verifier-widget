import { StyledComponentProps, styled } from "@mui/material";
import { CustomTheme } from "../../../styles/type";

type CreateFlowModalStyleProps = StyledComponentProps;

export const CreateFlowModalStyle = styled(
  "div"
)<CreateFlowModalStyleProps>(({ theme }) => {
  const customTheme = theme as CustomTheme;

  return {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '.modal': {
      width: '70rem',
      height: '47rem',
      backgroundColor: customTheme.colors.white,
      backgroundImage: 'url("/world.jpg")',
      backgroundSize: 'cover',
      borderRadius: '2rem',
      display: 'flex',
      flexDirection: 'column',      
      padding: '3rem 4rem 3rem 4rem',
      boxSizing: 'border-box',
      // '.title': {
      //   fontSize: '1.8rem',
      //   fontWeight: '700'
      // },

      // '.btn': {
      //   borderRadius: '0.5rem',
      //   backgroundColor: `${customTheme.colors.black} !important`
      // }

      '.modal-header': {
        display: 'flex',
        fontSize: '2rem',
        fontWeight: '700'
      },

      '.modal-content': {
        '.label': {
          fontSize: '1rem',
          fontWeight: 700
        },

        '.qr-content-header': {
          display: 'flex',
          justifyContent: 'space-between'
        },

        '.flow-header': {
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
          justifyContent: 'space-between'
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

    '.primary-btn': {
        borderRadius: '5rem',
        backgroundColor: customTheme.colors.btnPrimary00,
        color: customTheme.colors.white
    },

    '.display-flex': {
      display: 'flex',
      justifyContent: 'center'
    }
  }
});
