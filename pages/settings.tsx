import { Button, Heading, Stack, Text, Flex, HStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

const Settings: NextPage = () => {
  const router = useRouter();
  /*   const handleLogout = () => {
    const redirectUrl = `${window.location.origin}/auth/signin`;
    console.log(redirectUrl);
    signOut({ callbackUrl: redirectUrl });
    //router.push("/auth/signin");
  }; */

  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
    router.push("/api/auth/signin");
  };

  return (
    <Layout fullHeight={true}>
      <Stack spacing="1">
        <Heading size="sm" fontWeight="medium">
          Settings Page
        </Heading>
        <Text color="muted">All settings at a glance</Text>
      </Stack>
      <Flex justifyContent="space-between" direction="column" height="100%">
        <Stack spacing={4}>
          <Text>Setting 1</Text>
          <Text>Setting 2</Text>
          <Text>Setting 2</Text>
        </Stack>
        <Stack spacing={4}>
          <Heading size="xs">Actions</Heading>
          <HStack>
            <Button width="auto" onClick={handleLogout}>
              Log out
            </Button>
          </HStack>
        </Stack>
      </Flex>
    </Layout>
  );
};

export default Settings;
