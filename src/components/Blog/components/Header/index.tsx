import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

type Props = {
    setOpenAddPost: any,
}

const Header: React.FC<Props> = (props) => {

    const handleOpen = () => {
        props.setOpenAddPost(true)
    };

    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h4" color="inherit" sx={{flexGrow: 1}}>
                    Blog
                </Typography>
                <Button onClick={handleOpen} variant="outlined" sx={{borderRadius: '1rem', border: '2px solid'}} color="inherit">
                    Add post
                </Button>
            </Toolbar>
        </AppBar>
    );
}
export default Header;