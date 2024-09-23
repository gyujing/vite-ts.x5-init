import axios from 'axios';

const pro = import.meta.env.MODE === 'production';

const baseUrl = pro ? (window as any).baseUrl : '';

const initialize = () => {
  const service = axios.create({
    baseURL: baseUrl, // url = base url + request url
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 60000, // request timeout
    // headers: { "Content-Type": "application/json" },
  });
  service.interceptors.request.use(
    async (config) => {
      return config;
    },
    function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    },
  );
  service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    (response) => {
      const res = response.data;
      const statusCode = response.status;
      // debugger
      //   if (res.errorCode !== undefined) {
      //     if (res.errorCode === null) {
      //       res.errorCode = 0;
      //     }

      //   }
      const { headers } = response;

      // console.log(headers);
      // console.log(response);
      if (headers['content-type'] === 'application/vnd.ms-excel;charset=utf-8') {
        return response;
      }
      if (statusCode !== 200) {
        return Promise.reject(new Error(res.message || 'Error'));
      }
      switch (res.code) {
        case 408:
          // ElMessage.error(res.message || res.msg || "Error")

          // const store = useUserStore();
          // store.logout(true);

          return Promise.reject(res);
        default:
          return res;
      }
    },
    (error) => {
      //  debugger
      // console.log("err" + error); // for debug
      // let errorMessage = '';
      // errorMessage = error.message;
      // ElMessage.error(errorMessage)
      return Promise.reject(error);
    },
  );

  return service;
};
const baseObj = { service: initialize(), baseUrl };
export default baseObj;
