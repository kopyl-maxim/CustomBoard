import React from 'react';
import Header from "./components/Header";
import Box from "@mui/material/Box";
import Slider from "./components/Slider";

const PageBlog = () => {

    return (
        <Box bgcolor={"gray"}>
            <Header/>
            <Box display="flex" justifyContent="center">
                <Slider/>
            </Box>
        </Box>
    )
}

export default PageBlog