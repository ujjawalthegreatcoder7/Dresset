import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Krishna from './krishna';
import Fourbox from './fourbox';
import Account from './account';
import Home from './Home';
import HomeIcon from '@mui/icons-material/Home';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Person2Icon from '@mui/icons-material/Person2';
import FourBoxcontent from './fourboxcontent';
import FourBoxcontentPending from './fourboxcompletedJobscontent';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
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
    <>
      <Box
        sx={{
          width: '105%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {/* Navbar */}
        <Box
          sx={{
            borderColor: 'divider',
            width: '100%',
            // maxWidth: '70rem',
            display: 'flex',
            justifyContent:"center",
            alignItems: 'center',
            height: '4rem', // Adjust navbar height for better alignment
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{
              // display: 'flex',
              // justifyContent:"cente",
              // alignItems: 'center',
              // marginLeft:"4rem"
            }}
            aria-label="basic tabs example"
          >
            <Tab
              label = "Pending Jobs"
              {...a11yProps(0)}
              sx={{
                color: value === 0 ? 'orange' : 'black', // Orange for selected tab, black for others
                '&.Mui-selected': {
                  color: 'orange', 
                  
                },
                fontWeight: 'bold', // Highlight text style
              }}
            />
            <Tab
              label="Completed Jobs"
              {...a11yProps(1)}
              sx={{
                color: value === 1 ? 'orange' : 'black', // Orange for selected tab, black for others
                '&.Mui-selected': {
                  color: 'orange',
                },
                fontWeight: 'bold',
              }}
            />
              
          </Tabs>
        </Box>

        {/* Tab Content */}
        <Box sx={{  }}>
          <CustomTabPanel value={value} index={0}>
            <FourBoxcontentPending/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
          <div className='fourbox' style={{marginRight:"5%"}} > <FourBoxcontent /></div>
          </CustomTabPanel>

        </Box>
      </Box>
    </>
  );
}
