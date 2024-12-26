// src/components/Footer.js

import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box component="footer" className="bg-gray-800 text-white py-4 mt-8">
            <Typography variant="body2" align="center">
                © {new Date().getFullYear()} Your Company Name. All rights reserved.
            </Typography>
            <Box display="flex" justifyContent="center" mt={2}>
                <Link href="#" color="inherit" className="mx-2">
                    Privacy Policy
                </Link>
                <Link href="#" color="inherit" className="mx-2">
                    Terms of Service
                </Link>
                <Link href="#" color="inherit" className="mx-2">
                    Contact Us
                </Link>
            </Box>
        </Box>
    );
};

export default Footer;