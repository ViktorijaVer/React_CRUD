import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5024',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const fetchCoffee = async () => {
  const { data: fetchedcoffee } = await api.get<CoffeeModel[]>('/coffee');

  return fetchedcoffee;
};

const ApiService = {
  fetchCoffee,
};

export default ApiService;
