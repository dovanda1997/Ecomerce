import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../hook/useAppContext";
import { useShoppingCartContext } from "../hook/useShoppingCardContext";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";

const ProductDetail = () => {
  const { productId } = useParams();
  const { findProductId } = useAppContext();
  const { onAddItem } = useShoppingCartContext();

  const product = findProductId(productId);

  const handelAddItem = () => {
    onAddItem({ productId: product.id, quantity: 1 });
    alert(`Da them san pham ${product.title} vao gio hang`);
  };

  return (
    <Flex w={"90%"} mx={"auto"} pt={"50px"}>
      <Box p="4">
        <Image src={product.thumbnail} alt={product.title} />
      </Box>

      <Box p="4">
        <Heading pb={"20px"}> {product.title}</Heading>
        <Flex align={"center"} mt={"20px"}>
          <Box>
            <Text fontSize={"20px"} fontWeight={700}>
              Category:
            </Text>
          </Box>
          <Box pl={"10px"}>
            <Text>{product.category}</Text>
          </Box>
        </Flex>
        <Flex align={"center"} mt={"10px"}>
          <Box>
            <Text fontSize={"20px"} fontWeight={700}>
              Brand:
            </Text>
          </Box>
          <Box pl={"10px"}>
            <Text>{product.brand}</Text>
          </Box>
        </Flex>
        <Flex align={"center"} mt={"10px"}>
          <Box>
            <Text fontSize={"20px"} fontWeight={700}>
              Description:
            </Text>
          </Box>
          <Box pl={"10px"}>
            <Text>{product.description}</Text>
          </Box>
        </Flex>
        <Flex align={"center"} mt={"10px"}>
          <Box>
            <Text fontSize={"20px"} fontWeight={700}>
              Pice:
            </Text>
          </Box>
          <Box pl={"10px"}>
            <Text style={{color:"#8C0005"}}>${product.price}</Text>
          </Box>
        </Flex>
        <ButtonGroup mt={"10px"} style={{ backgroundColor: "#8C0005" }}>
          <Button onClick={handelAddItem} variant="solid">
            Add to Card
          </Button>
        </ButtonGroup>
      </Box>
    </Flex>
  );
};

export default ProductDetail;
