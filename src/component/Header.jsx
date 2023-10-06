import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsTelephoneFill } from "react-icons/bs";

const Header = () => {
  return (
    <Flex justify={"space-around"} bg={"antiquewhite"}>
      <Box>
        <Flex>
          <BsTelephoneFill></BsTelephoneFill>(704) 555-0127
        </Flex>
      </Box>
      <Box>
        <Text> Get 50% Off on Selected Items | Shop Now</Text>
      </Box>
      <Box> Eng | Location</Box>
    </Flex>
  );
};

export default Header;
