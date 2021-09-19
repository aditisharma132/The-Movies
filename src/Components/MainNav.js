import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import { useHistory } from 'react-router';
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  React.useEffect(() => {
     if(value === 0) history.push("/home");
  }, [value, history]); 

  return (
    <Box sx={{ width: 1520,
    position: "fixed",
    bottom:0,
    backgroundColor:"black",
    zIndex: 100,

     }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction 
        style={{ color: "#39445a" }}
         label="Home" 
         icon={<HomeIcon />}
          />
        
      </BottomNavigation>
    </Box>
  );
}
