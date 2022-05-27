import {
  Avatar,
  Badge,
  Box,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  Square,
  Table,
  TableProps,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {
  ArrowDown,
  ArrowCircleRight,
  LinkSquare,
} from "@styled-icons/fluentui-system-filled";
import { ProductType } from "../../constants/productType";
import Router from "next/router";

interface ProductTableProps extends TableProps {
  products: ProductType[];
}

const ProductTable = (props: ProductTableProps) => {
  const { products } = props;

  return (
    <Table {...props} width="100%">
      <Thead width="100%">
        <Tr width="100%">
          <Th>
            <HStack spacing="3">
              <HStack spacing="1">
                <Text>Product</Text>
                {/* <Icon as={ArrowDown} color="muted" boxSize="4" /> */}
              </HStack>
            </HStack>
          </Th>
          <Th>Type</Th>
          <Th>Description</Th>
          <Th isNumeric>Value</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody width="100%">
        {products.map((product) => (
          <Tr
            key={product.id}
            width="100%"
            _hover={{
              background: "purple.50",
            }}
          >
            <Td>
              <HStack spacing="3">
                <Square
                  borderWidth="1px"
                  borderRadius="md"
                  borderColor="gray.300"
                  overflow="hidden"
                >
                  <Image
                    src={product.imageUrl}
                    boxSize="10"
                    objectFit="cover"
                  />
                </Square>
                <Box>
                  <Text fontWeight="medium">{product.name}</Text>
                  <Text color="muted">
                    <Link href={product.productPage} isExternal>
                      <HStack spacing={1}>
                        <LinkSquare size="1rem" />
                        <Text color="muted">Public page</Text>
                      </HStack>
                    </Link>
                  </Text>
                </Box>
              </HStack>
            </Td>
            <Td>
              <Badge
                size="sm"
                colorScheme={product.type === "Physical" ? "green" : "pink"}
              >
                {product.type}
              </Badge>
            </Td>
            <Td maxWidth="1px" width="100%">
              <Text color="muted" overflow="hidden" textOverflow="ellipsis">
                {product.description}
              </Text>
            </Td>
            <Td isNumeric>
              <Text color="muted">
                {(Math.round(product.value * 100) / 100).toFixed(2)} €
              </Text>
            </Td>
            <Td>
              <HStack spacing="1">
                <IconButton
                  icon={<ArrowCircleRight size="1.5rem" />}
                  variant="ghost"
                  aria-label="Open product"
                  onClick={() => openSingleProduct(product.id)}
                />
              </HStack>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

function openSingleProduct(id: string) {
  const route: string = "products/" + id;
  Router.push(route);
}

export default ProductTable;
