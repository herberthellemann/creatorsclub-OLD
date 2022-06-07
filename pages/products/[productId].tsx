// app.creatorsclub.world/products

import type { GetServerSideProps } from "next";
import { prisma } from "../../lib/prisma";
import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  Square,
  Stack,
  Text,
} from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import { ProductType } from "../../constants/productType";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
  ArrowLeft,
  Delete,
  LinkSquare,
} from "@styled-icons/fluentui-system-filled";
import Card from "../../components/Display/Card";

type Props = {
  product: ProductType;
};

const SingleProduct = (props: Props) => {
  const { data: session } = useSession();
  const router = useRouter();

  // CRUD METHODS
  async function deleteProduct(id: string): Promise<void> {
    await fetch(`/api/product/${id}`, {
      method: "DELETE",
    });
    router.push("/products");
  }

  return (
    <Layout>
      <Stack spacing={4} direction="row" justify="space-between" align="center">
        <Stack spacing={1}>
          <HStack spacing={1}>
            <IconButton
              icon={<ArrowLeft size="1.5rem" />}
              variant="ghost"
              aria-label="Open product"
              onClick={() => router.back()}
            />
            <Heading size="sm" fontWeight="medium">
              {props.product.name}
            </Heading>
          </HStack>
          <Text color="muted" pl="45px">
            Product detail page
          </Text>
        </Stack>
      </Stack>
      <Card maxW="3xl">
        <Stack direction="row" spacing="10" align="flex-start">
          <Stack spacing={4}>
            <Square
              borderWidth="1px"
              borderRadius="md"
              borderColor="gray.300"
              overflow="hidden"
            >
              <Image
                src={props.product.imageUrl}
                boxSize="200px"
                objectFit="cover"
              />
            </Square>
          </Stack>
          <Box>
            <Stack spacing={1}>
              <Text as="h2" fontWeight="bold" fontSize="xl">
                Product details
              </Text>
              <Box maxWidth="46ch" noOfLines={3} height="72px">
                {props.product.description}
              </Box>
              <Box fontSize="md">
                <HStack mt={6} spacing={10}>
                  <Stack>
                    <Text as="h3" fontWeight="semibold">
                      Type
                    </Text>
                    <Badge
                      size="sm"
                      colorScheme={
                        props.product.type === "Physical" ? "green" : "pink"
                      }
                    >
                      {props.product.type}
                    </Badge>
                  </Stack>
                  <Stack>
                    <Text as="h3" fontWeight="semibold">
                      Value
                    </Text>
                    <Text>
                      {(Math.round(props.product.value * 100) / 100).toFixed(2)}{" "}
                      €
                    </Text>
                  </Stack>
                  <Stack>
                    <Text as="h3" fontWeight="semibold">
                      Product page
                    </Text>
                    <Link
                      href={props.product.productPage}
                      color="purple.400"
                      isExternal
                    >
                      <HStack spacing={1}>
                        <LinkSquare size="1rem" />
                        <Text>Public page</Text>
                      </HStack>
                    </Link>
                  </Stack>
                </HStack>
              </Box>
            </Stack>
          </Box>
        </Stack>
        <Stack spacing={4} mt={8}>
          <Text as="h2" fontWeight="bold" fontSize="xl">
            Actions
          </Text>
          <HStack>
            <Button
              leftIcon={<Delete size="1rem" />}
              colorScheme="purple"
              variant="solid"
              onClick={() => deleteProduct(props.product.id)}
            >
              Delete
            </Button>
          </HStack>
        </Stack>
      </Card>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // Find the unique product from the open URL
  const singleProduct = await prisma.product.findUnique({
    where: {
      id: String(params?.productId),
    },
  });

  // For some reason we need to stringify and parse before returning
  const product = JSON.parse(JSON.stringify(singleProduct));
  return {
    props: { product, id: params?.productId },
  };
};

export default SingleProduct;
