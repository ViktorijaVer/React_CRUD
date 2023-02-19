import React from 'react';
import { Box } from '@mui/material';
import ApiService from 'services/api-service';

const HomePage = () => {
  const [coffee, setCoffee] = React.useState<CoffeeModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedcoffee = await ApiService.fetchCoffee();
      setCoffee(fetchedcoffee);
    })();
  }, []);

  return (
    <Box>
      <Box component="pre">
        {JSON.stringify(coffee, null, 4)}
      </Box>
    </Box>
  );
};

export default HomePage;
