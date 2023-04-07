import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Icons from '../helpers/Icons'
import LogoutIcon from '@mui/icons-material/Logout';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../views/helpers/themes';

function Navbar() {
  const [state, setState] = React.useState({
    left: false,
  });

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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          width: 350,
          height: 50,
          backgroundColor: 'primary.main',
        }}
      />
      <List sx={{ marginLeft: '15px', marginRight: '15px' }}>
        {['Home', 'Management'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href={'/'+text}>
              <ListItemIcon>
                { Icons[0][index] }
              </ListItemIcon>
              <ListItemText primary={text} className='listNavText'/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ marginLeft: '15px', marginRight: '15px' }}>
        {['Sell', 'Customer'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href={'/'+text}>
              <ListItemIcon>
                { Icons[1][index]}
              </ListItemIcon>
              <ListItemText primary={text}  className='listNavText'/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ marginLeft: '15px', marginRight: '15px' }}>
        {['Products', 'Inventory'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href={'/'+text}>
              <ListItemIcon>
                { Icons[2][index] }
              </ListItemIcon>
              <ListItemText primary={text}  className='listNavText'/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ marginLeft: '15px', marginRight: '15px' }}>
        {['Formula', 'New_product'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href={'/'+text}>
              <ListItemIcon>
                { Icons[3][index] }
              </ListItemIcon>
              <ListItemText primary={text.replace('_', ' ')}  className='listNavText'/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ marginLeft: '15px', marginRight: '15px' }}>
        {['Raw_material', 'Provider'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href={'/'+text}>
              <ListItemIcon>
                { Icons[4][index] }
              </ListItemIcon>
              <ListItemText primary={text.replace('_', ' ')}  className='listNavText'/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ marginLeft: '15px', marginRight: '15px' }}>
        {['Users'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href={'/'+text}>
              <ListItemIcon>
                { Icons[5][index] }
              </ListItemIcon>
              <ListItemText primary={text}  className='listNavText'/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ marginLeft: '15px', marginRight: '15px' }}>
        {['Logout'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon/>
              </ListItemIcon>
              <ListItemText primary={text}  className='listNavText'/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <ThemeProvider theme={theme}>
      <React.Fragment key={'left'}>
        <AppBar position="static" color='primary'>
            <Toolbar variant="dense">
            <IconButton onClick={toggleDrawer('left', true)} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, height: 50 }}>
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div" sx={{ fontWeight: 'bolder' }}>
                Cleaning Products
            </Typography>
            </Toolbar>
            <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
            >
            {list('left')}
            </SwipeableDrawer>
        </AppBar>
      </React.Fragment>
      </ThemeProvider>
    </div>
  );
}

export default Navbar;