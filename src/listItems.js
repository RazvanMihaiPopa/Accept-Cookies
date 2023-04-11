import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useNavigate } from 'react-router-dom';


export const MainListItems = () => {
  const navigate = useNavigate();  
  return (<React.Fragment>
    <ListItemButton onClick={
      () => navigate('/dashboard')
    }>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton onClick={
      () => navigate('/transactions')
    }>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Transactions" />
    </ListItemButton >
    <ListItemButton onClick={
      () => navigate('/cookies')
    }>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Cookies" />
    </ListItemButton>
    <ListItemButton onClick={
      () => navigate('/licitations')
    }>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Licitations" />
    </ListItemButton>
    <ListItemButton onClick={
      () => navigate('/offers')
    }>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Offers" />
    </ListItemButton>
  </React.Fragment>)
};

