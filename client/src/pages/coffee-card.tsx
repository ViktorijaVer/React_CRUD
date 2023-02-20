import * as material from '@mui/material';
import Img from 'components/ui/img';
import React from 'react';

type CoffeeCardProps = CoffeeModel;

const CoffeeCard: React.FC<CoffeeCardProps> = ({
  images,
  location,
  price,
  title,
  rating,
}) => (
  <material.Stack sx={{ boxShadow: 3 }}>
    <Img src={images[0]} alt="" sx={{ aspectRatio: '0.8' }} />
    <material.Box sx={{
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      width: 1,
      py: 1,
      px: 2,
    }}
    >
      <material.Box sx={{ flexGrow: 1 }}>
        <material.Box sx={{ float: 'right', textAlign: 'right' }}>
          <material.Box sx={{ fontSize: 1.3, color: 'primary.main', fontWeight: 600 }}>{price}</material.Box>
          <material.Box sx={{
            display: 'inline-flex',
            alighItems: 'flex-end',
            fontSize: '1.3rem',
            gap: 0.2,
            fontWeight: 600,
            '&:after': {
              content: '"★"',
            },
          }}
          >
            {rating}
          </material.Box>
        </material.Box>

      </material.Box>
      <material.Typography component="h2" sx={{ fontWeight: 600, fontSize: 1.3 }}>{title}</material.Typography>
      <material.Typography component="h3" sx={{ color: 'grey.500', fontSize: 1.1 }} />
      {`${location.country}, ${location.region}`}
    </material.Box>

    <material.Box sx={{
      display: 'flex',
      justifyContent: 'center',
      gap: 1,
      mt: 3,
      mb: 1,
      ml: 2,
      '&>*': {
        flexGrow: 1,
      },
    }}
    >
      <material.Button color="primary" variant="outlined">View</material.Button>
      <material.Button color="secondary">View</material.Button>
    </material.Box>
  </material.Stack>
);

export default CoffeeCard;
