/**
 * @author Herbert Chow
 * @date 2018-11-16
 * @description 路由配置
 */
import React, { Component } from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AllComponents from "../components";
import routesConfig from "./config";

class MyRouter extends Component {
    // requireAuth = (permission, component) => {
    //     const { auth } = this.props;
    //     const { permissions } = auth.data;
    //     // const { auth } = store.getState().httpData;
    //     if (!permissions || !permissions.includes(permission)) return <Redirect to={'404'} />;
    //     return component;
    // };
    // requireLogin = (component, permission) => {
    //     const { auth } = this.props;
    //     const { permissions } = auth.data;
    //     if (process.env.NODE_ENV === 'production' && !permissions) { // 线上环境判断是否登录
    //         return <Redirect to={'/login'} />;
    //     }
    //     return permission ? this.requireAuth(permission, component) : component;
    // };

    isRouteExist(src) {
        let tag = false;
        function __find(el,target){
            el.forEach(item=>{
                if(item.route === src){
                    tag = true;
                }else if(item.children){
                    __find(item.children,src);
                }
            })
        }
        __find(routesConfig,src)
        return tag;
    }

    getRouteStatus(isLogin, location, history, nextPropsLocation) {
        // console.log(this.isRouteExist(location.pathname), 435354);
        if (!this.isRouteExist(location.pathname)) {
            history.replace("/404");
        } else if (location.pathname === "/404") {
            history.replace("/404");
        } else {
            if (!isLogin) {
                location.pathname === "/Register"
                    ? history.replace(location.pathname)
                    : history.replace("/Login");
            } else {
                history.replace(
                    nextPropsLocation.pathname === "/Login"
                        ? "/"
                        : nextPropsLocation.pathname
                );
            }
        }

    }

    componentDidMount() {
        // console.log('componentDidMount')
        let { isLogin, history, location } = this.props;
        this.getRouteStatus(isLogin, location, history, location);
    }

    componentWillReceiveProps(nextProps) {
        // console.log('componentWillReceiveProps')
        let { isLogin, location } = nextProps;
        let { history } = this.props;
        let oldLogin = this.props.isLogin;
        if (
            oldLogin !== isLogin ||
            (oldLogin === isLogin &&
                nextProps.location.pathname !== this.props.location.pathname)
        ) {
            this.getRouteStatus(isLogin, location, history, nextProps.location);
        }
    }

    render() {
        const { startRouterRoot } = this.props;

        let rootObj = routesConfig;
        if (startRouterRoot) {
            rootObj = startRouterRoot;
        }
        return (
            <Switch>
                {rootObj.map(r => {
                    const route = (r, parentcomponentname) => {
                        const Component = AllComponents[r.component];
                        const ParentComponentName =
                            AllComponents[parentcomponentname];

                        return (
                            <Route
                                key={r.route || r.key}
                                exact
                                path={r.route || r.key}
                                // render={props => r.login ?
                                //     <Component {...props} />
                                //     : this.requireLogin(<Component {...props} />, r.auth)}
                                render={props =>
                                    !ParentComponentName ? (
                                        <Component {...props} nameSpace={r.nameSpace} />
                                    ) : (
                                            <ParentComponentName {...props} nameSpace={r.nameSpace} />
                                        )
                                }
                            />
                        );
                    };

                    return r.component
                        ? route(r)
                        : r.children.map(cr => route(cr, r.componentName));
                })}

                <Route render={() => <Redirect to={"/404"} />} />
            </Switch>
        );
    }
}

const mapStateToProps = (state, props) => {
    // console.log(state, "Entry mod",state._loginType.frozen);
    return {
        ...state,
        isLogin: state._loginType ? state._loginType.isLogin : false
    };
};

export default withRouter(connect(mapStateToProps)(MyRouter));
