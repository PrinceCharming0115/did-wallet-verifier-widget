import { StyledComponentProps, styled } from "@mui/material";
import { keyframes } from '@emotion/react';
import { CustomTheme } from "../../../styles/type";

type LoadingComponentStyleProps = StyledComponentProps;

const ldsRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingComponentStyle = styled(
  "div"
)<LoadingComponentStyleProps>(({ theme }) => {
  const customTheme = theme as CustomTheme;

  const spinner = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `;

  return {
    width: '1.5rem !important',
    height: '1.5rem !important',
    border: '5px solid',
    borderColor: customTheme.colors.primary40,
    borderTop: '5px solid',
    borderTopColor: customTheme.colors.primary20,
    borderRadius: '50%',
    animation: `${spinner} 1.5s linear infinite`
  }
});
