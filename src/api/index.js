import axios from "axios";

export function ajaxGet({ url, params = {}, suc = () => { }, err = () => { } }) {
    if(!url){
        console.log('url is require');
        return;
    }
    return axios.get(url, {
        params: params
    });
        // .then(function (response) {
        //     suc();
        //     resolve(response.data);
        // })
        // .catch(function (error) {
        //     err();
        //     reject(error);
        // });
}