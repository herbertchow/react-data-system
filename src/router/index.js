/**
 * @author Herbert Chow
 * @date 2018-11-16
 * @description 路由配置
 */
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
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

    render() {
        const { startRouterRoot } = this.props;
        
        let rootObj = routesConfig;
        if (startRouterRoot) {
            rootObj = startRouterRoot;
        }
        return (
            <Switch>
                {Object.keys(rootObj).map(key =>
                    rootObj[key].map(r => {
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
                                            <Component {...props} />
                                        ) : (
                                            <ParentComponentName {...props} />
                                        )
                                    }
                                />
                            );
                        };

                        return r.component
                            ? route(r)
                            : r.children.map(cr => route(cr, r.componentName));
                    })
                )}

                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        );
    }
}

export default MyRouter;
