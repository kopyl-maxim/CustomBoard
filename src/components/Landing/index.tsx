import React from 'react';
import Box from "@mui/material/Box";
import Slider from "./components/Slider";
import Header from "./components/Header";
import useStyles from "./styles"

const PageBlog: React.FC = () => {
    const classes = useStyles();

    return (
        <Box className={classes.landingContainer}>
            <Header/>
            <Slider/>
        </Box>
    )
}

export default PageBlog