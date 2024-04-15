import { Box, Grid, Divider, Typography } from "@mui/material";
import Item from "../Item";
import Styles from "./Leadership.module.css";

const IndustriesItem = [
  {
    title: "Christos G. Morris",
    description: "Co-Founder & CEO",
  },
  {
    title: "Michael Fishon",
    description: "Co-Founder & Chief Technol…",
  },
  {
    title: "Antony Pereira",
    description: "Chief Financial Officer",
  },
];

const Leadership = () => {
  // const companyId = useCompanyId();
  // const { data, error, isLoading, isError } = useCompanyData(companyId);
  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error: {error.message}</div>;

  // const companyLeadership = data.company.leadership;
  return (
    <Box>
      <Typography variant="h6">
        <h5>Leadership</h5>
      </Typography>
      <Grid container direction="column" mt={2}>
        {IndustriesItem.slice(0, 4).map((item, index) => (
          <Grid item key={index} mb={1}>
            <Typography variant="caption" > 
              <Item title={item.title} description={<span className={Styles.designation}>{item.description}</span>} />
              <Divider/>

            </Typography>{" "}
          </Grid>
        ))}
      </Grid>
      <Grid>
        <Typography variant="caption">+12 more</Typography>
      </Grid>
    </Box>
  );
};

export default Leadership;
