import './App.css';
import { getSessionID, SessionContext } from './context/session';
import { useState, useEffect, useCallback } from 'react';
import { AppBar, Container, Drawer, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import MenuList from './components/MenuList';
import Routes from './router/index'
import { RootStore, RootStoreProvider } from './store/index'

const rootStore = new RootStore();

function App() {

    const [permissions, setPermissions] = useState();
    const [menuOpen, setMenuOpen] = useState(false);
    
    // const menuToggle = useCallback(
    //     () => {
    //         setMenuOpen(!menuOpen);
    //         console.log('123')
    //     },
    //     [menuOpen],
    // );

    const handleMenuClose = useCallback(
        () => {
            setMenuOpen(false);
        },
        [setMenuOpen],
    )

    useEffect(() => {
        const loadSessionID = getSessionID();
        // console.log(loadSessionID, 'App.js-loadSessionID--line 11');

        // 如果没有SessionID跳转到登录组件 、提示错误
        if (!loadSessionID){

        } else {
            setPermissions('')
        //1. 获取用户权限
        //2. SessionID验证失败跳到登录组件 、提示错误
        }

    }, [])
    // console.log(permissions,'permissions')
    return (
        <RootStoreProvider store={rootStore}>
            <SessionContext.Provider value={permissions}>
                {/* 应用栏 */}
                <AppBar position='relative'>
                    {/* 工具栏 */}
                    <Toolbar>
                        {/* 带有Icon的Button */}
                        <IconButton
                            aria-label='menu'
                            edge='start'
                            size='medium'
                            color='inherit'
                            onClick={()=>{setMenuOpen(!menuOpen)}}
                        >
                            {/* Menu样式的Icon */}
                            <Menu/>
                        </IconButton>
                        <Typography variant='h6'>
                            Internal Ops Tool
                        </Typography>
                    </Toolbar>
                    {/* 侧边条菜单 */}
                    <Drawer 
                        className='MenuListDrawer'
                        open={menuOpen}
                        onClose={handleMenuClose}
                    >
                        <MenuList closeMenu={handleMenuClose} />
                    </Drawer>
                </AppBar>

                <Container style={{margin:'30px auto'}} maxWidth='md'>
                    <Routes />
                </Container>

            </SessionContext.Provider>
        </RootStoreProvider>
    );
}

export default App;
