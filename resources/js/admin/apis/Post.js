import axiosBaseUrl from '../../axiosConfig';

const Post = {
    list: (page = 1) => {
        return axiosBaseUrl.get('/posts?page=' + page);
    },
    add: (payload) => {

        let data = Post.toFormData(payload);

        return axiosBaseUrl.post('/posts', data, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token"), 'Content-Type': 'multipart/form-data'}});
    },
    showOne: (id) => {
        return axios.get('/posts/' + id);
    },
    edit: (payload, id) => {
        let data = Post.toFormData(payload);
        data.append('_method', 'PUT');

        return axiosBaseUrl.post('/posts/' + id, data, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token"), 'Content-Type': 'multipart/form-data'}});
    },
    remove: (id) => {
        return axiosBaseUrl.delete('/posts/' + id, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
    },
    toFormData: (payload) => {
        const formData = new FormData();

        for (let key in payload) {
            if(key != 'tags') {
                formData.append(key, payload[key]);
            } else {
                for(let i=0; i<payload[key].length; i++) {
                    formData.append('tags[]', payload[key][i]);
                }
            }
        }

        return formData;
    }
};

export default Post;
