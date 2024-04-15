import React, { Component, useState } from "react";
import { Box, Grid, Typography, Paper, Drawer, Divider } from "@mui/material";
import About from "../Sections/About/About";
import ProductsAndServices from "../Sections/Products/ProductsAndServices";
import Industries from "../Sections/Industries/Industries";
import Leadership from "../Sections/Leadership/Leadership";
import SWOT from "../Sections/SWOT/SWOT";
import Positioning from "../Sections/Positioning/Positioning";
import BlogActivity from "../Sections/BlogActivity/BlogActivity";
import Head from "./Head";
import ButtonAppBar from "./DrawerComp/DrawerComponent";
import { IconChevronLeft, IconChevronRight, IconX } from "@tabler/icons-react";

const Maincomponent = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();

  const toggleDrawer =
    (component, open = true) =>
    () => {
      setOpen(open);
      setContent(component);
    };

  const drawerList = () => {
    switch (content) {
      case "About":
        return (
          <Box width={650}>
             <Grid
              item
              mt={3}
              ml={0}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconChevronLeft />
                <IconChevronRight />
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "600",
                    fontSize: "1.6rem",
                    display: "inline",
                    marginLeft: "1rem",
                  }}
                >
About                </Typography>
              </div>
              <IconX />
            </Grid>
            <Divider style={{ margin: "1rem 0rem 2rem 0rem" }} />
            <Paper>
              <About />
            </Paper>
          </Box>
        );
      case "Products":
        return (
          <Box width={850}>
            <Grid
              item
              mt={3}
              ml={0}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconChevronLeft />
                <IconChevronRight />
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "600",
                    fontSize: "1.6rem",
                    display: "inline",
                    marginLeft: "1rem",
                  }}
                >
                  Products & Services
                </Typography>
              </div>
              <IconX />
            </Grid>
            <Divider style={{ margin: "1rem 0rem 2rem 0rem" }} />
            <Grid item container>
              <Grid item container columnSpacing={3}>
                {/* forloop to print item 3 times */}
                {Array.from({ length: 2 }).map((_, i) => (
                  <React.Fragment key={i}>
                    <Grid item xs={6} mb={2}>
                      <Paper>
                        <ProductsAndServices />
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper>
                        <ProductsAndServices />
                      </Paper>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </Grid>
          </Box>
        );
      case "Industries":
        return (
          <Box width={850}>
            <Grid
              item
              mt={3}
              ml={0}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconChevronLeft />
                <IconChevronRight />
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "600",
                    fontSize: "1.6rem",
                    display: "inline",
                    marginLeft: "1rem",
                  }}
                >
                  Top Industries & Clients
                </Typography>
              </div>
              <IconX />
            </Grid>
            <Divider style={{ margin: "1rem 0rem 2rem 0rem" }} />
            <Divider style={{ margin: "0.6rem 0rem 2rem 0rem" }} />
            <Grid item container>
              <Grid item container columnSpacing={3}>
                {/* forloop to print item 3 times */}
                {Array.from({ length: 2 }).map((_, i) => (
                  <React.Fragment key={i}>
                    <Grid item xs={6} mb={2}>
                      <Paper>
                        <Industries />
                      </Paper>
                    </Grid>
                    
                  </React.Fragment>
                ))}
              </Grid>
            </Grid>
          </Box>
        );
      case "LeaderShip":
        return (
          <Box width={850}>
            <Grid
              item
              mt={3}
              ml={0}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconChevronLeft />
                <IconChevronRight />
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "600",
                    fontSize: "1.6rem",
                    display: "inline",
                    marginLeft: "1rem",
                  }}
                >
                  LeaderShip
                </Typography>
              </div>
              <IconX />
            </Grid>
            <Divider style={{ margin: "0.6rem 0rem 2rem 0rem" }} />
            <Grid item container>
              <Grid item container columnSpacing={3} >
                {/* forloop to print item 3 times */}
                {Array.from({ length: 3 }).map((_, i) => (
                  <React.Fragment key={i}>
                    <Grid item xs={6} mb={2}>
                      <Paper>
                        <Leadership />
                      </Paper>
                    </Grid>
                    
                  </React.Fragment>
                ))}
              </Grid>
            </Grid>
          </Box>
        );
      case "SWOT":
        return (
          <Box width={850}>
             <Grid
              item
              mt={3}
              ml={0}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconChevronLeft />
                <IconChevronRight />
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "600",
                    fontSize: "1.6rem",
                    display: "inline",
                    marginLeft: "1rem",
                  }}
                >
                  SWOT
                </Typography>
              </div>
              <IconX />
            </Grid>
            <Divider style={{ margin: "0.6rem 0rem 2rem 0rem" }} />
            <Grid item container>
              <Grid item container columnSpacing={3}>
                {/* forloop to print item 3 times */}
                {Array.from({ length: 2 }).map((_, i) => (
                  <React.Fragment key={i}>
                   
                    <Grid item xs={6}>
                      <Paper>
                      <SWOT />
                      </Paper>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </Grid>
          </Box>
        );
      case "Positioning":
        return (
          <Box width={850}>
            <Grid
              item
              mt={3}
              ml={0}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconChevronLeft />
                <IconChevronRight />
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "600",
                    fontSize: "1.6rem",
                    display: "inline",
                    marginLeft: "1rem",
                  }}
                >
                  Positioning
                </Typography>
              </div>
              <IconX />
            </Grid>
            <Divider style={{ margin: "0.6rem 0rem 2rem 0rem" }} />
            <Grid item container>
              <Grid item container columnSpacing={3}>
                {/* forloop to print item 3 times */}
                {Array.from({ length: 2 }).map((_, i) => (
                  <React.Fragment key={i}>
                    
                    <Grid item xs={6}>
                      <Paper>
                      <Positioning />
                      </Paper>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </Grid>
          </Box>
        );
      case "BlogActivity":
        return (
          <Box width={850}>
           <Grid
              item
              mt={3}
              ml={0}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconChevronLeft />
                <IconChevronRight />
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "600",
                    fontSize: "1.6rem",
                    display: "inline",
                    marginLeft: "1rem",
                  }}
                >
                  Blog Activity
                </Typography>
              </div>
              <IconX />
            </Grid>
            <Divider style={{ margin: "0.6rem 0rem 2rem 0rem" }} />
            <Grid item container>
              <Grid item container columnSpacing={3}>
                {/* forloop to print item 3 times */}
                {Array.from({ length: 2 }).map((_, i) => (
                  <React.Fragment key={i}>
                    <Grid item xs={6} mb={2}>
                      <Paper>
                        <BlogActivity />
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper>
                        <BlogActivity />
                      </Paper>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </Grid>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(null, false)}>
        {drawerList()}
      </Drawer>

      <Box>
        <Grid container pb={5} pl={5} mt={5}>
          {/* for about and Products  */}
          <Grid xs={12} item container columnSpacing={2}>
            <Grid item xs={5}>
              <Paper onClick={toggleDrawer("About")}>
                <About />
              </Paper>
            </Grid>
            <Grid item xs={7}>
              <Paper onClick={toggleDrawer("Products")}>
                <ProductsAndServices />
              </Paper>
            </Grid>
          </Grid>

          <Grid item container mt={2} columnSpacing={3}>
            {/* Top Industries and Positioning  */}
            <Grid item xs={3} container direction="column">
              <Grid item>
                <Paper onClick={toggleDrawer("Industries")}>
                  <Industries />
                </Paper>
              </Grid>
              <Grid item mt={2}>
                <Paper onClick={toggleDrawer("Positioning")}>
                  <Positioning />
                </Paper>
              </Grid>
            </Grid>

            {/* Leadership and SWOT  */}
            <Grid item xs={3} container direction="column">
              <Grid item>
                <Paper onClick={toggleDrawer("LeaderShip")}>
                  <Leadership />
                </Paper>
              </Grid>
              <Grid item mt={2}>
                <Paper onClick={toggleDrawer("SWOT")}>
                  <SWOT />
                </Paper>
              </Grid>
            </Grid>

            {/* Blog Activity  */}
            <Grid item xs={6}>
              <Paper
                onClick={toggleDrawer("BlogActivity")}
                sx={{ height: "80.2vh" }}
              >
                <BlogActivity />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Maincomponent;
