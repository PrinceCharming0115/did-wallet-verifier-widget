import { StyledComponentProps, styled } from '@mui/material';
import { CustomTheme } from '../../../styles/type';

type DownloadViewStyleProps = StyledComponentProps & {};

export const DownloadViewStyle = styled('div')<DownloadViewStyleProps>(
  ({ theme }) => {
    const customTheme = theme as CustomTheme;

    return {
        textAlign: 'center',
        height: '100%',
    
        '.btn-group': {
          marginTop: '1.5rem',

          '.btn' : {
            width: '12rem',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: customTheme.colors.black,
            textAlign: 'left',
            padding: '0.5rem',
            borderRadius: '0.5rem',
            margin: '0 0.25rem',
          },
        },
    
        '.qr-code-wrapper': {
          marginTop: '1rem',
          borderRadius: '2rem',
          backgroundColor: customTheme.colors.btnPrimary00,
          padding: '1rem 3.5rem 3.5rem 3.5rem',
          boxShadow: '0px 70px 80px 0px #986ce478',
          width: '25rem',
          margin: '4.5rem auto',
          color: customTheme.colors.white,
    
          '.qr-code-container': {
            padding: '1rem',
            backgroundColor: customTheme.colors.white,
            borderRadius: '1.5rem',
            marginTop: '1rem'
          },
        },
    
        '.font-size-12px': {
            fontSize: '12px',
        },
    
        '.font-size-25px': {
            fontSize: '25px'
        },
    
        '.font-size-21px': {
            fontSize: '21px'
        },
    
        '.line-height-1px': {
            lineHeight: 1
        },

        '.font-size-18px': {
          fontSize: '18px'
        },
    
        '.next-btn-group': {
          display: 'inline-flex',
          alignItems: 'center',
          backgroundColor: customTheme.colors.primary100,
          borderRadius: '1.25rem',
          padding: '1rem',
          fontSize: '15px',
    
          '.next-btn': {
            marginLeft: '2rem',
            display: 'flex',
            alignItems: 'center',
            padding: '14px',
            borderRadius: '1.75rem',
            backgroundColor: customTheme.colors.btnPrimary00,
            textDecoration: 'none',
            color: customTheme.colors.white,
    
            'img': {
              marginLeft: '1rem'
            },
    
            'span': {
              letterSpacing: '1.2px'
            }
          }
        }
      }
  }
);