import axios from 'axios';
var Cookies = require('js-cookie');

const BASE_URL = "http://localhost:7000";
//const BASE_URL = "https://nameless-fortress-18454.herokuapp.com";
const V1_URL = BASE_URL + "/v1";

export default {
    methods: {
        async login(request){
            const url = `${V1_URL}/login`;

            return await axios
                .post(url, request)
                .then(res => {
                    if (res.status == 200) {
                        Cookies.set("session", res.data.token);
                        //Cookies.config("7d");
                    }
                    return res;
                }).catch(error => {
                    return error.response;
                });
        },
        async register(request){
            const url = `${V1_URL}/register`;

            return await axios
                .post(url, request)
                .then(res => {
                    if (res.status == 200) {
                        Cookies.set("session", res.data.token);
                        //Cookies.config("7d");
                    }
                    return res.data;
                }).catch(error => {
                    return error.response;
                });
        },
        async addSnepp(request){
            const url = `${V1_URL}/snepp`;

            return await axios
                .post(url, request, {
                    headers: {
                        "Authorization": `Bearer ${Cookies.get("session")}`
                    }
                })
                .then(res => res.data)
                .catch(error => {
                    return error.response;
                });
        },
        async getSnepp(id){
            const url = `${V1_URL}/snepp/${id}`;

            return await axios
                .get(url, {
                    headers: {
                        "Authorization": `Bearer ${Cookies.get("session")}`
                    }
                })
                .then(res => res.data)
                .catch(error => {
                    return error.response;
                });
        },
        async updateSnepp(id, request){
            const url = `${V1_URL}/snepp/${id}`;

            return await axios
                .put(url, request, {
                    headers: {
                        "Authorization": `Bearer ${Cookies.get("session")}`
                    }
                })
                .then(res => res.data)
                .catch(error => {
                    return error.response;
                });
        },
        async deleteSnepp(id){
            const url = `${V1_URL}/snepp/${id}`;

            return await axios
                .delete(url, {
                    headers: {
                        "Authorization": `Bearer ${Cookies.get("session")}`
                    }
                })
                .then(res => res.data)
                .catch(error => {
                    return error.response;
                });
        },
        async getMySneppList(){
            const url = `${V1_URL}/snepp/list`;

            return await axios
                .get(url, {
                    headers: {
                        "Authorization": `Bearer ${Cookies.get("session")}`
                    }
                })
                .then(res => res.data)
                .catch(error => {
                    return error.response;
                });
        }
    }
}