import axios from "axios";

class Http {
    constructor() {
        this.instance = axios.create({
            baseURL: `${window.location.origin}/api`,
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE',
            }
        });

        return this.init();
    }

    init() {
        this.instance.interceptors.response.use(undefined, async error => {
          return Promise.reject(error);
        });
        return this.instance;
    }
}

class ResponseWrapper {
    constructor(response) {
        this.axiosResponse = response;
    }
}

class ResponseError extends Error {
    constructor(error) {
        super();
        this.axiosError = error;
    }
}

export {
    Http,
    ResponseWrapper,
    ResponseError
}