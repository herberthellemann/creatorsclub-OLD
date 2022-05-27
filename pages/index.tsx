import { Stack, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import { StatIcon } from "../components/Display/StatIcon";
import {
  TaskListSquareLtr,
  Video,
  RibbonStar,
} from "@styled-icons/fluentui-system-filled";

const stats = [
  {
    icon: TaskListSquareLtr,
    label: "Total Tasks",
    value: "5",
  },
  {
    icon: Video,
    label: "Content received",
    value: "20",
  },
  {
    icon: RibbonStar,
    label: "Credits remaining",
    value: "270",
  },
];

const Home: NextPage = () => {
  return (
    <Layout>
      <Stack spacing="1">
        <Heading size="sm" fontWeight="medium">
          Home Page
        </Heading>
        <Text color="muted">Your dashboard at a glance</Text>
      </Stack>
      <SimpleGrid columns={3} gap="6">
        {stats.map((stat, id) => (
          <StatIcon key={id} {...stat} />
        ))}
      </SimpleGrid>
    </Layout>
  );
};

export default Home;
