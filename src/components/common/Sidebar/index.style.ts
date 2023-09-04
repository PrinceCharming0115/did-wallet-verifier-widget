import { StyledComponentProps, styled } from '@mui/material';

import { CustomTheme } from '../../../styles/type';

type DesktopSidebarComponentStyleProps = StyledComponentProps & {};

export const DesktopSidebarComponentStyle = styled('div')<DesktopSidebarComponentStyleProps>(
  ({ theme }) => {
    const customTheme = theme as CustomTheme;

    return {
      width: '100%',
      height: '100%',
      backgroundColor: customTheme.colors.colorBackgroundSecondary,

      '.sidebar-logo-img': {
        paddingTop: '3.5rem',
        marginLeft: '9%',
        width: '200px',
        marginBottom: '2rem',

        [customTheme.breakpoints.down('lg')]: {
          width: '180px',
        },
      },

      '.sidebar-list': {
        padding: '2rem',

        [customTheme.breakpoints.down('xl')]: {
          padding: '2rem 1.5rem'
        },

        '.sidebar-item': {
          
          display: 'flex',
          padding: '0.75rem',
          borderRadius: '3rem',
          marginBottom: '1rem',
          textDecoration: 'none',
          color: customTheme.colors.white,
          
          '.sidebar-link-text': {
            marginLeft: '1rem',
            fontFamily: 'Nunito',
            fontSize: '17px',

            [customTheme.breakpoints.down('xl')]: {
              fontSize: '16px',
              marginLeft: '0.5rem'
            },

            [customTheme.breakpoints.down('lg')]: {
              fontSize: '14px',
            },
          }
        },

        '.active': {
          backgroundColor: customTheme.colors.white,
          color: customTheme.colors.black
        }
      },

      '.margin-bottom-16px': {
        marginBottom: '16px'
      },

      '.divider': {
        margin: 'auto',
        width: '90%',
        borderColor: customTheme.colors.colorBackgroundPrimary
      }
    }
  }
);
