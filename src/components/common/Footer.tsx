import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import React from 'react';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box className="footer" sx={{ width: '100%' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ height: '70px' }}
      >
        <BottomNavigationAction label="커플맵" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="피드" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="내정보" icon={<SupervisedUserCircleIcon />} />
      </BottomNavigation>
    </Box>
  );
}
