import { Button, Dialog, DialogActions, DialogContent, DialogContentText, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Slide } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { SessionContext } from '../context/session'
import { getAllUsers } from  '../api/api-mock';
import { Delete, Edit } from '@material-ui/icons';
import { reject } from 'lodash'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Users() {
    // const session = useContext(SessionContext);
    //用户列表信息
    const [users, setUsers] = useState([]);
    const [isDelete, setIsDelete] = useState('');

    useEffect(()=>{
        let res = getAllUsers();
        setUsers(res.data);
    },[]);

    useEffect(() => {
        
    }, [isDelete]);

    const handleDeleteUser = () => {
        // 这里模拟删除数据
        let newUsers = reject(users, (item)=>{
            console.log(item.user_id,isDelete.user_id)
            return item.user_id === isDelete.user_id
        });
        setIsDelete(false)
        setUsers([...newUsers])
    }

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
                        <TableRow  key={user.user_id}>
                            <TableCell>{user.user_id}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.status}</TableCell>
                            <TableCell>{user.time_created}</TableCell>
                            <TableCell>
                                <IconButton size='small' component={Link} to={'/users/' + user.user_id}>
                                    <Edit />
                                </IconButton>
                                <IconButton size='small' onClick={()=>setIsDelete(user)}>
                                    <Delete />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            
            {/* maxwidth最大宽，fullwidth是否展示最大宽还是随着内容宽，transitionComponent动画效果 */}
            <Dialog maxWidth='xs' fullWidth={true} TransitionComponent={Transition} open={!!isDelete} onClose={()=>setIsDelete(false)} aria-labelledby="max-width-dialog-title">
                <DialogContent>
                    <DialogContentText>
                        {`Delete ${isDelete.email}'s account?`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={()=>setIsDelete(false)} variant="contained" color='primary'>Cancel</Button>
                    <Button variant="outlined" onClick={handleDeleteUser}>Delete</Button>
                </DialogActions>
            </Dialog>
        
        </TableContainer>
    )
}
