/**
 * 所有的路由
 * */
import Basic from "./HeadAndFooter/Basic";
import React from "react";
import Home from '../pages/Home/index';
import {Route, Redirect, Switch} from 'react-router-dom';

const RouterList = (props) => {
    return (<Basic {...props}>
        <Switch>
            <Route exact
                   path="/Home"
                   component={Home} /* 首页 */
            />

            <Redirect
                exact
                from="/*"
                to={'/Home'}
                component={Home} /**  **/
            />
        </Switch>
    </Basic>);
}

export default RouterList;
