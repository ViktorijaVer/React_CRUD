/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import { Box } from '@mui/material';
import ApiService from 'services/api-service';
// eslint-disable-next-line import/no-named-as-default
import CoffeeCard from './coffee-card';

const HomePage = () => {
  const [coffee, setCoffee] = React.useState<CoffeeModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedcoffee = await ApiService.fetchCoffee();
      setCoffee(fetchedcoffee);
    })();
  }, []);

  return (
    <Box sx={(theme) => ({
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: theme.spacing(2),
      padding: theme.spacing(2),
      maxWidth: theme.breakpoints.values.xl,
      margin: 'auto',
      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      [theme.breakpoints.up('lg')]: {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
    })}
    >
      {coffee.map((coffee) => <CoffeeCard key={coffee.id} {...coffee} />)}
    </Box>
  );
};
export default HomePage;
