/**
 * @description 获取对应数组配置
 * @param {Array} parentArr 源数组
 * @param {String} name 目标
 */
export function getRoutesConfig(parentArr, name){
    let obj = [];
    parentArr.forEach(item => {
        if (item.componentName === name) {
            obj = item.children;
        } else if (item.children) {
            getRoutesConfig(item.children, name);
        }
    });
    return obj;
}

/**
 * @description 生成随机id
 */
export function getRandom() {
    return ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4)
}