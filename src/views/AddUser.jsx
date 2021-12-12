import React, { useEffect, useState } from 'react'
import { Paper, Typography } from '@material-ui/core'
import { getUserInfoById } from '../api/api-mock'
import constants from '../common/constants'

const defaultConfig = constants.defaultConfig;
export default function AddUser({match}) {
    // console.log(match.params, 'id--addUser--line 5')
    const [isEdit, setIsEdit] = useState(false);
    const [error, setError] = useState('')

    useEffect(() => {
        match.params.id ? setIsEdit(true) : setIsEdit(false);
        getData();
        console.log(match,'match line 12')
    }, []);

    const getData = async () => {
        let res = await getUserInfoById(match.params.id);
        console.log(res,constants,'这里是啥~~getData')
    }

    return (
        <Paper style={{padding:'20px'}}>
            <Typography variant='h5'>
                { isEdit ? 'Edit User' : 'Create New User' }
            </Typography>

            {!!error ? <Typography variant='body1' color='error'>{error}</Typography> : 
            <h1>5555</h1>}
            
            {/* <button onClick={getData}>获取数据</button> */}
        </Paper> 
    )
}
