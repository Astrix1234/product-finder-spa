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

export const getLastProductOnFirstPage = async () => {
  try {
    const response = await axios.get(apiUrl, { params: { page: 1 } });
    const lastProductIndex = response.data.data.length - 1;
    return response.data.data[lastProductIndex];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getLastTwoProductsOnLastPage = async () => {
  try {
    const response = await axios.get(apiUrl, { params: { page: 2 } });
    const dataLength = response.data.data.length;
    return response.data.data.slice(dataLength - 2);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
