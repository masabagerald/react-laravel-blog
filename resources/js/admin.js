window._ = require('lodash');

require('./bootstrap');
require('./admin/App');


window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Accept'] = 'application/json';
window.axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
