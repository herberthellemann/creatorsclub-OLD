import type { NextPage } from "next";

import {
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";
import { CloudDownload } from "@styled-icons/fluentui-system-filled";
import { Sidebar } from "../components/Layout/Sidebar";

const Shipping: NextPage = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Flex
      as="section"
      direction="row"
      height="100vh"
      bg="bg-canvas"
      overflowY="auto"
    >
      <Sidebar />

      <Container py="8" flex="1">
        <Stack spacing="6">
          <Stack
            spacing="4"
            direction="row"
            justify="space-between"
            align="center"
          >
            <Stack spacing="1">
              <Heading size="sm" fontWeight="medium">
                Shipping Page
              </Heading>
              <Text color="muted">All task shipments at a glance</Text>
            </Stack>
            <HStack spacing="3">
              <Button
                variant="secondary"
                leftIcon={<CloudDownload size="1.25rem" />}
              >
                Download
              </Button>
              <Button variant="primary">New Shipping</Button>
            </HStack>
          </Stack>
        </Stack>
      </Container>
    </Flex>
  );
};

export default Shipping;
