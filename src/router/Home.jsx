import { Box, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <>
      <div className="baner"></div>

      <Box w={"90%"} mx={"auto"}>
        <Heading pt={"50px"}> Shop Our Top Categories</Heading>
        <Flex p={"50px"}>
          <Box
            w={"200px"}
            h={"250px"}
            p="4"
            borderRadius={"20px"}
            style={{ backgroundColor: "#8C0005" }}
            // bgImage="url('/assets/bag1.png')"
          >
            <Text fontSize={"24px"} fontWeight={700}>
              Laptop
            </Text>
            <Image src="/assets/bag1.png" />
          </Box>
          <Spacer />
          <Box
            p="4"
            w={"200px"}
            style={{ backgroundColor: "#8C0005" }}
            borderRadius={"20px"}
          >
            <Text fontSize={"24px"} fontWeight={700}>
              Ipad
            </Text>
            <Image src="/assets/bag1.png" />
          </Box>
          <Spacer />
          <Box
            p="4"
            w={"200px"}
            style={{ backgroundColor: "#8C0005" }}
            borderRadius={"20px"}
          >
            <Text fontSize={"24px"} fontWeight={700}>
              Phone
            </Text>
            <Image src="/assets/bag1.png" />
          </Box>
          <Spacer />
          <Box
            p="4"
            w={"200px"}
            style={{ backgroundColor: "#8C0005" }}
            borderRadius={"20px"}
          >
            <Text fontSize={"24px"} fontWeight={700}>
              Beautif
            </Text>
            <Image src="/assets/bag1.png" />
          </Box>
          <Spacer />
          <Box
            p="4"
            w={"200px"}
            style={{ backgroundColor: "#8C0005" }}
            borderRadius={"20px"}
          >
            <Text fontSize={"24px"} fontWeight={700}>
              Game
            </Text>
            <Image src="/assets/bag1.png" />
          </Box>
          <Spacer />
          <Box
            p="4"
            w={"200px"}
            style={{ backgroundColor: "#8C0005" }}
            borderRadius={"20px"}
          >
            <Text fontSize={"24px"} fontWeight={700}>
              Water
            </Text>
            <Image src="/assets/bag1.png" />
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default Home