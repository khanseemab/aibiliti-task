// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#EBEBEB',
          // margin:'0.5rem 0rem 0.75rem 0rem'
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: '1px solid #D9D9D9',
          cursor: 'pointer',
          padding: '1rem 0.9rem 0rem 0.9rem',
          borderRadius: '15px',
          minHeight: '17.5rem',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 0px 30px 1px #e6e6e6',
          },
        },
      },
    
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          // backgroundColor: 'red',
          margin: '0rem 0.5rem',
          // padding: '1rem',
          borderRadius: '11px',
        },
      },
    },
    MuiTypography:{
      styleOverrides:{  
        root:{
          fontFamily: 'Figtree',
        },},
      variants:[
        {
          props:{variant:'MainHeading'},
          style:{
            color: '#000000',
            fontSize:'1.15rem',
            lineHeight:'3rem',
            fontWeight: '600',  
          }
        }
      ]
    }
    // MuiListItemButton:{
    //   styleOverrides:{
    //     root:{
    //       padding: '0rem',

    //       margin: '0rem',
          
    //     }
    //   }
    // },
    
    
  }
  ,
  typography: {
    fontFamily: "Figtree",
  },
  
    
});

export default theme;