// app.creatorsclub.world/products

import type { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";
import { prisma } from "../../lib/prisma";
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import { ProductType } from "../../constants/productType";
import ProductTable from "../../components/Display/ProductTable";
import NewProductModal from "../../components/Modals/NewProductModal";
import { Search } from "@styled-icons/fluentui-system-filled";

type Props = {
  products: ProductType[];
};

const Products = (props: Props) => {
  console.log(`product props:`, props.products);

  return (
    <Layout>
      <Stack spacing="4" direction="row" justify="space-between" align="center">
        <Stack spacing="1">
          <Heading size="sm" fontWeight="medium">
            Products Page
          </Heading>
          <Text color="muted">All products at a glance</Text>
        </Stack>
        <HStack spacing="3">
          <NewProductModal />
        </HStack>
      </Stack>
      <Box
        width="100%"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
        borderRadius="lg"
      >
        <Stack spacing="5" width="100%">
          <Box px="6" pt="5">
            <Stack direction="row" justify="space-between">
              <Text fontSize="lg" fontWeight="medium">
                Products
              </Text>
              {/* <InputGroup maxW="xs">
                <InputLeftElement pointerEvents="none">
                  <Icon as={Search} color="muted" boxSize="5" />
                </InputLeftElement>
                <Input placeholder="Search" />
              </InputGroup> */}
            </Stack>
          </Box>
          <Box overflowX="auto" width="100%">
            <ProductTable products={props.products} />
          </Box>
          <Box px="6" pb="5">
            <HStack spacing="3" justify="space-between">
              <Text color="muted" fontSize="sm">
                Showing {props.products.length} results
              </Text>
              {/* <ButtonGroup
                spacing="3"
                justifyContent="space-between"
                width="auto"
                variant="secondary"
              >
                <Button>Previous</Button>
                <Button>Next</Button>
              </ButtonGroup> */}
            </HStack>
          </Box>
        </Stack>
      </Box>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });

  if (!session) {
    res.statusCode = 403;
    console.log("No session. Product props unavailable");
    return { props: { products: [] } };
  }

  // Fetch the brand from the user
  const user = await prisma.user.findUnique({
    where: {
      email: session.user!.email!,
    },
    include: {
      brand: true,
    },
  });

  // Fetch all products from the user's brand
  const brandProducts = await prisma.product.findMany({
    where: {
      brand: {
        name: user?.brand?.name,
      },
    },
  });

  // For some reason we need to stringify and parse before returning
  const products = JSON.parse(JSON.stringify(brandProducts));
  return { props: { products } };
};

export default Products;
