import { Heading, Stack, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../../components/Layout/Layout";

const Tasks: NextPage = () => {
  return (
    <Layout>
      <Stack spacing="1">
        <Heading size="sm" fontWeight="medium">
          Settings Page
        </Heading>
        <Text color="muted">All settings at a glance</Text>
      </Stack>
    </Layout>
  );
};

export default Tasks;
