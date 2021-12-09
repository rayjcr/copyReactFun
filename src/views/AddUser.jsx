import React, { useEffect, useState } from 'react'
import { Paper, Typography } from '@material-ui/core'
export default function AddUser({match}) {
    console.log(match.params, 'id--addUser--line 5')
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
       !!match.params.id ? setIsEdit(true) : setIsEdit(false);
    }, []);

    return (
        <Paper style={{padding:'20px'}}>
            <Typography variant='h5'>
                { isEdit ? 'Edit User' : 'Create New User' }
            </Typography>

            
        </Paper>
    )
}
