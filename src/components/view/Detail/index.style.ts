import { StyledComponentProps, styled } from "@mui/material";
import { CustomTheme } from "../../../styles/type";

type DetailFlowViewStyleProps = StyledComponentProps & {};

export const DetailFlowViewStyle = styled(
  "div"
)<DetailFlowViewStyleProps>(({ theme }) => {
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

      '.main-content': {
        '.label': {
          fontSize: '1rem',
          fontWeight: 700
        },

        '.flow-info': {
          display: 'flex',

          '.qr-preview': {
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

            '.export-btn-group': {
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '1rem',

              '.export-btn': {
                padding: '0.75rem 2rem',
                display: 'flex',
                alignItems: 'center',

                'span': {
                  marginLeft: '0.5rem'
                }
              }
            }
          },
        },

        '.qr-content-header': {
          display: 'flex',
          justifyContent: 'space-between',
        },

        '.flow-content': {
          display: 'flex',

          '.qr-content': {
            width: '70%',
            display: 'flex',
            justifyContent: 'space-between',

            '.request-type-container' : {
              width: '25%',

              '.request-icon': {
                width: '16px',
                marginLeft: '0.75rem',
              }
            },

            '.request-name': {
              marginTop: '0.5rem'
            },

            '.request-type-item': {
              padding: '0.8rem',
              marginTop: '0.5rem'
            }
          },

          
        },

        '.interaction-container': {
          '.export-interaction-container': {
            display: 'flex',

            '.export-table-container': {
              width: '70%',

              '.interaction-table': {
                backgroundColor: customTheme.colors.white,
                marginTop: '1rem',
                boxShadow: 'none',
        
                'table' : {
                  borderCollapse: 'separate',
                  borderSpacing: '0px 7px',
        
                  'thead > tr > th': {
                    backgroundColor: 'transparent',
                    paddingBottom: '10px'
                  },
        
                  'tbody th' : {
                    borderRadius: '1rem 0 0 1rem'
                  },  
        
                  'tbody td:last-child': {
                    borderRadius: '0 1rem 1rem 0'
                  },
        
                  'th, td': {
                    color: customTheme.colors.black,
                    fontFamily: 'Nunito',
                    fontSize: '17px',
                    border: 'none',
                    fontWeight: '500',
                    backgroundColor: customTheme.colors.primary100,
                    lineHeight: '1'
                  },
          
                  '.thead-cell': {
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    fontSize: '14px'
                  },
          
                  '.link-to-page': {
                    color: customTheme.colors.btnPrimary00,
                    textDecoration: 'none'
                  },
    
                  '.verified': {
                    color: customTheme.colors.textVerified
                  },
    
                  '.pending': {
                    color: customTheme.colors.textPending
                  },
    
                  '.failed': {
                    color: customTheme.colors.textFailed
                  }
                },
        
              },
            },

            '.export-interaction-group': {
              width: '278px',
              marginLeft: 'auto',
              marginTop: '1.5rem',

              '.primary-btn, .counter-containter ': {
                width: '100%'
              },

              '.primary-btn': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem',

                'span': {
                  marginLeft: '0.5rem'
                }
              },

              '.counter-container': {
                padding: '1rem',
                border: '1px solid #dddbdb',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '1rem',

                '.counter': {
                  fontSize: '30px',
                  fontWeight: 'bold',
                  margin: '0 0.5rem' 
                },

                'img': {
                  width: '30px'
                }
              }
            }
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

    '.display-flex': {
      display: 'flex',
      justifyContent: 'center'
    },

      '.MuiPopover-paper': {
        backgroundColor: `${customTheme.colors.white} !important`
    },
    
  }
});
