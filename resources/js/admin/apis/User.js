
import axiosBaseUrl from "../../axiosConfig";

const User = {
    list: (page = 1) => {
        return axiosBaseUrl.get('/users?page=' + page, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
    },
    add: (payload) => {
        return axiosBaseUrl.post('/users', payload, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
    },
    showOne: (id) => {
        return axiosBaseUrl.get('/users/' + id, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
    },
    edit: (payload, id) => {
        return axiosBaseUrl.put('/users/' + id, payload, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
    },
    remove: (id) => {
        return axiosBaseUrl.delete('/users/' + id, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
    },
    profile: () => {
        return axiosBaseUrl.get('/profile', {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
    },
    updateProfile: (payload) => {
        return axiosBaseUrl.post('/profile/update', payload, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
    },
};

export default User;
