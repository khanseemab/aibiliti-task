import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import Item from "../Item";
import Styles from "./SWOT.module.css";

const IndustriesItem = [
  {
    title: "Strengths",
    description: "4 Items",
  },
  {
    title: "Weaknesses",
    description: "1 Item",
  },
  {
    title: "Opportunities",
    description: "3 Items",
  },
  {
    title: "Threats",
    description: "5 Items",
  },
];

const SWOT = () => {
  // const companyId = useCompanyId();
  // const { data, error, isLoading, isError } = useCompanyData(companyId);

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error: {error.message}</div>;

  // const companySWOT = data.company.swotanalysis;

  // const SWOTItem = [
  //   {
  //     title: "Strengths",
  //     count: companySWOT.strengths.length,
  //   },
  //   {
  //     title: "Weaknesses",
  //     count: companySWOT.weaknesses.length,
  //   },
  //   {
  //     title: "Opportunities",
  //     count: companySWOT.opportunities.length,
  //   },
  //   {
  //     title: "Threats",
  //     count: companySWOT.threats.length,
  //   },
  // ];

  return (
    <Box>
      <Typography variant="h6">
        <h5>SWOT</h5>
      </Typography>
      <Grid container direction="column">
        {IndustriesItem.map((item) => (
          <Grid item mb={1}>
            <Typography variant="caption">
              <Item
                title={item.title}
                description={<span className={Styles.items}>{item.description}</span>}
                // dsctext="Items"
              />
              <Divider/>
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SWOT;
