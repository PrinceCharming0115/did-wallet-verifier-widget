import { InputHTMLAttributes } from 'react';
import { StyledComponentProps, styled } from '@mui/material';
import { CustomTheme } from '../../../styles/type';

type SelectIdentityStyleProps = StyledComponentProps & {};

export const SelectIdentityStyle = styled(
  'div'
)<SelectIdentityStyleProps>(({ theme }) => {
  const customTheme = theme as CustomTheme;

  return {
    borderRadius: '30px',
    color: '#8A6BE1',
    backgroundColor: customTheme.colors.secondary00,
    padding: '0.3rem 1rem',
    width: '3rem',
    textAlign: 'center',
    cursor: 'pointer'
  };
});
