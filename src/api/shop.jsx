import axios from "../lib/axios";

export const getProductList = (page = 1, limit = 8) => axios.get(`/products/list?page=${page}&limit=${limit}`);
