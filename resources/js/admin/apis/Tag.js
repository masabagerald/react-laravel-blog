import axios from 'axios';
import axiosBaseUrl from '../../axiosConfig';

const Tag = {
    list: (page = 1) => {
        return axiosBaseUrl.get('/tags?page=' + page);
    },
    add: (title) => {
        return axiosBaseUrl.post('/tags', {title}, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
    },
    showOne: (id) => {
        return axiosBaseUrl.get('/tags/' + id);
    },
    edit: (title, id) => {
        return axiosBaseUrl.put('/tags/' + id, {title}, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
    },
    remove: (id) => {
        return axiosBaseUrl.delete('/tags/' + id, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
    },
    listAll: () => {
        return axiosBaseUrl.get('/tags?all=1');
    }
};

export default Tag;
