import { InputHTMLAttributes } from 'react';
import { StyledComponentProps, styled } from '@mui/material';
import { CustomTheme } from '../../../styles/type';

type InputComponentStyleProps = StyledComponentProps &
  Pick<InputHTMLAttributes<HTMLInputElement>, 'disabled'> & {
    label?: string;
    error?: boolean;
    border?: boolean;
    inputSize: 'regular' | 'large';
  };

export const InputComponentStyle = styled(
  'div'
)<InputComponentStyleProps>(({ theme, border }) => {
  const customTheme = theme as CustomTheme;

  return {
    padding: '1rem',
    color: customTheme.colors.black,
    borderRadius: '12px',
    outline: 'none',
    width: '28rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    border: `${border? 'solid 1px': ''}`,
    borderColor: customTheme.colors.primary40,
    backgroundColor: customTheme.colors.secondary00,

    '.text-container': {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: customTheme.fonts.oneFont,
      width: '100%',
      flex: 1,

      '.label': {
        color: customTheme.colors.primaryLight80,
        fontSize: '1rem',
        marginBottom: '0.5rem'
      },

      '.text': {
        fontFamily: 'inherit',
        padding: '0px',

        '.MuiInputBase-input': {
          color: customTheme.colors.black,
          padding: '0px',
          fontFamily: 'inherit',
        },
      },
    },

    '.icon-container': {
      flex: '0 0 24px',
      height: '24px',
    },

    '.front': {
      marginRight: '8px',
    },

    '.back': {
      marginLeft: '8px',
    },
  };
});
