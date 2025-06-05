import React from 'react';
import { Box, Typography, Button, Grid, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import flag from '../../assets/images/group-120.png';

const Footer = () => {
    return (
        <Box sx={styles.footer}>
            <Grid container spacing={4} justifyContent="space-between" sx={styles.container}>
                {/* Company Section */}
                <Grid sx={styles.section}>
                    <Typography sx={styles.heading}>Company</Typography>
                    <Box display="flex" flexDirection="column">
                        {['About Us', 'How Travelic Works', 'Career', 'Blog'].map((item) => (
                            <Link key={item} href="#" sx={styles.link}>
                                {item}
                            </Link>
                        ))}
                    </Box>
                </Grid>

                {/* Explore Section */}
                <Grid sx={styles.section}>
                    <Typography sx={styles.heading}>Explore</Typography>
                    <Box display="flex" flexDirection="column">
                        {['Cities', 'Countries', 'Airports', 'Airlines', 'Flights', 'Airports Transfers'].map((item) => (
                            <Link key={item} href="#" sx={styles.link}>
                                {item}
                            </Link>
                        ))}
                    </Box>
                </Grid>

                {/* Contact Section */}
                <Grid sx={styles.section}>
                    <Typography sx={styles.heading}>Contact</Typography>
                    <Box display="flex" flexDirection="column">
                        {['Help/FAGs', 'Contact US'].map((item) => (
                            <Link key={item} href="#" sx={styles.link}>
                                {item}
                            </Link>
                        ))}
                    </Box>
                </Grid>

                {/* Currency Section */}
                <Grid sx={styles.currencySection}>
                    <Typography sx={styles.heading}>Site / Currency</Typography>
                    <Box display="flex" flexDirection="column" gap={1.5}>
                        <Button variant="contained" sx={styles.button}>
                            <Grid>
                                <Box component="img" src={flag} alt="Egypt Flag" sx={styles.flag} />
                                EGYPT
                            </Grid>
                            <ArrowDropDownIcon sx={styles.dropDownIcon} />
                        </Button>

                        <Button variant="contained" sx={styles.button}>
                            $ United States Dollars
                            <ArrowDropDownIcon sx={styles.dropDownIcon} />
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            {/* Copyright & Social Links */}
            <Box mt={8} textAlign="center">
                <Typography sx={styles.copyright}>
                    © 2023 Travelic |
                    <Link href="#" sx={styles.copyrightLink}>Privacy</Link> |
                    <Link href="#" sx={styles.copyrightLink}>Terms & Conditions</Link>
                </Typography>

                <Box display="flex" justifyContent="center" gap={2}>
                    <FacebookIcon sx={styles.socialIcon} />
                    <InstagramIcon sx={styles.socialIcon} />
                    <LinkedInIcon sx={styles.socialIcon} />
                    <YouTubeIcon sx={styles.socialIcon} />
                </Box>
            </Box>
        </Box>
    );
};

const styles = {
    footer: {
        backgroundColor: '#0A425C',
        color: '#FFFFFF',
        py: 8,
        px: 16,
        mt: 8,
    },
    container: {
        mx: 'auto',
    },
    section: {
        minWidth: 150,
    },
    currencySection: {
        minWidth: 280,
    },
    heading: {
        fontWeight: 700,
        color: '#d6de29',
        mb: 2,
    },
    link: {
        color: 'inherit',
        textDecoration: 'none',
        mb: 1,
        fontSize: '15px',
        '&:hover': { opacity: 0.8 }
    },
    button: {
        bgcolor: 'inherit',
        borderRadius: '13px',
        border: 'solid 1px #fff',
        py: 1,
        px: 3,
        textTransform: 'none',
        color: 'white',
        justifyContent: 'space-between',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
    },
    dropDownIcon: {
        color: '#FFFFFF',
        fontSize: '20px',
        ml: 1,
    },
    flag: {
        width: 18,
        height: 15,
        mr: 1.5,
    },
    copyright: {
        color: '#FFFFFF',
        mb: 2,
    },
    copyrightLink: {
        color: 'inherit',
        textDecoration: 'none',
        mx: 1,
    },
    socialIcon: {
        color: '#FFFFFF',
        fontSize: '24px',
    },
};

export default Footer;