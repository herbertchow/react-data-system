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
