import React from "react";
import Logo from "../../../../icon/logo.png"
import useStyles from "./styles"
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


const Header: React.FC = () => {

    const classes = useStyles();

    return (
        <Box display="flex" justifyContent="center" className={classes.headerContainer}>
            <Box className={classes.menuContainer}>
                <img src={Logo} className={classes.logoImg} alt={"ttt"}/>
                <Button className={classes.headerItem}>
                    Клавиатуры
                </Button>
                <Button className={classes.headerItem}>
                    Групбай
                </Button>
                <Button className={classes.headerItem}>
                    Предзаказ
                </Button>
                <Button className={classes.headerItem}>
                    Статьи
                </Button>
                <Button className={classes.headerItem}>
                    Форум
                </Button>
            </Box>
        </Box>
    );
}
export default Header;