import { StyledComponentProps, styled } from '@mui/material';
import { CustomTheme } from '../../../styles/type';

type MainViewStyleProps = StyledComponentProps & {};

export const MainViewStyle = styled('div')<MainViewStyleProps>(
  ({ theme }) => {
    const customTheme = theme as CustomTheme;

    return {
    }
  }
);