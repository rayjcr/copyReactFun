import React from 'react'
import { Route, Switch } from 'react-router';
import MENU from './config'
import substance from './substance';

function recurrenceRouter(menuList){
    //  Routers;
    let Routers = menuList.map((item)=>{
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
            {recurrenceRouter(MENU)}
        </Switch>
    )
}
