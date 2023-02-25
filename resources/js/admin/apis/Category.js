import axios from "axios";
import axiosBaseUrl from "../../axiosConfig";

const Category = {
    list: (page = 1) => {
        return axiosBaseUrl.get('/categories?page=' + page);
    },
    add: (title) => {
        return axiosBaseUrl.post('/categories', {title}, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
    },
    showOne: (id) => {
        return axiosBaseUrl.get('/categories/' + id);
    },
    edit: (title, id) => {
        return axios.put('/categories/' + id, {title}, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
    },
    remove: (id) => {
        return axiosBaseUrl.delete('/categories/' + id, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
    },
    listAll: () => {          // used to populate dropdowns
        return axiosBaseUrl.get('/categories?all=1');
    }
};

export default Category;
