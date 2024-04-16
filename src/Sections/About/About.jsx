import { Box,Divider, Typography, Grid } from "@mui/material";
import {
  IconBrandInstagram,
  IconWorld,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import eVeroLogo from "../../assets/eVero.jpeg";
import Styles from "./About.module.css";
const About = () => {


  return (
    <Grid container>
      {/* Title  */}
      <Grid item>
        <Typography variant="h6">
          <h5>About</h5>
        </Typography>
      </Grid>

      {/* Company Name and description  */}
      <Grid
        item
        container
        maxHeight={140}
        sx={{ textOverflow: "ellipsis", overflow: "hidden" }}
      >
        <Grid item xs={6} container direction="column">
          <Grid>
            <img
              src={eVeroLogo}
              height="48px"
              width="48px"
              alt="eVero"
              style={{ border: "1px solid #D9D9D9", borderRadius: "50%" }}
            />{" "}
          </Grid>
          <Grid item>
            <Typography variant="caption">eVaro Corporation</Typography>
          </Grid>
          <Grid className={Styles.company_sector} item>
            <Typography variant="caption">
              Software Development Healthcare
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={6} container direction="column">
          <Grid item>
            <Typography variant="caption" style={{fontSize:'0.75rem',fontWeight:600}}>Company Description</Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="caption"
              sx={{ textOverflow: "ellipsis", overflow: "scroll" }}
            >
              eVero Corporation has developed an all-in-one software platform
              designed to revolutionize the way home and community-based service
              providers manage care and…
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* Company Social Media Links */}
      <Grid item container direction="column">
      <Divider sx={{margin:'0.5rem 0rem 0.75rem 0rem' }}/>

        <Grid item container>
          <Grid item xs={1}>
            <IconWorld size={22} />
          </Grid>
          <Grid item xs={10}>
            <Typography variant="caption">www.evero.com</Typography>
          </Grid>
        </Grid>

        <Grid item container>
          <Grid item xs={1}>
            <IconBrandLinkedin size={22} color="#0A66C2" />
          </Grid>
          <Grid item xs={3}>
            <Typography variant="caption"><span className={Styles.followers}>1,971</span> followers</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography className={Styles.icon_url} variant="caption">
              https://www.linkedin.com/company/everocor…
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <IconBrandInstagram size={22} color="#C13584" />{" "}
          </Grid>
          <Grid item xs={3}>
            <Typography variant="caption"><span className={Styles.followers}>309</span> followers</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography className={Styles.icon_url} variant="caption">
              https://www.instagram.com/everocorporation/
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
