import { getProviders, getCsrfToken, useSession } from "next-auth/react";
import { Box, Center, Flex } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { SignInForm } from "../../components/Control/SignInForm";
import { LogoIconDark } from "../../assets/LogoIconDark";

const SignIn = ({ providers, csrfToken }: any) => {
  const { data: session, status } = useSession();
  console.log(`session`, session);

  return (
    <Flex width="100vw" height="100vh">
      <Box flex="4" width="100%" height="100%" position="relative">
        <LogoIconDark
          position="absolute"
          top="120px"
          left="50%"
          transform="translate(-50%, -50%)"
        />
        <Center width="100%" height="100%">
          <SignInForm providers={providers} csrfToken={csrfToken} />
        </Center>
      </Box>
      <Box flex="6" bgColor="purple.600"></Box>
    </Flex>
  );
};

export default SignIn;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);

  return {
    props: {
      providers,
      csrfToken,
    },
  };
};
