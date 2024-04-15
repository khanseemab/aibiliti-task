import Maincomponent from "./components/Maincomponent";
import { Box, Grid } from "@mui/material";
import "./font.css";
import SidebarMenu from "./components/SidebarMenu";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Head from "./components/Head";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container >
          <Grid style={{ position: "fixed" ,zIndex:"2"}}>
            <SidebarMenu />
          </Grid>
          <Grid xs={10} style={{ marginLeft: "14%" }}>
            <div
              style={{
                padding:"0px",
                position: "fixed",
                top: 0,
                width: '86%', // Add this to make the Head component take up the remaining width
                zIndex: 1, // Add this to make the Head component appear above other elements
              }}
            >
              <Head />
            </div>
            <Grid pl={3} pt={15}> {/* Add padding top to prevent Maincomponent from being overlapped by the fixed Head component */}
              <Maincomponent />
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;