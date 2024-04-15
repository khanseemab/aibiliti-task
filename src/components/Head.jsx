import { Grid, Paper, Typography } from "@mui/material";
import { IconMailFilled, IconPlus } from "@tabler/icons-react";
import React from "react";
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
  margin: "0rem 0rem 0rem 1rem",
};
const centerItem = { display: "flex",textAlign:"center", alignItems: "center" };

const Head = () => {
  return (
    <>
      <Grid
        container
        pt={5}
        pb={5}
        bgcolor={"#fff"}
        borderBottom={"1px solid #D9D9D9"}
      >
        <Grid item xs={3.75}>
          <Typography
            sx={{ paddingLeft: "3rem", fontSize: "2rem", fontWeight: "600" }}
            variant="h4"
          >
            Analysis Report
          </Typography>
        </Grid>
        <Grid item xs={6} container alignItems="center">
          <Grid style={themeSelected}>
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
        <Grid item container xs={2} justify={"center"} alignItems={"center"} >
        
            <Typography varian="caption" >Combined Report</Typography>
          
        </Grid>
      </Grid>
    </>
  );
};

export default Head;
