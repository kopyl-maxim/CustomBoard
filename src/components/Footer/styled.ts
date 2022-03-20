import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const HeaderContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 4rem;
  background-color: rgb(250, 250, 250);
`;

export const FooterLogo = styled(Typography)`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const FooterLinkContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 260px;
`;