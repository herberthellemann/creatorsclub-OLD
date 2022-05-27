// We are extending the Chakra UI Pro theme

import { extendTheme } from "@chakra-ui/react";
import { theme } from "@chakra-ui/pro-theme";

const myTheme = extendTheme(
  {
    colors: { ...theme.colors, brand: theme.colors.purple },
  },
  theme
);

export default myTheme;
