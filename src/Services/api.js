import axios from 'axios';

export const axiosApi = axios.create({
    baseURL: `${process.env.REACT_APP_SYDLE_ONE_ENDPOINT}${process.env.REACT_APP_SYDLE_ONE_API}/com.grupozelo.grupozelo/fachadaSiteLoja/`,
    headers: {
        "Authorization": `Bearer ${process.env.REACT_APP_SYDLE_ONE_ECOMMERCE_TOKEN}`,
        "Content-Type": "application/json",
    },
});
