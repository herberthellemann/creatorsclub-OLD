// www.creatorsclub.world/auth/verify-request

import type { NextPage } from "next";
import { Center, Stack, Text, Heading, VStack } from "@chakra-ui/react";

const CheckMagicLink: NextPage = () => {
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
          Check your email ✉️
        </Heading>
        <VStack align="start">
          <Text>A magic link has been sent to your email address.</Text>
          <Text>Click on on it to open the app.</Text>
        </VStack>
      </Stack>
    </Center>
  );
};

export default CheckMagicLink;
