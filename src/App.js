import './App.css';
import { getSessionID, SessionContext } from './context/session'
import { useState, useEffect } from 'react'
import { AppBar } from '@material-ui/core';

function App() {

    const [permissions, setPermissions] = useState();
    
    useEffect(() => {
        const loadSessionID = getSessionID();
        console.log(loadSessionID, 'App.js-loadSessionID--line 11');

        // 如果没有SessionID跳转到登录组件 、提示错误
        if (!loadSessionID){

        } else {
        //1. 获取用户权限
        //2. SessionID验证失败跳到登录组件 、提示错误
        }

    }, [])

    return (
        <SessionContext.Provider value={permissions}>
            <AppBar></AppBar>
        </SessionContext.Provider>
    );
}

export default App;
