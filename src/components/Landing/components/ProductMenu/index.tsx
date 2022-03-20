import React from "react";
import {ProductContainer, ProductImg} from "./styles"
import Accessories from "../../../../img/accessories.webp"
import Case from "../../../../img/case.webp"
import Keyboard from "../../../../img/keyboard.webp"
import Keykaps from "../../../../img/keykaps.webp"
import Plate from "../../../../img/plate.webp"
import Switch from "../../../../img/switch.jpg"
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


const ProductMenu: React.FC = () => {

    return (
        <Box m={2} display="flex" justifyContent="center" flexDirection="column">
            <Box display="flex" justifyContent="center" flexDirection="row">
                <ProductContainer>
                    <ProductImg src={Accessories} alt="Пример кода"/>
                    <Typography display="flex" justifyContent="center">Аксессуары</Typography>
                </ProductContainer>
                <ProductContainer>
                    <ProductImg src={Case} alt="Пример кода"/>
                    <Typography display="flex" justifyContent="center">Корпуса</Typography>
                </ProductContainer>
                <ProductContainer>
                    <ProductImg src={Keyboard} alt="Пример кода"/>
                    <Typography display="flex" justifyContent="center">Готовые сборки</Typography>
                </ProductContainer>
            </Box>
            <Box display="flex" justifyContent="center" flexDirection="row">
                <ProductContainer>
                    <ProductImg src={Keykaps} alt="Пример кода"/>
                    <Typography display="flex" justifyContent="center">Кейкапы</Typography>
                </ProductContainer>
                <ProductContainer>
                    <ProductImg src={Switch} alt="Пример кода"/>
                    <Typography display="flex" justifyContent="center">Свитчи</Typography>
                </ProductContainer>
                <ProductContainer>
                    <ProductImg src={Plate} alt="Пример кода"/>
                    <Typography display="flex" justifyContent="center">Плейты</Typography>
                </ProductContainer>
            </Box>
        </Box>
    );
}
export default ProductMenu;