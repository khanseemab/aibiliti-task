import react, { useState } from "react";
import Maincomponent from "./components/Maincomponent";
import { Box, Button, Drawer, Grid } from "@mui/material";
import "./font.css";
import SidebarMenu from "./components/SidebarMenu";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Head from "./components/Head";
import logo from './assets/download.png';

import { useMediaQuery, useTheme } from "@mui/material";

function App() {
  const innerTheme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  console.log(matches);

  const [open, setOpen] =useState(false);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <>
      <ThemeProvider theme={innerTheme}>
        <ThemeProvider theme={theme}>
              <Drawer anchor="left" open={open} onClose={toggleDrawer(null, false)}>
<SidebarMenu/>      </Drawer>
          <Grid container>
            {matches ? (
              <Grid item sm={2} style={{ position: "fixed", zIndex: "2" }}>
                <SidebarMenu />
              </Grid>
            ) : (
<img
            src={logo}
            alt="Aibiliti"
            width="100px"
            height="25px"
            onClick={toggleDrawer(null, true)}
            style={{margin :'1.7rem 0rem 0rem 2.1rem', position: "fixed", zIndex: "2"}}
          />            )}
            <Grid
              item
              xs={12}
              sm={10}
              style={{ marginLeft: matches ? "14%" : "0" }}
            >
              <div onClick={toggleDrawer(null, false)}
                style={{
                  padding: "0rem",
                  position: "fixed",
                  top: 0,
                  width: matches ? "86%" : "100%", // Add this to make the Head component take up the remaining width
                  zIndex: 1, // Add this to make the Head component appear above other elements
                }}
              >
                <Head />
              </div>
              <Grid pl={3} pt={15}>
                {" "}
                {/* Add padding top to prevent Maincomponent from being overlapped by the fixed Head component */}
                <Maincomponent />
              </Grid>
            </Grid>
          </Grid>
        </ThemeProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
