import { Grid, Box, Typography } from "@mui/material";
import { IconArrowRight, IconPlus } from "@tabler/icons-react";
import React,{useState} from "react";
import { useMediaQuery, useTheme } from "@mui/material";

import logo from "../assets/eVero.jpeg";
import logo1 from "../assets/Osedea.jpeg";
import logo2 from "../assets/Kanda_Software.png";
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
  const [isHovered,setIsHovered] = useState(false)
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
                  {/* <IconMailFilled size={20} color="#cccccc" /> */}
                  <img
            src={logo}
            alt="Aibiliti"
            width="25px"
            height="25px"
            style={{borderRadius: "50%"}}
          />
                  &nbsp; eVero Corporation
                </Typography>
              </Grid>
              <Grid style={theme}>
                <Typography variant="caption" style={centerItem}>
                  {/* <IconMailFilled size={20} color="#cccccc" /> */}
                  <img
            src={logo1}
            alt="Aibiliti"
            width="25px"
            height="25px"
            style={{borderRadius: "50%"}}
          />
                  &nbsp; Kanda Software
                </Typography>
              </Grid>
              <Grid style={theme}>
                <Typography variant="caption" style={centerItem}>
                  {/* <IconMailFilled size={20} color="#cccccc" /> */}
                  <img
            src={logo2}
            alt="Aibiliti"
            width="25px"
            height="25px"
            style={{borderRadius: "50%"}}
          />
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
              <Typography
               onMouseEnter={()=>setIsHovered(true)}
               onMouseLeave={()=>setIsHovered(false)}
              sx={{padding:"0.5rem 1rem",fontSize:"0.82em",fontWeight:"400",cursor:"pointer",backgroundColor:isHovered?"#F2F2F2":"#fff",borderRadius:"0.4rem"}}><Box display="flex" alignItems="center">
              Combined Report {isHovered && (<>&nbsp; <IconArrowRight size={20} /></>)}
            </Box></Typography>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default Head;
