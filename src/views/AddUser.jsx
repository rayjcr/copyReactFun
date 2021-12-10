import React, { createContext, useContext, useEffect, useState } from 'react'
import { Paper, Typography } from '@material-ui/core'

import { useRootStore } from '../store/index'
import { autorun, reaction } from 'mobx'
import { observer, useLocalObservable } from 'mobx-react'

// const countContext = createContext();
export default function AddUser(abc) {
    // console.log(match.params, 'id--addUser--line 5')
    const [isEdit, setIsEdit] = useState(false);
    // const count = useContext(countContext);

    const {countStore} = useRootStore()
    // console.log( rootStore ,'count')
 
    // reaction(
    //     ()=> countStore.count,
    //     (current, pre)=>{
    //         console.log(current, 'current');
    //         console.log(pre, 'pre');
    //     }
    // )

    useEffect(() => {
        countStore.increment();
        console.log(countStore.count,'countStore.count')
    }, []);

    const getData = () => {
        console.log('这里是啥~~getData')
    }


    return (
        <Paper style={{padding:'20px'}}>
            <Typography variant='h5'>
                { isEdit ? 'Edit User' : 'Create New User' }
            </Typography>

            <button onClick={getData}>获取数据</button>
        </Paper> 
    )
}
