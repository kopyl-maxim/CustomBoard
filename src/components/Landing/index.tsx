import React from 'react';
import Slider from "./components/Slider";
import Header from "./components/Header";
import Footer from "../Footer";
import ProductMenu from "./components/ProductMenu";
import Box from "@mui/material/Box";
import useStyles from "./styles"

const PageBlog: React.FC = () => {
    const classes = useStyles();

    return (
        <Box className={classes.landingContainer}>
            <Header/>
            <Slider/>
            <ProductMenu/>
            <Footer/>
        </Box>
    )
}

export default PageBlog