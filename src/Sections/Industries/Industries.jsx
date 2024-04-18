import { Box,Divider, Grid, Typography } from "@mui/material";
import Styles from "./Industries.module.css";
const IndustriesItem = [
  {
    title: "Traditional Health & Human Serv…",
    description: "3 Clients",
  },
  {
    title: "Fiscal Intermediaries",
    description: "4 Clients",
  },
  {
    title: "Support Brokers",
    description: "4 Clients",
  },
 
];

const Industries = () => {
  return (
    <Box>
      <Typography variant="MainHeading">
        Top Industries & Clients
      </Typography>
      <Grid container direction="column" mt={1} >
        {IndustriesItem.slice(0, 5).map((item) => (
          <Grid item mb={1}>
            <Typography variant="caption">{item.title}</Typography><br/>
            <Typography className={Styles.clients_number} variant="caption">{item.description}</Typography>
            <Divider/>

          </Grid>
        ))}

        <Grid item>
          <Typography variant="caption">
            +3 more
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Industries;
