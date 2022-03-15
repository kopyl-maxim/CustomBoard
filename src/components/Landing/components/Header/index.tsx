import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "../../../../icon/logo.png"
import useStyles from "./styles"
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


const Header: React.FC = () => {
    const classes = useStyles();

    return (
        <Box display="flex" justifyContent="center" bgcolor={"gray"}>
            <Box className={classes.container}>
                <img src={Logo} className={classes.logoImg} alt={"ttt"}/>
                <Button>
                    <Typography color="white" sx={{flexGrow: 1}}>
                        Клавиатуры
                    </Typography>
                </Button>
                <Button>
                    <Typography color="white" sx={{flexGrow: 1}}>
                        Групбай
                    </Typography>
                </Button>
                <Button>
                    <Typography color="white" sx={{flexGrow: 1}}>
                        Предзаказ
                    </Typography>
                </Button>
                <Button>
                    <Typography color="white" sx={{flexGrow: 1}}>
                        Статьи
                    </Typography>
                </Button>
                <Button>
                    <Typography color="white" sx={{flexGrow: 1}}>
                        Форум
                    </Typography>
                </Button>
            </Box>
        </Box>
    );
}
export default Header;