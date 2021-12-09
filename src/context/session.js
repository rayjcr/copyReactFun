import { createContext } from 'react';

// 设置sessionID
export var sessionID = '';

// console.log(process.env, 'session.js--process.ev--line 6');

export function getSessionID(){
    sessionID = '46e111d29dc934b4438b200cde2f113d';
    return sessionID;
}

// 创建context共所有组件使用
export const SessionContext = createContext({
    sessionID,
    sessionStatus: '',
    destination: '/',
})