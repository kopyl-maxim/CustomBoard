import styled from "styled-components";
import Box from "@mui/material/Box";

export const SliderContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
`;

export const ImgContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props: { url?: any; }) => props.url});
  background-size: cover;
  background-position: center;
`;

export const SliderLink = styled("a")`
  width: 100%;
  height: 100vh;
`;