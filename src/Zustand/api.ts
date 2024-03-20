import axios from 'axios';

const apiUrl = 'https://reqres.in/api/products';

if (!apiUrl) {
  throw new Error(
    'REACT_APP_BASE_URL is not defined in environment variables.'
  );
}

export const getProducts = async (page: number, perPage: number) => {
  try {
    const response = await axios.get(apiUrl, {
      params: { page: page, per_page: perPage },
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProductById = async (id: number) => {
  try {
    const response = await axios.get(apiUrl, { params: { id: id } });
    const product = response.data.data;
    return Array.isArray(product) ? product : [product];
  } catch (error) {
    console.error(error);
    throw error;
  }
};
