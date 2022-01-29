import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
// import Modal from './Modal'
// import Backdrop from './Backdrop'
import BreatheModal from './Modal';
import WaterBottle from './WaterBottle';

function ControlledCheckbox() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      sx={{color: 'white' }}
    />
  );
}

export default function BasicList(props) {
    // const [modalOpen, setModalOpen ] = React.useState(false);
    // function Breathe() {
    //     setModalOpen(true);
    // }
    
    return (
        
      <Box className="center" sx={{ width: '100%', maxWidth: 360 }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                    <ControlledCheckbox/>
                </ListItemIcon>
                <ListItemText primary="Breathe" />
                <BreatheModal/>
                {/* <Button variant="outlined" size="small" sx={{color: 'white', borderColor:'white' }} >Let's Do It!</Button> */}
                {/* { modalOpen && <Modal /> }
                { modalOpen && <Backdrop /> } */}
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ControlledCheckbox/>
                </ListItemIcon>
                <ListItemText primary="Daily Stretch" />
                <Button variant="outlined" size="small" sx={{color: 'white', borderColor:'white' }}>Let's Do It!</Button>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ControlledCheckbox/>
                </ListItemIcon>
                <ListItemText primary="Journal Entry" />
                <Button variant="outlined" size="small" sx={{color: 'white', borderColor:'white' }}>Let's Do It!</Button>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ControlledCheckbox/>
                </ListItemIcon>
                <ListItemText primary="Drink Water" />
              </ListItemButton>
            </ListItem>


            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ControlledCheckbox/>
                </ListItemIcon>
                <WaterBottle/>

              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        
      </Box>
    );
  }