export function getRoutesConfig(parentArr, name){
    let obj = { main: [] };
    parentArr.forEach(item => {
        if (item.componentName === name) {
            obj.main = item.children;
        } else if (item.children) {
            getRoutesConfig(item.children, name);
        }
    });
    return obj;
}
