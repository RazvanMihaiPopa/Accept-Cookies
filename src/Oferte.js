import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { MainListItems, secondaryListItems } from './listItems';
import proud from './proud.svg'
import MC from './MC.jpg'
import popeyes from './popeyes.jpg'
import BONAPP from './BONAPP.jpg'
import cookie from './cookie.png'
import Deposits from './Deposits';
import Orders from './Orders';
import './Cookies.css'
import cute from './cute.svg'
import happymusic from './happymusic.svg'
import happyf from './happyf.svg'
import collect from './collect.svg'
import lovecookies from './lovecookies.svg'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
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
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme({
    typography: {
        fontFamily: [
            'Poppins',
            'sans-serif',
        ].join(','),
    },
});

function CookiesContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" sx = {{backgroundColor: '#50DCBC'}} open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Tips and Tricks for Offers and Coupons
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {<MainListItems/>}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          {/* cookies */}
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={1}>
              {/* Chart */}
              {/* Recent Deposits */}
              
            {/* /* status   */}
              {/* Recent Orders */}
              <Grid item xs={12} sx={{ width: '100%' }}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    '@media (max-width:600px)': {
                      fontSize: '14px',
                      lineHeight: 1.2,
                      padding: '16px',
                    },
                  }}
                  
                >
            
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    // width: '100%',
                    // height: '100%',
                    padding: '10px',
                    justifyContent: 'flex-start',
                }}>
                <div style={{ 
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    marginLeft: '0px',
                    marginRight: '0px',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                }}>
                    <img src={MC} alt="yourImage" style={{ 
                    maxWidth: '30%',
                    maxHeight: '30%',
                    marginRight: '0px',
                    objectFit: 'contain',
                    marginleft: '0px',
                    }} />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    width: '100%',
                    textAlign: 'left',
                    height: '100%',
                }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  McDonald's <br></br>
                </Typography>
                <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
            
                • With every order, keep the receipt! Enter the promotional code, fill in the feedback form and get a free serving of small fries.
                    <br></br>
                    • Make sure you have the McDonalds app, as they have many offers and as you collect points, you can get free meals.
                </Typography>
                </div>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'flex-start',
                }}>
                <div style={{ 
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    padding: '10px',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                }}>
                    <img src={popeyes} alt="yourImage" style={{ 
                    maxWidth: '30%',
                    maxHeight: '30%',
                    objectFit: 'contain',
                    marginleft: '0px',
                    }} />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Popeyes <br></br>
                </Typography>
                <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
            
                • With every order, keep the receipt! Enter the promotional code, fill in the feedback form and get a free ice cream.
                    <br></br>
                    • Want a free Chicken Sandwich? All you have to do is download the Pinapp go app, order a Popeyes meal and get post a picture of it on your Instagram.
                     They also have free tickets to the movies.
                </Typography>
                </div>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    height: '100%',
                    padding: '10px',
                    justifyContent: 'flex-start',
                }}>
                <div style={{ 
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                }}>
                    <img src={BONAPP} alt="yourImage" style={{ 
                    maxWidth: '30%',
                    maxHeight: '30%',
                    objectFit: 'contain',
                    marginleft: '0px',
                    }} />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  BonApp <br></br>
                </Typography>
                <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
            
                • Have you ever wondered what restaurants or cafees do with the products at the end of the day, or if a customer cancels a pizza order?
                    <br></br>
                • Now, with the BonApp app, stores put items on sale at a lower price, and you can have a great meal at a great price. 
                </Typography>
                </div>
                </div>
                  {/* <Deposits /> */}

                </Paper>
                
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Cookies() {
  return <CookiesContent />;
}
