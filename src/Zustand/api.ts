import axios from 'axios';
import { URL } from './urlConfig';

const apiUrl = URL;
// const apiUrl = process.env.BASE_URL;

if (!apiUrl) {
  throw new Error('URL is not defined in environment variables.');
}

export const getProducts = async (page = 1, perPage = 5) => {
  console.log(URL);
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
