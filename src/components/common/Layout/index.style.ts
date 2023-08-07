import { keyframes } from '@emotion/react';
import { StyledComponentProps, styled } from '@mui/material';

import { CustomTheme } from "../../../styles/type";

type LayoutStyleProps = StyledComponentProps & {};

export const LayoutStyle = styled('div')<LayoutStyleProps>(
  ({ theme }) => {
    const customTheme = theme as CustomTheme;

    return {
      width: '100%',
      height: '100%',
      minHeight: '100vh',
      left: 0,
      top: 0,
      display: 'flex',
      backgroundColor: customTheme.colors.primary00,

      '.navbar-container': {
        width: '20%',
        minWidth: '13rem',
      },

      '.main-container': {
        width: '80%',
        backgroundColor: customTheme.colors.white,
        borderRadius: '2rem',
        padding: '4rem 2rem',
        backgroundImage: 'url("/world.jpg")',


        '.header-container': {
          width: '100%',
          height: '5.5rem',
        },

        '.body-container': {
          width: '100%',
          height: '100%',
          position: 'relative',
          padding: '0 5rem',

          '.profile': {
            position: 'absolute',
            right: 0,
            display: 'flex',
            alignItems: 'center',

            'span': {
              marginLeft: '0.5rem',
              marginRight: '2rem'
            }
          }
        },
      },

      '.font-size-40px': {
        fontSize: '40px',
      },
      

      'input:-webkit-autofill': {
        transition:
          'background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s',
        transitionDelay: 'background-color 5000s, color 5000s',
      },

      'input:-webkit-autofill:hover': {
        transition:
          'background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s',
        transitionDelay: 'background-color 5000s, color 5000s',
      },
      'input:-webkit-autofill:focus': {
        transition:
          'background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s',
        transitionDelay: 'background-color 5000s, color 5000s',
      },
      'input:-webkit-autofill:active': {
        transition:
          'background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s',
        transitionDelay: 'background-color 5000s, color 5000s',
      },

      '.font-nunito': {
        fontFamily: 'Nunito'
      },

      '.bold-text': {
        fontWeight: 'bold'
      },

      '.font-weight-300': {
        fontWeight: '300'
      },  

      '.primary-btn': {
        borderRadius: '5rem',
        backgroundColor: customTheme.colors.btnPrimary00,
        color: customTheme.colors.white,
        letterSpacing: '0.7px',
        fontWeight: '400'
      },
    }
  }
);
