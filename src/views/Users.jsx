import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { SessionContext } from '../context/session'
import { getAllUsers } from  '../api/api-mock';
import { Delete, Edit } from '@material-ui/icons';

export default function Users() {
    const session = useContext(SessionContext);
    //用户列表信息
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        let res = getAllUsers();
        setUsers(res.data);
    },[]);

    return (
        <TableContainer component={Paper} style={{padding:'20px'}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>User ID</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Time Created</TableCell>
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user)=>(
                        <TableRow key={user.user_id}>
                            <TableCell>{user.user_id}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.status}</TableCell>
                            <TableCell>{user.time_created}</TableCell>
                            <TableCell>
                                <IconButton size='small'>
                                    <Edit />
                                </IconButton>
                                <IconButton size='small'>
                                    <Delete />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
