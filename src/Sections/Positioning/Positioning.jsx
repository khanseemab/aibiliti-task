import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import Item from "../Item";
import Styles from "./Positioning.module.css";

const IndustriesItem = [
  {
    title: "Core Purpose",
    description: "4 Items",
  },
  {
    title: "Positioning",
    description: "1 Item",
  },
  {
    title: "Key Differentiators",
    description: "3 Items",
  },
  {
    title: "Brand Personality",
    description: "5 Items",
  },
];

const Positioning = () => {
  // const companyId = useCompanyId();
  // const { data, error, isLoading, isError } = useCompanyData(companyId);

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error: {error.message}</div>;

  // const companyPositioning = data.company.marketposition;

  // const PositioningItem = [
  //   {
  //     title: "Core Purpose",
  //     count: companyPositioning.corepurpose.length,
  //   },
  //   {
  //     title: "Positioning",
  //     count: companyPositioning.positioning.length,
  //   },
  //   {
  //     title: "Key Differentiators",
  //     count: companyPositioning.keydifferentiators.length,
  //   },
  //   {
  //     title: "Brand Personality",
  //     count: companyPositioning.brandpersonality.length,
  //   },
  // ];

  return (
    <Box>
      <Typography variant="h6">
        <h5>Positioning</h5>
        {/* <h5>Positioning</h5> */}
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
              <Divider />
            </Typography>{" "}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Positioning;
