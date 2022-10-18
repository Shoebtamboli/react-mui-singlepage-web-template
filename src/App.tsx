import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { Products } from "./pages/Products";
import { Blog } from "./pages/Blog";
import { Pricing } from "./pages/Pricing";
import { Contact } from "./pages/Contact";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ColorContext } from "./ColorContext";
import { ScrollToTop } from "./components/ScrollToTop";
import { Appbar } from "./components/Appbar";
import { Footer } from "./components/Footer";

import NavProvider from "./context/NavContext";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

export default function App(props: Props) {
  const [mode, setMode] = React.useState<"light" | "dark">("light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: string) =>
          prevMode === "light" ? "dark" : "light"
        );
      }
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  );

  return (
    <React.Fragment>
      <ColorContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavProvider>
            <Appbar />
            <Blog />
            <Products />
            <Pricing />
            <Contact />
            <Footer />
            <ScrollToTop {...props}>
              <Fab size="large" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
              </Fab>
            </ScrollToTop>
          </NavProvider>
        </ThemeProvider>
      </ColorContext.Provider>
    </React.Fragment>
  );
}
