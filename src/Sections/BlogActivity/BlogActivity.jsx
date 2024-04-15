import react from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Styles from "./BlogActivity.module.css";
import {
  
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
 
} from "@mui/material";

import { HorizontalBar } from "../../components/HorizontalBar";




const Services = [
  {
    title: "1. Interoperability",
  },
  {
    title: "2. Software Development",
  },
  {
    title: "3. Interoperability",
  },
];
const Posts = [
  {
    title: "Control the Predictability and Profitability",
    category: "Thought Leadership",
  },
  {
    title: "Software Project Management Buyer's Guide",
    category: "Keyword Driven",
  },
  {
    title: "Phillipines: How We Operate Software Now 2023",
    category: "Company Update",
  },
  {
    title: "Control the Predictability and Profitability",
    category: "Thought Leadership",
  },
  {
    title: "Software Project Management Buyer's Guide",
    category: "Keyword Driven",
  },
];


const ListItem = ({ label, index }) => {


  // Function to handle navigation based on label clicked



  return (
    <ListItemButton 
       style={{padding:"0rem "}}

>
  <SquareIcon index={index} 
  
  />
  <ListItemText
   style={{padding:"0rem"}}
  >
        <Typography style={{ fontSize: '0.7rem',fontWeight:"500" }}>{label}</Typography>
      </ListItemText>
    </ListItemButton>
  );
};

// square icon with a color of #3B3BB6

const SquareIcon = ({ index }) => {
  const backgroundColor = [
    "#B5EEFF",
    "#CCE896",
    "#FFD188",
    "#F7ACCE",
    "#A595FF",
  ];
  const style = {
    padding: "0rem",
    margin: "0rem",
    width: 13,
    height: 13,
    backgroundColor: backgroundColor[index],
    borderRadius: 4,
    textAlign: "start",
    
  };

  return (
    <ListItemIcon style={{ minWidth: '30px' }}>
      <div style={style}></div>
    </ListItemIcon>
  );
};




const BlogActivity = () => {
  // const companyId = useCompanyId();
  // const { data, error, isLoading, isError } = useCompanyData(companyId);
  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error: {error.message}</div>;

  // const companyProducts = data.company.products;
  // const companyServices = data.company.services;

  return (
    <>
      <Grid container>
        {/* Title  */}
        <Grid item>
          <Typography variant="h6">
            <h5>Blog Activity</h5>
          </Typography>
        </Grid>

        {/* Company Name and description  */}
        <Grid item container>
          <Grid item xs={5} container direction="column">
            <Grid item>
              <Typography className={Styles.blog_heading} variant="caption">
                Last 20 Posts Breakdown
              </Typography>
            </Grid>


        <HorizontalBar/>




        <List>
            <ListItem label={"Thought Leadership"} index={0} />
            <ListItem label={"Keyword Driven"} index={1} />
         
            <ListItem label={"Instructional"} index={2} />
            <ListItem label={"Company Update"} index={3} />
            <ListItem label={"Other"} index={4} />
          </List>
          




            {/* {ProductItems.slice(0, 5).map((product, index) => (
              <Grid item key={index} mb={1}>
                <Typography variant="caption">{product.title}</Typography>
              </Grid>
            ))} */}
          </Grid>
          <Grid item xs={7} container direction="column">
            <Grid item>
              <Typography className={Styles.blog_heading} variant="caption">
                Top Themes
              </Typography>
            </Grid>
            {Services.slice(0, 5).map((service, index) => (
              <Grid item key={index} mb={1}>
                <Typography variant="caption">{service.title}</Typography>
                <Divider />
              </Grid>
            ))}
            <Grid item>
              <Typography variant="caption">+5 more</Typography>
            </Grid>
          </Grid>
        </Grid>

        
        <Grid item container>
          <Grid item xs={12} mt={4}>
          <Divider/>
            <Typography className={Styles.blog_heading} variant="caption">
              Details of Last 10 Posts
            </Typography>
          </Grid>

          <Grid item xs={7.5} container direction="column">
            <Grid item mb={1}>
              <Typography variant="caption">POST TITLES</Typography>
            </Grid>
            <Box>
              {Posts.slice(0, 5).map((post, index) => (
                <Grid item key={index} mb={1}>
                  <Typography variant="caption">{post.title}</Typography>
                  <Divider />
                </Grid>
              ))}
            </Box>
          </Grid>
          <Grid item xs={4.5} container direction="column">
            <Grid item mb={1}>
              <Typography variant="caption">CATEGORY</Typography>
            </Grid>

            <Box>
            {Posts.slice(0, 5).map((post, index) => (
              <Grid item key={index} mb={1}>
                <Typography className={Styles.blog_category} variant="caption">{post.category}</Typography>
                <Divider />
              </Grid>
            ))}
                </Box>  
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default BlogActivity;
