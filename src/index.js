import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, responsiveFontSizes, ThemeProvider, useTheme } from '@mui/material/styles';
import Home from "./pages/Home";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import {
    AppBar,
    Box,
    Button, CssBaseline,
    Divider,
    Hidden,
    IconButton, List, ListItem,
    SwipeableDrawer,
    Toolbar,
    Typography
} from "@mui/material";
import { HashLink as Link } from 'react-router-hash-link';
import styles from './css/app.module.css';
import ReactGA from 'react-ga4';
import MenuIcon from '@mui/icons-material/Menu';

const links = [{
    label: 'Home',
    path: '/home'
}, {
    label: 'Projects',
    path: '/home#projects'
}, {
    label: 'Skills',
    path: '/home#skillsSection'
}, {
    label: 'About',
    path: '/home#aboutSection'
}]

function AppLayout() {
    const theme = useTheme();
    const [menuOpen, setMenuOpen] = useState();
    const drawerWidth = 240;

    const drawerStyles = {
        '& .MuiDrawer-paper': {
            backgroundColor: '#1976d2',
            color: '#fff',
            width: `${drawerWidth}px`
        },
    };

    const mainStyles = {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(menuOpen && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: `${drawerWidth}px`,
        }),
        height: { md: 'calc(100vh - 64px)', xs: 'calc(100vh - 54px)', sm: 'calc(100vh - 54px)' }
    }

    let siteTheme = createTheme({
        palette: {
            mode: "light",
        },
    });
    siteTheme = responsiveFontSizes(siteTheme);


    return <ThemeProvider theme={siteTheme}>
        <CssBaseline>
            <Box sx={mainStyles}>
                <AppBar component="nav" position="sticky"
                    sx={{
                        width: '100%',
                    }}>
                    <Toolbar sx={{ paddingLeft: { xs: '2px !important', sm: '24px !important' } }}>
                        <Hidden smUp>
                            <IconButton
                                onClick={() => {
                                    setMenuOpen(true)
                                }}
                                color="inherit">
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>John Tabb</Typography>
                        <Hidden smDown>
                            <Box className={styles.menuLinks}>
                                {links.map(link => {
                                    return <Link to={link.path}
                                        className={styles.menuLink}>{link.label}</Link>
                                })}
                            </Box>
                        </Hidden>
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer
                    sx={drawerStyles}
                    anchor='left'
                    open={menuOpen}
                    onClose={() => setMenuOpen(!menuOpen)}
                >
                    <Divider />
                    <List>
                        {links.map(link => {
                            return <ListItem key={link.path}>
                                <Link onClick={() => setMenuOpen(!menuOpen)} to={link.path}
                                    className={styles.menuLink}>{link.label}</Link>
                            </ListItem>
                        })}
                    </List>
                </SwipeableDrawer>
                <Box className="content" style={{ height: '100%' }}>
                    <Outlet />
                </Box>
            </Box>

        </CssBaseline>
    </ThemeProvider>
}

const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID;
if (gaTrackingId) {
    ReactGA.initialize(gaTrackingId);
}

export default function App() {
    useEffect(() => {
        ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route path="home" element={<Home />} />
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
