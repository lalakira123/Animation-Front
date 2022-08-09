import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false
  });
  const navigate = useNavigate();

  function logoff(){
    localStorage.removeItem("user");
    window.location.reload();
  }

  function redirectTo(route){
    navigate(`${route}`);
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{width: 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[{text:'Home', route:'/home'}, {text:'Favoritos', route:'/favorites'}].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => redirectTo(item.route)}>
              <ListItemIcon>
                {index % 2 === 0 ? <HomeIcon color='primary'/> : <FavoriteIcon color='primary'/>}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={logoff}>
            <ListItemIcon>
              <ExitToAppIcon color='primary'/>
            </ListItemIcon>
            <ListItemText primary={'Logoff'} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <MenuIcon onClick={toggleDrawer('right', true)}></MenuIcon>
      <SwipeableDrawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
        >
        {list('right')}
      </SwipeableDrawer>
    </div>
  );
}