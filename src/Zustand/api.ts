import axios from 'axios';

const apiUrl = process.env.REACT_APP_BASE_URL;

if (!apiUrl) {
  throw new Error(
    'REACT_APP_BASE_URL is not defined in environment variables.'
  );
}

export const getProducts = async (page = 1, perPage = 5) => {
  try {
    const response = await axios.get(apiUrl, {
      params: { page: page, per_page: perPage },
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const getProductById = async (id: number) => {
  try {
    const response = await axios.get(apiUrl, { params: { id: id } });
    return response.data.data;
  } catch (error) {
    console.error(error);
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

export const getLastTwoProductsOnSecondPage = async () => {
  try {
    const response = await axios.get(apiUrl, { params: { page: 2 } });
    const dataLength = response.data.data.length;
    return response.data.data.slice(dataLength - 2);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
