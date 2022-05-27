// www.creatorsclub.world/products/confirmation

import type { NextPage } from "next";
import {
  Box,
  Button,
  Center,
  Stack,
  Text,
  Heading,
  VStack,
} from "@chakra-ui/react";
import Router from "next/router";

const NewProductConfirmation: NextPage = () => {
  return (
    <Center width="100vw" height="100vh" bgColor="purple.600">
      <Stack
        bgColor="purple.50"
        px="2rem"
        py="3rem"
        spacing={6}
        borderWidth="2px"
        borderColor="purple.900"
        borderRadius="0.25rem"
      >
        <Heading size="sm" fontWeight="bold">
          Product created 🥳
        </Heading>
        <VStack align="start">
          <Text>Your new product has been created successfully.</Text>
          <Text>You can now use it in a task.</Text>
        </VStack>
        <Box pt={4}>
          <Button
            variant="solid"
            colorScheme="purple"
            width="100%"
            onClick={() => Router.push("/products")}
          >
            Take me back
          </Button>
        </Box>
      </Stack>
    </Center>
  );
};

export default NewProductConfirmation;
