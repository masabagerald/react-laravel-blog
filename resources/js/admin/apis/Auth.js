import axios from "axios";
import axiosBaseUrl from "../../axiosConfig";


const Auth = {
  login: (data, successCb, failCb) => {
      axiosBaseUrl.post('login', data).then(response => {


          successCb(response);

      }).catch(err => {

          failCb(err);
          console.log(err)
      });
  },
  logout: (successCb, failCb) => {
   axiosBaseUrl.get('/logout', {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}})
          .then(response => {
              localStorage.clear();

              successCb(response);
          }).catch(err => {
              failCb(err);
          alert(err.response.data.message);
      });
  },
  checkAuth: (successCb, failCb) => {
      axiosBaseUrl.get('/check-auth', {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}})
          .then(response => {
            successCb(response);
          }).catch(err => {
            failCb(err);
      });
  }
};

export default Auth;
