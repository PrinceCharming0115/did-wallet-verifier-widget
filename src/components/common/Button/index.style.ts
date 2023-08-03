import { StyledComponentProps, styled } from "@mui/material";
import { CustomTheme } from "../../../styles/type";

type ButtonComponentStyleProps = StyledComponentProps;

export const ButtonComponentStyle = styled(
  "button"
)<ButtonComponentStyleProps>(({ theme, type, disabled }) => {
  const customTheme = theme as CustomTheme;

  return {
    fontFamily: customTheme.fonts.mainFont,
    fontWeight: customTheme.fontWeights.regular,
    backgroundColor:
      type === "submit"
        ? disabled
          ? customTheme.colors.primary60
          : customTheme.colors.primary40
        : disabled
          ? customTheme.colors.primary40
          : customTheme.colors.primaryLight10,
    color:
      type === "submit"
        ? disabled
          ? customTheme.colors.white
          : customTheme.colors.white
        : disabled
          ? customTheme.colors.white
          : customTheme.colors.white,
    border:
      type === "submit"
        ? "none"
        : `1px solid ${disabled
          ? customTheme.colors.disabledCancelButtonBorderColor
          : customTheme.colors.activeCancelButtonBorderColor
        }`,
    fontSize: "14px",
    borderRadius: "10px",
    borderWidth: "0px",
    cursor: disabled ? "not-allowed !important" : "pointer !important",
    boxSizing: "border-box",
    textAlign: "center",

    transition: "all",
    transitionDuration: "1s",

    "&:hover": {
      backgroundColor: disabled
        ? customTheme.colors.primary60
        : customTheme.colors.primary20
    },
  };
});
