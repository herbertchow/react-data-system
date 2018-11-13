/**
 * @Author: Herbert Chow
 * @Date:  2018/11/13
 * @Duty:网络请求
 */
import axios from "axios";

let promise;
// export function ajaxGet({ url, params = {}, suc = () => { }, err = () => { } }) {
//     if(!url){
//         console.log('url is require');
//         return;
//     }
//     return axios.get(url, {
//         params: params
//     });
// }
export let restful = {
    /**
     * 定义通用的请求函数
     *@param item  {Object} 请求的参数主体
     */
    fetch(item) {
        let config = {
            method: item.method ? item.method : "post",
            url: item.url,
            data: item.params,
            headers: {
                //'X-Requested-With': item.headers ? item.headers : 'XMLHttpRequest',
                "Content-Type":
                    item.contentType === "json"
                        ? "application/json"
                        : "application/x-www-form-urlencoded"
                // 是否需要携带cookie 等额外请求头
                // crossDomain: true
            }
        };
        promise = axios(config).then(
            res => {
                return res.data;
            },
            rej => {
                return { error: true, msg: "网络错误", errorType: rej };
            }
        );
        return promise;
    },

    /**
     * 定义通用的请求函数
     *@param item  {Object} 请求的参数主体
     *@param self  {Object} 需要处理的目标对象即从哪个对象调用此函数
     *@param callback {Function} 回调函数
     *@param callbackErr {Function} 错误时回调函数
     */
    get(item, /*self, */ callback, callbackErr) {
        item.params = item.params || {};
        let axiosBody = {
            method: "get",
            url: item.url,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            params: item.params
        };

        promise = axios(axiosBody).then(
            res => {
                if (res.data && res.data.code === 200) {
                    if (typeof callback === "function") callback(res.data);
                    return res.data;
                } else {
                    const errorObj = { error: true, msg: "请求错误" };
                    if (typeof callbackErr === "function")
                        callbackErr(errorObj);
                    return errorObj;
                }
            },
            error => {
                const errorObj = {
                    error: true,
                    msg: "网络错误",
                    errorType: error
                };
                if (typeof callbackErr === "function") callbackErr(errorObj);
                return errorObj;
            }
        );
        return promise;
    },
    /**
     * 定义通用的请求函数
     *@param item  {Object} 请求的参数主体
     *@param self  {Object} 需要处理的目标对象即从哪个对象调用此函数
     *@param callback {Function} 回调函数
     *@param callbackErr {Function} 错误时回调函数
     */
    post(item, /*self, */ callback, callbackErr) {
        let config = {
            method: "post",
            url: item.url,
            // data: JSON.stringify(item.params),
            data: item.params,
            headers: {
                //'X-Requested-With': item.headers ? item.headers : 'XMLHttpRequest',
                "Content-Type": item.requestHeader
                    ? item.requestHeader
                    : // : 'application/json'
                      "application/x-www-form-urlencoded"
                // 是否需要携带cookie 等额外请求头
                // crossDomain: true
            }
        };
        promise = axios(config).then(
            response => {
                if (typeof callback === "function") callback(response.data);
                return response.data;
            },
            reject => {
                const errObj = {
                    error: true,
                    msg: "网络错误",
                    errorType: reject
                };
                if (typeof callbackErr === "function") callbackErr(errObj);
                return errObj;
            }
        );
        return promise;
    }
    // /**
    //  * 上传文件
    //  *@param item  {Object} 请求的参数主体
    //  *@param self  {Object} 需要处理的目标对象即从哪个对象调用此函数
    //  *@param callback {Function} 回调函数
    //  */
    // sendMyFile(item, self, callback) {
    //     let fd = new FormData();
    //     // 若点击按钮需要缓冲状态则使用此方法
    //     if (item.loading) {
    //         self[item.loading] = true;
    //     }
    //     fd.append(item.params.file_name, item.params.file);
    //     fd.append(
    //         "site_id",
    //         item.params.site_id || sessionStorage.getItem("siteId") || "1"
    //     );
    //     let config = {
    //         method: "post",
    //         url: item.url,
    //         data: fd
    //     };
    //     promise = axios(config).then(response => {
    //         callback(response.data);
    //         if (item.loading) {
    //             self[item.loading] = false;
    //         }
    //         return response.data;
    //     });
    //     return promise;
    // },
    // /**
    //  * 定义通用的请求函数
    //  *@param item  {Object} 请求的参数主体
    //  *@param self  {Object} 需要处理的目标对象即从哪个对象调用此函数
    //  *@param callback {Function} 回调函数
    //  */
    // sendMyData(item, self, callback, errorCb) {
    //     sessionStorage.getItem("siteId");
    //     item.params.site_id =
    //         item.params.site_id || sessionStorage.getItem("siteId") || "1";
    //     item.params.lang =
    //         item.params.lang || localStorage.getItem("lang") || "zh-CN";
    //     // 若点击按钮需要缓冲状态则使用此方法
    //     if (item.loading) {
    //         self[item.loading] = true;
    //     }
    //     let config = {
    //         method: "POST",
    //         url: item.url,
    //         param: item.params,
    //         contentType: item.contentType || "form"
    //     };
    //     this.fetch(config).then(
    //         res => {
    //             if (res && res.code !== 200) {
    //                 self.$message({
    //                     showClose: false,
    //                     message: res.code + "：" + res.msg,
    //                     type: "error"
    //                 });
    //             }
    //             if (item.loading) {
    //                 self[item.loading] = false;
    //             }
    //             callback && callback(res);
    //         },
    //         error => {
    //             console.log(error);
    //             if (item.loading) {
    //                 self[item.loading] = false;
    //             }
    //             errorCb && errorCb(error);
    //             self.$message({
    //                 showClose: false,
    //                 message: error.response
    //                     ? error.response.status +
    //                       "：" +
    //                       error.response.statusText
    //                     : "服务器错误",
    //                 type: "error"
    //             });
    //         }
    //     );
    // }
};

