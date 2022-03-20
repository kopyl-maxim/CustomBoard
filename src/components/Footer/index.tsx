import React from "react";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import {FooterLinkContainer, FooterLogo, HeaderContainer} from "./styled";

const Footer: React.FC = () => {

    return (
        <HeaderContainer>
            <FooterLogo>KeyBoard</FooterLogo>
            <Box display="flex" flexDirection="row" justifyContent="center">
                <FooterLinkContainer>
                    <Typography>Магазин</Typography>
                    <Typography>Клавиатуры</Typography>
                    <Typography>Групбай</Typography>
                    <Typography>Предзаказ</Typography>
                    <Typography>Статьи</Typography>
                    <Typography>Форум</Typography>
                </FooterLinkContainer>
                <FooterLinkContainer>
                    <Typography>Частые вопросы</Typography>
                    <Typography>О магазине</Typography>
                    <Typography>Подключатели</Typography>
                    <Typography>Размеры</Typography>
                    <Typography>Профили</Typography>
                    <Typography>Глоссарий</Typography>
                    <Typography>Публичная оферта</Typography>
                </FooterLinkContainer>
                <FooterLinkContainer>
                    <Typography>Контакты</Typography>
                    <Typography>+380 66 306 2993</Typography>
                    <Typography>Telegram</Typography>
                    <Typography>mkmskopyl@gmail.com</Typography>
                    <Typography>Время работы и поддеражка</Typography>
                    <Typography>Пн-Пт с 10:00 до 18:00</Typography>
                </FooterLinkContainer>
            </Box>
        </HeaderContainer>
    );
}
export default Footer;