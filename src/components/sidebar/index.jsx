import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Badge, alpha } from '@mui/material';
import {
   Groups, Dashboard, GridView, ProductionQuantityLimits,
  Category, ShoppingCart, Reviews, BrandingWatermark, Apps, Security
} from '@mui/icons-material';
import { InputBase } from '@mui/material'
import { Stack } from '@mui/system';
import { grey } from '@mui/material/colors';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.common.white,
  color: 'black',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  borderRadius: '20px',
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.03),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  color: '#757172',
  height: '100%',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#928d8e',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up("sm")]: {
    display: 'flex'
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up("sm")]: {
    display: 'none'
  }
}));

export default function Sidebar(props) {
  const theme = useTheme();
  // const [open, setOpen] = React.useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  return (
    <>
      <Drawer variant="permanent" open={props.open}>
        <DrawerHeader>
          <IconButton onClick={props.handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['DASHBOARD'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: props.open ? 'initial' : 'center',
                  px: 2.5,
                  color: grey[500],
                }}>
                <GridView
                  sx={{
                    minWidth: 0,
                    mr: props.open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </GridView>
                <ListItemText primary={text} sx={{ opacity: props.open ? 1 : 0, color: grey[600], fontFamily: 'fantasy' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
          <List>
            {['VENDORS', 'USERS'].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: props.open ? 'initial' : 'center',
                    px: 2.5,
                  }}>
                  <Groups
                    sx={{
                      minWidth: 0,
                      mr: props.open ? 3 : 'auto',
                      justifyContent: 'center',
                      color: grey[500],
                    }}>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </Groups>
                  <ListItemText primary={text} sx={{ opacity: props.open ? 1 : 0, color: grey[600] }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        <Divider />
          <List>
            {['CATEGORIES', 'PRODUCTS', 'ORDERS', 'REVIEWS', 'BRANDS'].map((text, index) => {
              let components = [Category, ProductionQuantityLimits, ShoppingCart, Reviews, BrandingWatermark];
              let Component = components[index];
              return (
                <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: props.open ? 'initial' : 'center',
                      px: 2.5,
                    }}>
                    <Component
                      sx={{
                        minWidth: 0,
                        mr: props.open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: grey[500],
                      }}>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </Component>
                    <ListItemText primary={text} sx={{ opacity: props.open ? 1 : 0, color: grey[600] }} />
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
        <Divider />
          <List>
            {['AUTHENTICATION', 'ICONS', 'OTHER PAGES'].map((text, index) => {
              let components = [Security, Apps, Dashboard];
              let Component = components[index];
              return (
                <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: props.open ? 'initial' : 'center',
                      px: 2.5,
                    }} >
                    <Component
                      sx={{
                        minWidth: 0,
                        mr: props.open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: grey[500],
                      }} >
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </Component>
                    <ListItemText primary={text} sx={{ opacity: props.open ? 1 : 0, color: grey[600], fontFamily: 'monospace' }} />
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
      </Drawer>
    </>
  );
}