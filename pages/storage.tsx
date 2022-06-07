import { Heading, Stack, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";

const Storage: NextPage = () => {
  return (
    <Layout>
      <Stack spacing={1}>
        <Heading size="sm" fontWeight="medium">
          Storage Page
        </Heading>
        <Text color="muted">All content pieces at a glance</Text>
      </Stack>
    </Layout>
  );
};

export default Storage;
