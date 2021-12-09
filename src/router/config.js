import Users from '../views/Users';
import AddUser from '../views/AddUser';
import Test from '../views/Test';

const MENU = [
    {
        path: '/users',
        children:[
            {
                path: '/users/',
                exact: true,
                component: Users
            },
            {
                path: '/users/new',
                exact: true,
                component: AddUser
            },
            {
                path: '/users/:id',
                exact: true,
                component: AddUser
            },
        ]
    },
    {
        exact: true,
        path: '/test',
        component: Test
    },
]

export default MENU;