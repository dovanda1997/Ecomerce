import React from "react";
import { useAppContext } from "../hook/useAppContext";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const ProductList = () => {
  const { products } = useAppContext();
  const limitedProducts = products && products.slice(0, 12);
  console.log(limitedProducts)

  return (
    <main>
      <Heading textAlign={"center"} mb={"20px"} style={{color:"#8C0005"}}>
        {" "}
        Product List
      </Heading>
      <div className="product-list">
        {limitedProducts.map((product) => (
          <div key={product.id}>
            <Link to={`/products/${product.id}`}>
              <div className="product-card">
                <Card maxW="sm">
                  <CardBody>
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      borderRadius="lg"
                      boxSize="400px"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading style={{color:"#8C0005"}}s textAlign={"center"} size="md">{product.title}</Heading>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup style={{ margin: "0 auto" , backgroundColor: "#8C0005"}}>
                      <Button variant="solid" >
                        Product detail
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProductList;
