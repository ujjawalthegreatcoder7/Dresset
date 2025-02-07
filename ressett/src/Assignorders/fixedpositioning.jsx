import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Fourbox from './fourbox';
import Home from './Home';
import HomeIcon from '@mui/icons-material/Home';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Person2Icon from '@mui/icons-material/Person2';
import Account1 from '../Account/account';

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
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {/* Navbar */}
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            width: '100%',
            maxWidth: '70rem',
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
              display: 'flex',
              justifyContent:"center",
              alignItems: 'center',
            }}
            aria-label="basic tabs example"
          >
            <Tab
              label = <HomeIcon/>
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
              label=<WidgetsIcon/>
              {...a11yProps(1)}
              sx={{
                color: value === 1 ? 'orange' : 'black', // Orange for selected tab, black for others
                '&.Mui-selected': {
                  color: 'orange',
                },
                fontWeight: 'bold',
              }}
            />
            <Tab
              label=<Person2Icon/>
              {...a11yProps(2)}
              sx={{
                color: value === 2 ? 'orange' : 'black', // Orange for selected tab, black for others
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
            <Home />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
          <div className='fourbox' style={{marginRight:"5%"}} > <Fourbox /></div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
          <Account1 />
          </CustomTabPanel>
        </Box>
      </Box>
    </>
  );
}
