// www.creatorsclub.world/tasks

import { Heading, HStack, Stack, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../../components/Layout/Layout";
import NewTaskModal from "../../components/Modals/NewTaskModal";

const Tasks: NextPage = () => {
  return (
    <Layout>
      <Stack spacing="4" direction="row" justify="space-between" align="center">
        <Stack spacing="1">
          <Heading size="sm" fontWeight="medium">
            Tasks Page
          </Heading>
          <Text color="muted">All tasks at a glance</Text>
        </Stack>
        <HStack spacing="3">
          <NewTaskModal buttonVariant="solid" />
        </HStack>
      </Stack>
    </Layout>
  );
};

export default Tasks;
