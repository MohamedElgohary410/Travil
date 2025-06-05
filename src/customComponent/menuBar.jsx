import React, { useState } from 'react';
import { Box, Button } from '@mui/material';

const MenuButtons = () => {
    const [activeButton, setActiveButton] = useState('Flights');

    const buttons = [
        'Flights',
        'Airport Transfer',
        'Car Rentals',
        'More'
    ];

    return (
        <Box sx={containerStyle}>
            {buttons.map((label) => (
                <Button
                    key={label}
                    onClick={() => setActiveButton(label)}
                    sx={{
                        ...buttonStyle,
                        ...(activeButton === label && activeButtonStyle)
                    }}
                >
                    {label}
                </Button>
            ))}
        </Box>
    );
};

// Styles
const containerStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 1100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '40%',
    margin: '0 auto 35px',
    padding: '16px 44px 0 33px',
    borderRadius: '13px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
};

const buttonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    padding: '10px 10px 12px 10px', // Extra padding for underline
    color: '#0a425c',
    display: 'flex',
    position: 'relative',
    gap: '5px',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'all 0.2s ease',
    textTransform: 'none',
    minWidth: 'auto',
    fontSize: '14px',
    fontWeight: 500,
    '&:hover': {
        backgroundColor: 'rgba(43, 166, 222, 0.1)',
    },
    '&:focus': {
        backgroundColor: 'rgba(43, 166, 222, 0.2)',
        outline: 'none',
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '3px',
        backgroundColor: 'transparent',
        borderRadius: '5px',
        transition: 'all 0.2s ease',
    },
    '&:hover::after': {
        backgroundColor: '#2ba6de',
        opacity: 0.7,
    },
    '&:focus::after': {
        backgroundColor: '#2ba6de',
        opacity: 1,
    }
};

const activeButtonStyle = {
    backgroundColor: 'rgba(43, 166, 222, 0.2)',
    '&::after': {
        backgroundColor: '#0a425c',
        opacity: 1,
    },
    '&:hover::after': {
        backgroundColor: '#0a425c',
        opacity: 1,
    }
};

export default MenuButtons;