import * as material from '@mui/material';
import Img from 'components/ui/img';
import React from 'react';
import ContentWrapper from './content-wrapper';

type CoffeeCardProps = CoffeeModel;

const CoffeeCard: React.FC<CoffeeCardProps> = ({
  title,
  images,
  location,
  price,
  rating,
}) => (
  <>
    <material.Stack sx={{ boxShadow: 3 }}>
      <Img src={images[0]} alt="" sx={{ aspectRatio: '1', width: 1, height: 600 }} />
      <ContentWrapper>
        <material.Box sx={{ flexGrow: 1 }}>
          <material.Box sx={{ float: 'right', textAlign: 'right' }}>
            <material.Box sx={{ fontSize: 20, color: 'secondary.main', fontWeight: 600 }}>{price}</material.Box>
            <material.Box sx={{
              display: 'inline-flex',
              alighItems: 'flex-end',
              fontSize: '1.3rem',
              color: 'warning.light',
              gap: 1,
              fontWeight: 600,
              '&:after': {
                content: '""',
              },
            }}
            >
              {rating}
            </material.Box>
          </material.Box>

        </material.Box>
        <material.Typography component="h2" sx={{ fontWeight: 600, fontSize: 19 }}>{title}</material.Typography>
        <material.Typography component="h3" sx={{ color: 'grey.500', fontSize: 1.1 }} />
        {`${location.country}, ${location.region}`}
      </ContentWrapper>
    </material.Stack>

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
      <material.Button color="secondary" variant="contained">Add to Cart</material.Button>
      <material.Button color="warning">View More</material.Button>
    </material.Box>
  </>

);
export default CoffeeCard;
