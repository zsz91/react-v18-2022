/**
 * 所有的路由
 * */
import Basic from "./HeadAndFooter/Basic";
import React from "react";
import Home from '../pages/Home/index';
import {Route, Redirect, Switch} from 'react-router-dom';

const RouterList = (props) => {
    console.log('123');
    
    return (<Basic {...props}>
        <Switch>
            <Route exact
                   path="/Home"
                   component={Home} /* 首页 */
            />
        </Switch>
    </Basic>);
}

export default RouterList;
