import { Grid, Paper, Typography } from "@mui/material";
import { IconMailFilled, IconPlus } from "@tabler/icons-react";
import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
const themeSelected = {
  height: "2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0rem 0.7rem",
  backgroundColor: "#F2F2F2",
  borderRadius: "0.4rem",
};

const theme = {
  height: "0.6rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0rem 0.5rem 0rem 1rem",
};
const centerItem = {
  display: "flex",
  textAlign: "center",
  alignItems: "center",
};

const Head = () => {
  const themMobile = useTheme();
  const isMobile = useMediaQuery(themMobile.breakpoints.up("sm"));
  return (
    <>
      <Grid
        container
        pt={5}
        pb={5}
        bgcolor={"#fff"}
        borderBottom={"1px solid #D9D9D9"}
      >
        <Grid
          item
          xs={isMobile ? 4 : 12}
          container
          pr={isMobile ? 0 : 5}
          justifyContent={isMobile ? "flex-start" : "flex-end"}
        >
          {" "}
          <Typography
            sx={{
              paddingLeft: "4rem",
              fontSize: isMobile ? "2rem" : "0.85rem",
              fontWeight: "600",
              textAlign: "right",
            }}
            variant="h4"
          >
            Analysis Report
          </Typography>
        </Grid>
        {isMobile && (
          <>
            <Grid item xs={6} container alignItems="center" >
              <Grid style={themeSelected} >
                <Typography variant="caption" style={centerItem}>
                  <IconMailFilled size={20} color="#cccccc" />
                  &nbsp; eVero Corporation
                </Typography>
              </Grid>
              <Grid style={theme}>
                <Typography variant="caption" style={centerItem}>
                  <IconMailFilled size={20} color="#cccccc" />
                  &nbsp; Kanda Software
                </Typography>
              </Grid>
              <Grid style={theme}>
                <Typography variant="caption" style={centerItem}>
                  <IconMailFilled size={20} color="#cccccc" />
                  &nbsp; Osedea
                </Typography>
              </Grid>
              <Grid style={theme}>
                <Typography variant="caption" style={centerItem}>
                  <IconPlus
                    size={20}
                    color="#cccccc
"
                  />
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={2}
              justify={"center"}
              alignItems={"center"}
            >
              <Typography varian="caption">Combined Report</Typography>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default Head;
