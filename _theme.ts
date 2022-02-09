import * as React from "react";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1Bold: true;
    p: true;
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  h1Bold: React.CSSProperties;
  h2Bold: React.CSSProperties;
  p: React.CSSProperties;
}

const theme = createTheme({
     typography: {
          p: { 
          }
     } as ExtendedTypographyOptions,
} as ThemeOptions);

export default theme;
