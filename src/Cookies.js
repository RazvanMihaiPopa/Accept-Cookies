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
              Dashboard
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
            <Grid container spacing={3}>
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
                    height: 340,
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
                    width: '100%',
                    height: '100%',
                    justifyContent: 'flex-start',
                }}>
                <div style={{ 
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                }}>
                    <img src={cookie} alt="yourImage" style={{ 
                    maxWidth: '100%',
                    maxHeight: '100%',
                    minWidth: '100%',
                    minHeight: '100%',
                    objectFit: 'contain',
                    }} />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    paddingRight: '80px',
                }}>
                    <h1 style={{
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: '36px',
                    lineHeight: '42px',
                    color: '#000000',
                    }}>0 Cookies</h1>
                    <p>Status Bronze</p>
                    <p>Collect 100 cookies to get a reward!</p>
                </div>
                </div>
                  {/* <Deposits /> */}

                </Paper>
                
              </Grid>
              
              
            

              <Grid item xs={12}>
  <Paper sx={{ p: 2, 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
        '@media (max-width:600px)': {
            fontSize: '14px',
            lineHeight: 1.2,
            padding: '16px',
        },
     
   }}>
    <Box sx={{ width: '100%', margin: '10px', marginleft: '0px', marginright: '0px', padding: '5px',  maxWidth: 500 }}>
      <Typography variant="h3" align="center" gutterBottom>
          Welcome to Status Bronze!
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
          Collect Cookies with each transaction and continue enjoying the benefits of Status Bronze! (2 RON = 1 Cookie)
      </Typography>
      <img src={proud} alt="yourImage" style={{ 
      maxWidth: '100%',
      maxHeight: '100%',
      minWidth: '100%',
      minHeight: '100%',
      objectFit: 'contain',
      }}/>
      <Typography variant="h6" align="center" gutterBottom>
          Each time you reach 100 cookies, you will be rewarded with an extra 10% discount 
          on your next purchase from one of our partners!
      </Typography>
      <img src={collect} alt="yourImage" style={{ 
      maxWidth: '100%',
      maxHeight: '100%',
      minWidth: '100%',
      minHeight: '100%',
      objectFit: 'contain',
      }}/>
      <Typography variant="h6" align="center" gutterBottom>
          To reach the Silver Status, you need to collect 300 cookies! The benefits are 
          even better, as the discount will be 15% for each 100 cookies!
      </Typography>
      <img src={happyf} alt="yourImage" style={{ 
      maxWidth: '100%',
      maxHeight: '100%',
      minWidth: '100%',
      minHeight: '100%',
      objectFit: 'contain',
      }}/>
      <Typography variant="h6" align="center" gutterBottom>
      To reach the highest status, Gold, you need to collect 1000 cookies! As you guessed, the discount will be 20% for each 100 cookies!
      </Typography>
      <img src={happymusic} alt="yourImage" style={{ 
      maxWidth: '100%',
      maxHeight: '100%',
      minWidth: '100%',
      minHeight: '100%',
      objectFit: 'contain',
      }}/>
      <Typography variant="h6" align="center" gutterBottom>
      We also care about our clients, so for your birthday, you will also get a little surprise from us! Just wait and see!
      </Typography>
      <img src={cute} alt="yourImage" style={{ 
      maxWidth: '100%',
      maxHeight: '100%',
      minWidth: '100%',
      minHeight: '100%',
      objectFit: 'contain',
      }}/>
      <Typography variant="caption" align="center" display="block" gutterBottom>
          PARTNERS
      </Typography>
    </Box>
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
