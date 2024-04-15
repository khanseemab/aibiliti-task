import {
  Box,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import logo from '../assets/download.png';
import React, { useEffect, useState } from "react";

const SidebarMenu = () => {
  // const router = useRouter();
  // const [headersData, setHeadersData] = useState(null);
  // const { companyId } = router.query;

  // const fetchData = async () => {
  //   const endpoint = `customer/${companyId}/getcompetitors`;
  //   const apiUrl = `/api/proxy?endpoint=${endpoint}`;

  //   const response = await fetch(apiUrl);
  //   const data = await response.json();
  //   setHeadersData(data.data[0]);
  // };

  // useEffect(() => {
  //   if (companyId) {
  //     fetchData();
  //   }
  // }, [companyId]);

  // if (!headersData) return <div>Loading...</div>;

  // const { companyId: company } = headersData;


  return (
    <Grid container pt={3.7} sx={{ borderRight:"1px solid #D2D2D2",bgcolor: "#F7F7F7", height: "100vh", width:'13rem' }}> 
      <Grid item xs={12}>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
          <div>
          <img
            src={logo}
            alt="Aibiliti"
            width="100px"
            height="25px"
            style={{margin :'0.2rem 0rem 0rem 2.1rem'}}
          />
          {/* <Divider sx={{borderColor:'#D9D9D9'}}/> */}
          <List>
            <ListItem label="eVaro Corporation" index={0}  />
          </List>
          <Divider sx={{borderColor:'#D9D9D9'}}/>
          <List>
            <ListItem label={"Users"} index={1} />
            <ListItem label={"Roles"} index={2} />
          </List>
          <Divider />
          <List>
            <ListItem label={"Overview"} index={3} />
            <ListItem label={"Reports"} index={4} />
            <ListItem label={"Personas"} index={5} />
            <ListItem label={"Calendar"} index={6} />
            <ListItem label={"Creator"} index={7} />
          </List>
          </div>
          <div style={{ marginBottom: '20px' }}>
          <ListItem label={"Super Employee"} index={8} />
 </div>
        </Box>
      </Grid>
      
    </Grid>
  );
};

export default SidebarMenu;

const ListItem = ({ label, index }) => {


  // Function to handle navigation based on label clicked
  const handleNavigation = (label) => {
    switch (label) {
      case "Users":
        // router.push(`/${companyId}/users`);
        break;
      case "Roles":
        // router.push(`/${companyId}/roles`);
        break;
      case "Creator":
          // router.push(`/${companyId}/creator`);
          break;
      case "Reports":
        // router.push(`/${companyId}/reports`);
        break;
      default:
        break;
    }
  };



  return (
    <ListItemButton onClick={() => handleNavigation(label)} 
    // style={{padding:"0.5rem 0.5rem"}}

    >
      <SquareIcon index={index} 
      
      />
      <ListItemText
      //  style={{padding:"0rem 0.5rem"}}
      >
        <Typography style={{ fontSize: '14px',fontWeight:"bold" }}>{label}</Typography>
      </ListItemText>
    </ListItemButton>
  );
};

// square icon with a color of #3B3BB6

const SquareIcon = ({ index }) => {
  const backgroundColor = [
    "#242842",
    "#242842",
    "#242842",
    "#12D2FF",
    "#3B3BB6",
    "#3B3BB6",
    "#F787BB",
    "#F787BB",
    "#90CE53",
  ];
  const style = {
    margin: "0rem 0rem 0rem 0.71rem",
    width: 13,
    height: 13,
    backgroundColor: backgroundColor[index],
    borderRadius: 4,
    textAlign: "start",
    boxShadow: index === 0 ? '0px 0px 2px 5px #E6E6E6' : 'none', // Add box shadow if index is 0
  };

  return (
    <ListItemIcon style={{ minWidth: '38px' }}>
      <div style={style}></div>
    </ListItemIcon>
  );
};
