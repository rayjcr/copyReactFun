import React from 'react'
import { Route, Switch } from 'react-router';
import menus from './config'
import substance from './substance';

function recurrenceRouter(menuList){
    // console.log(menuList,'来来来看下这个')
    let Routers;
    Routers = menuList.map((item)=>{
        if(!item.children){
            return (
                <Route 
                path = {item.path} 
                key = {item.path} 
                exact = {!!item.exact} 
                component={ substance[item.component] || ''}
                ></Route>
            )
        }else{
            return (
                <Route 
                path = {item.path}
                key = {item.path}
                >
                    <Switch>
                        {recurrenceRouter(item.children)}
                    </Switch>
                </Route>
            )
        }
    })
    return Routers
}


export default function Routes() {
    // console.log(menus, 'router-index.jsx--menu--line 5')
    return (
        <Switch>
            {recurrenceRouter(menus)}
        </Switch>
    )
}