// /**
//  * 定义通用的请求函数
//  * @param url {String} 接口地址
//  * @param params {Object} 参数
//  * @param successFn {Function} 成功句柄
//  * @param errFn {Function} 失败句柄
//  */
// export function sendReq(url, params, successFn, errFn) {
//     let self = this;
//     if (typeof params === "function" && successFn === undefined) {
//         successFn = params;
//         params = {};
//         params.data = {};
//     } else if (
//         typeof params === "function" &&
//         typeof successFn === "function"
//     ) {
//         errFn = successFn;
//         successFn = params;
//         params = {};
//         params.data = {};
//     }

//     if (!params.data) params.data = {};
//     params.data.site_id =
//         params.data.site_id || sessionStorage.getItem("siteId") || "1";
//     params.data.lang =
//         params.data.lang || localStorage.getItem("lang") || "zh-CN";
//     let body = {
//         method: params.method || "post",
//         url: url,
//         headers: {
//             "Content-Type":
//                 params.contentType && params.contentType.indexOf("json") > -1
//                     ? "application/json"
//                     : "application/x-www-form-urlencoded"
//         },
//         data:
//             params.contentType && params.contentType.indexOf("json") > -1
//                 ? JSON.stringify(params.data)
//                 : qs.stringify(params.data) || ""
//     };
//     return axios(body).then(
//         res => {
//             if (res && res.data && res.data.code === 200) {
//                 successFn && successFn(res);
//                 if (self.loading) self.loading = false;
//             } else {
//                 errFn && errFn(res);
//                 self.$message({
//                     showClose: true,
//                     type: "error",
//                     message:
//                         "失败提示: " +
//                         ((res.data && res.data.msg) || "返回数据异常")
//                 });
//                 if (self.loading) self.loading = false;
//             }
//         },
//         error => {
//             errFn && errFn(error);
//             self.$message({
//                 showClose: true,
//                 type: "error",
//                 message: "出现错误" + error
//             });
//             if (self.loading) self.loading = false;
//             console.warn("sendReq error ", error);
//         }
//     );
// }
