import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Login.css';
import TextField from '@mui/material/TextField';
import FeedbackForm from './FeedbackForm';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <Box sx={{ width: '50%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Make-up Exams" {...a11yProps(0)} />
            <Tab label="Dorm" {...a11yProps(1)} />
            <Tab label="Parking" {...a11yProps(2)} />
          </Tabs>
        </Box>
      <div style={{
        marginLeft: '200px',
        alignItems: 'center',
      }}>
        <TabPanel value={value} index={0}>
      
            <FeedbackForm />
            <Box component="form" sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <TextField id="outlined-basic" label="Enter sum here" variant="outlined" />
                <input type="submit" className="btn" value="Pay" style={{width:'220px'}}/>
            </Box>
            {/* <div class="list-box">
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div> */}
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Box component="form" sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <TextField id="outlined-basic" label="Enter sum here" variant="outlined" />
                <input type="submit" className="btn" value="Pay" style={{width:'220px'}}/>
            </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <Box component="form" sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <TextField id="outlined-basic" label="Enter sum here" variant="outlined" />
                <input type="submit" className="btn" value="Pay" style={{width:'220px'}}/>
            </Box>
        </TabPanel>
      </div>
      </Box>
    </div>
  );
}
