import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      pl={"80px"}
      pr={"80px"}
      pt={"20px"}
      pb={"20px"}
    >
      <Box>
        <Heading style={{ color: "#8C0005" }}>
          <NavLink to={"/"}>Logo</NavLink>
        </Heading>
      </Box>
      <Spacer />
      <Box p="2">
        <Flex>
          <Box pr={"80px"}>
            <Heading fontSize={"16px"} style={{ color: "#8C0005" }}>
              <NavLink to={"/"}>HomePage</NavLink>
            </Heading>
          </Box>
          <Box pr={"80px"}>
            <Heading fontSize={"16px"} style={{ color: "#8C0005" }}>
              {" "}
              <NavLink to={"/about"}>About</NavLink>
            </Heading>
          </Box>
          <Box pr={"80px"}>
            <Heading fontSize={"16px"} style={{ color: "#8C0005" }}>
              <NavLink to={"/products"}>Product</NavLink>
            </Heading>
          </Box>
        </Flex>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button style={{ backgroundColor: "#8C0005" }}>
          <NavLink to={"/login"}>Login</NavLink>
        </Button>
        <Button style={{ backgroundColor: "#8C0005" }}>
          <NavLink to={"/sign-up"}>SignUp</NavLink>
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Navigation;
