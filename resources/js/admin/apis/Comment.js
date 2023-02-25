import axiosBaseUrl from '../../axiosConfig';

const Comment = {
    list: (page = 1) => {
        return axiosBaseUrl.get('/comments?page=' + page);
    },
    showOne: (id) => {
        return axiosBaseUrl.get('/comments/' + id);
    },
    edit: (payload, id) => {
        return axiosBaseUrl.put('/comments/' + id, payload, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
    },
    remove: (id) => {
        return axiosBaseUrl.delete('/comments/' + id, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
    }
};

export default Comment;
