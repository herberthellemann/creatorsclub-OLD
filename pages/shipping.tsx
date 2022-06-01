import { Heading, Stack, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";

const Shipping: NextPage = () => {
  return (
    <Layout>
      <Stack spacing="1">
        <Heading size="sm" fontWeight="medium">
          Shipping Page
        </Heading>
        <Text color="muted">All task shipments pieces at a glance</Text>
      </Stack>
    </Layout>
  );
};

export default Shipping;
