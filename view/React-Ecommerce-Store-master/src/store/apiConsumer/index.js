import axios from 'axios';

//const baseUrl = "https://fakestoreapi.com/",
const BASE_URL = "http://localhost:5000/api/";

const api = {
    Get: (path) => axios.get(BASE_URL + path),
    Post: (path, data) => axios.post(BASE_URL + path, data),
    PostFormData: (path, formData) => {
        return axios({
            method: "POST",
            url: BASE_URL + path,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }
        })
    },
    Put: (path, data) => axios.put(BASE_URL + path, data),
    Delete: (path) => axios.delete(BASE_URL + path)
}
export default api;