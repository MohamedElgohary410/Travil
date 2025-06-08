import React from 'react';
import {
    Box,
    Container,
    Typography,
    Tabs,
    Tab,
    TextField,
    Checkbox,
    FormControlLabel,
    Button,
    Grid,
} from '@mui/material';
import logo from '../assets/images/group-6640.png';
import phoneApp from '../assets/images/phone-14-cam-01-home@2x.png';
import qrCode from '../assets/images/icon-metro-qrcode@2x.png';
import dealImage from '../assets/images/group-16420@2x.png';
import flagImage from '../assets/images/group-6641@2x.png';

// SearchBar Component
const SearchBar = () => {
    return (
        <Container maxWidth="xl" sx={{ mt: 4 }}>
            <Box
                sx={{
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    padding: '20px',
                }}
            >
                <Tabs value={0} sx={{ mb: 2 }}>
                    <Tab label="One Way" sx={{ fontFamily: 'Poppins', color: '#0a425c' }} />
                    <Tab label="Round Trip" sx={{ fontFamily: 'Poppins', color: '#666' }} />
                </Tabs>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <TextField
                        placeholder="From"
                        defaultValue="Cairo (CAI)"
                        sx={{ flex: 1, fontFamily: 'Poppins' }}
                    />
                    <TextField
                        placeholder="To"
                        defaultValue="London Heathrow"
                        sx={{ flex: 1, fontFamily: 'Poppins' }}
                    />
                    <TextField
                        type="date"
                        defaultValue="2023-09-03"
                        sx={{ flex: 1, fontFamily: 'Poppins' }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1 }}>
                        <TextField
                            defaultValue="1 Adult, Economy"
                            sx={{ flex: 1, fontFamily: 'Poppins' }}
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Add Hotel"
                            sx={{ fontFamily: 'Poppins', color: '#666' }}
                        />
                    </Box>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#f5c518',
                            color: '#fff',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            fontFamily: 'Poppins',
                        }}
                    >
                        Search
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

// BestDeals Component
const BestDeals = () => {
    return (
        <Container maxWidth="xl" sx={{ mt: 6 }}>
            <Typography
                variant="h2"
                sx={{
                    fontFamily: 'Poppins',
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: '#0a425c',
                    mb: 1,
                }}
            >
                Best Deals
            </Typography>
            <Typography
                variant="body1"
                sx={{ fontFamily: 'Poppins', fontSize: 14, color: '#666', mb: 3 }}
            >
                Here are the flight deals with the lowest prices. Act fast! They sell out within the next month
            </Typography>
            <Grid container spacing={2}>
                {[...Array(10)].map((_, index) => (
                    <Grid item xs={12} sm={6} md={2.4} key={index}>
                        <Box
                            sx={{
                                backgroundColor: '#fff',
                                borderRadius: '10px',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                padding: '10px',
                            }}
                        >
                            <Box
                                component="img"
                                src={dealImage}
                                alt={`Deal ${index + 1}`}
                                sx={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                            />
                            <Typography
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    color: '#0a425c',
                                    mt: 1,
                                }}
                            >
                                Dubai to Cairo
                            </Typography>
                            <Typography
                                sx={{ fontFamily: 'Poppins', fontSize: 14, color: '#666' }}
                            >
                                EGP 5,230
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

// MobileAppPromo Component
const MobileAppPromo = () => {
    return (
        <Box sx={{ backgroundColor: '#f5f5f5', py: 6, mt: 6 }}>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src={phoneApp}
                            alt="Phone App"
                            sx={{ width: '100%', height: 400, borderRadius: '10px' }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                height: '100%',
                            }}
                        >
                            <Box
                                component="img"
                                src={logo}
                                alt="Travolic Logo"
                                sx={{ height: 32, mb: 2 }}
                            />
                            <Typography
                                variant="h3"
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: 28,
                                    fontWeight: 'bold',
                                    color: '#0a425c',
                                    mb: 1,
                                }}
                            >
                                Travel Like Never Before
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: 16,
                                    color: '#666',
                                    mb: 3,
                                }}
                            >
                                Search and book flights in a single travel booking that allows you to travel the world
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#0a425c',
                                        color: '#fff',
                                        fontFamily: 'Poppins',
                                        borderRadius: '5px',
                                    }}
                                >
                                    App Store
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#0a425c',
                                        color: '#fff',
                                        fontFamily: 'Poppins',
                                        borderRadius: '5px',
                                    }}
                                >
                                    Google Play
                                </Button>
                            </Box>
                            <Box
                                component="img"
                                src={qrCode}
                                alt="QR Code"
                                sx={{ height: 100 }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

// SeoSection Component
const SeoSection = () => {
    return (
        <Box sx={{ backgroundColor: '#f5f5f5', py: 6 }}>
            <Container maxWidth="xl">
                <Typography
                    variant="h2"
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: 32,
                        fontWeight: 'bold',
                        color: '#0a425c',
                        textAlign: 'center',
                        mb: 3,
                    }}
                >
                    SEO
                </Typography>
                <Tabs value={0} centered sx={{ mb: 3 }}>
                    <Tab label="Top Flights" sx={{ fontFamily: 'Poppins', color: '#0a425c' }} />
                    <Tab label="Top Country's" sx={{ fontFamily: 'Poppins', color: '#666' }} />
                    <Tab label="Top Nearby" sx={{ fontFamily: 'Poppins', color: '#666' }} />
                </Tabs>
                <Grid container spacing={2}>
                    {[...Array(8)].map((_, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Box
                                sx={{
                                    backgroundColor: '#fff',
                                    borderRadius: '10px',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                    padding: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={flagImage}
                                    alt={`Flag ${index + 1}`}
                                    sx={{ width: 40, height: 40, borderRadius: '50%', mr: 2 }}
                                />
                                <Typography
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontWeight: 'bold',
                                        fontSize: 16,
                                        color: '#0a425c',
                                    }}
                                >
                                    {['Egypt', 'USA', 'Germany', 'France', 'UK', 'Italy', 'Spain', 'Canada'][index]}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

// Main Content Component
const Content = () => {
    return (
        <>
            <SearchBar />
            <BestDeals />
            <MobileAppPromo />
            <SeoSection />
        </>
    );
};

export default Content;