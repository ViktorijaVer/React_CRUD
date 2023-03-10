type CoffeeModel = {

  id: string,
  title: string,
  location: {
    country: string,
    region: string,
  },
  images: string[],
  price: number,
  rating: number
};
