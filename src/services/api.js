import axios from 'axios';
const baseurl="https://file-sharing-t3kq.onrender.com";

const API_URI = `${baseurl}`;

export const uploadFile = async (data) => {
    try {
        let response = await axios.post(`${API_URI}/upload`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
}