import Head from "next/head";
import { Sidebar } from "./Sidebar";
import { SidebarAlt } from "./SidebarAlt";
import { Container, Flex, Stack } from "@chakra-ui/react";

type LayoutProps = {
  fullHeight?: boolean;
  children: React.ReactNode;
};

export default function Layout({ fullHeight, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Creators Club</title>
      </Head>
      <Flex
        as="section"
        direction="row"
        height="100vh"
        width="100vw"
        bg="bg-canvas"
        overflowY="auto"
      >
        <SidebarAlt />

        <Container py="8" flex="1" width="100%">
          <Stack spacing="6" width="100%" height={fullHeight ? "100%" : "auto"}>
            {children}
          </Stack>
        </Container>
      </Flex>
    </>
  );
}
