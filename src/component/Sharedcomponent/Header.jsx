import React from 'react';
import {
    Container,
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    InputBase
} from '@mui/material';
import logo from '../../assets/images/group-6640.png';
import flag from '../../assets/images/group-120.png';
import bgimage from '../../assets/images/hot-air-balloon-flies-mountain-range-sunset.png';
import MenuButtons from '../../customComponent/menuBar';

const Header = () => {

    return (
        <AppBar position="static" sx={styles.appBar} elevation={0}>
            <Container maxWidth="xl" sx={styles.container}>
                <Toolbar disableGutters sx={styles.toolbar}>
                    {/* Logo */}
                    <Box sx={styles.logoBox}>
                        <Box
                            component="img"
                            src={logo}
                            alt="Travolic Logo"
                            sx={{ height: 32 }}
                        />
                    </Box>

                    {/* Spacer */}
                    <Box sx={{ flexGrow: 1 }} />

                    <>
                        {/* Language/Currency Selector */}
                        <Box sx={styles.langBox}>
                            <Box
                                component="img"
                                src={flag}
                                alt="Egypt Logo"
                                sx={styles.flagBox}
                            />
                            <InputBase
                                value="| EN | EGP"
                                readOnly
                                sx={styles.langInput}
                            />
                        </Box>

                        {/* Login/Signup Button */}
                        <Button variant="outlined" sx={styles.loginButton}>Sign in</Button>
                    </>
                </Toolbar>
            </Container>

            {/* Hero Section with Background Image */}
            <Box sx={styles.heroContainer}>
                <MenuButtons />
                <Typography variant="h1" sx={styles.headerText}>
                    Discover unbeatable flight deals worldwide
                </Typography>
            </Box>
        </AppBar>
    );
};

const styles = {
    appBar: {
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        py: 0,
    },
    container: {
        padding: '0 32px',
    },
    toolbar: {
        minHeight: 84,
        display: 'flex',
        alignItems: 'center',
    },
    logoBox: {
        display: 'flex',
        alignItems: 'center',
        mr: 4,
    },
    langBox: {
        height: 31,
        padding: '4.3px 16.1px 3.7px 15px',
        borderRadius: 22,
        border: '1px solid #0a425c',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mr: 2,
    },
    flagBox: {
        height: 14,
        width: 18,
        mr: 1,
    },
    langInput: {
        fontSize: 14,
        color: '#222',
        width: 80,
        border: 'none',
        background: 'transparent',
        p: 0,
    },
    loginButton: {
        width: 105,
        padding: '4px 15px 4px 10.9px',
        borderRadius: 22,
        border: '1px solid #0a425c',
        fontSize: 14,
    },
    heroContainer: {
        backgroundImage: `url(${bgimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 318,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        flexDirection: 'column',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff)'
        }
    },
    headerText: {
        WebkitBackdropFilter: 'blur(3px)',
        backdropFilter: 'blur(3px)',
        textShadow: '6px 3px 6px rgba(0, 0, 0, 0.65)',
        fontFamily: 'Poppins',
        fontSize: 44,
        fontWeight: 'bold',
        lineHeight: 1.48,
        color: '#fff',
        zIndex: 1,
        maxWidth: 800,
        textAlign: 'center',
        padding: '0 20px',
    },
    menuBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '40%',
        margin: '0 196px 35px 266px',
        padding: '16px 44px 0 33px',
        borderRadius: '13px',
        backgroundColor: '#fff',
    },
    menuButtons: {
        margin: '0 0 6px 0',
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: 500,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.56,
        letterSpacing: 'normal',
        color: '#0a425c',
    }
};

export default Header;