import { StyledComponentProps, styled } from "@mui/material";
import { CustomTheme } from "../../../styles/type";

type QRCodeModalStyleProps = StyledComponentProps;

export const QRCodeModalStyle = styled(
  "button"
)<QRCodeModalStyleProps>(({ theme }) => {
  const customTheme = theme as CustomTheme;
  return {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  }
});
