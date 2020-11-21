import axios from 'axios';

const url = "https://localhost:44348/api/Calculator"

export const fetchDailyData = async (params) => {
    const { data } = await axios.post(`${url}`, params);
    return data;
  };