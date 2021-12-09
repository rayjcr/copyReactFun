import { Divider, List, ListItem as MuiListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { PeopleAlt, PersonAdd } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
// import { SessionContext } from '../context/session'

const ListItem = (props) => {
    // 这里的props 就是ListItem组件上的 to  和 children 他包含的2个组件 ListItemIcon, ListItemText
    // console.log(props, 'MenuList--props--line 7');
    return (
        <MuiListItem button component={Link} {...props}></MuiListItem>
    )
}



export default function MenuList({closeMenu}) {

    useEffect(() => {
        ListItem();
    }, [closeMenu]);

    return (
        <List className='menuList' onClick={closeMenu}>
            {/* 这里会根据permissions来渲染出指定的权限菜单 */}
            <ListItem to='/users'>
                <ListItemIcon>
                    <PeopleAlt />
                </ListItemIcon>
                <ListItemText>Users</ListItemText>
            </ListItem>

            <ListItem to='/users/new'>
                <ListItemIcon>
                    <PersonAdd />
                </ListItemIcon>
                <ListItemText>Add New User</ListItemText>
            </ListItem>
            
            <Divider />
        </List>
    )
}
