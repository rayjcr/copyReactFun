const menu = [
    {
        path: '/users',
        children:[
            {
                path: '/users/',
                exact: true,
                component: 'Users'
            },
            {
                path: '/users/new',
                exact: true,
                component: 'AddUser'
            }
        ]
    },
    {
        exact: true,
        path: '/test',
        component: 'Test'
    },
]

export default menu;