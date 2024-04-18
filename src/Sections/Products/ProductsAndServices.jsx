import { Box,Divider, Grid, Typography } from "@mui/material";
import Styles from "./Products.module.css";
const ProductItems = [
  {
    title: "Electronic Health Records (EHR)",
  },
  {
    title: "Self-Direction Services (SDS)",
  },
  {
    title: "Electronic Visit Verification (EVV)",
  },
  {
    title: "Crisis Response Support",
  },
  {
    title: "Visibility & Reporting",
  },
];
const Services = [
  {
    title: "Client Services",
  },
  {
    title: "Software Development",
  },
  {
    title: "Interoperability",
  },
  {
    title: "Data Security & Compliance",
  },
  {
    title: "Training & Continuing Education",
  },

];

const ProductsAndServices = () => {
  // const companyId = useCompanyId();
  // const { data, error, isLoading, isError } = useCompanyData(companyId);
  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error: {error.message}</div>;

  // const companyProducts = data.company.products;
  // const companyServices = data.company.services;

  return (
    <Grid container>
      {/* Title  */}
      <Grid item>
        <Typography variant="MainHeading">Products & Services</Typography>
      </Grid>

      {/* Company Name and description  */}
      <Grid item container>
        <Grid item xs={6} container direction="column">
          <Grid item>
            <Typography className={Styles.product_heading}>Products</Typography>
          </Grid>
          {ProductItems.slice(0, 5).map((product, index) => (
            <Grid item key={index} mb={1}>
              <Typography variant="caption">{product.title}</Typography>
              <Divider/>

            </Grid>
          ))}
          
        </Grid>
        <Grid item xs={6} container direction="column">
          <Grid item>
          <Typography className={Styles.product_heading}>Services</Typography>
          </Grid>
          {Services.slice(0, 5).map((service, index) => (
            <Grid item key={index} mb={1}>
              <Typography variant="caption">{service.title}</Typography>
              <Divider />

            </Grid>
          ))}
          <Grid item>
            <Typography variant="caption">
              +5 more
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductsAndServices;
