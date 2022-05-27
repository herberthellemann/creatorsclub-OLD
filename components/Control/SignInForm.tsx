import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BuiltInProviderType } from "next-auth/providers";
import { LiteralUnion, ClientSafeProvider, signIn } from "next-auth/react";

type Props = {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >;
  csrfToken: string;
  //stackProps: StackProps;
};

export const SignInForm = (props: Props) => {
  return (
    <Stack spacing="8">
      <Stack spacing="6">
        <Stack spacing="3" textAlign="center">
          <Heading size="sm">Log in to your account</Heading>
        </Stack>
      </Stack>
      <Stack spacing="6">
        <form method="post" action="/api/auth/signin/email">
          <Stack spacing="6">
            <Stack spacing="4">
              <FormControl>
                <Input
                  id="csrfToken"
                  name="csrfToken"
                  type="hidden"
                  defaultValue={props.csrfToken}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  width="400px"
                />
              </FormControl>
            </Stack>
            <Stack spacing="4">
              <Button type="submit" variant="primary" width="100%">
                Sign in with with magic link
              </Button>
              {Object.values(props.providers).map((provider) => {
                if (provider.id !== "email") {
                  return (
                    <div key={provider.name}>
                      <Button
                        variant="primary"
                        width="100%"
                        onClick={() => signIn(provider.id)}
                      >
                        Sign in with {provider.name}
                      </Button>
                    </div>
                  );
                }
              })}
            </Stack>
          </Stack>
        </form>
        <HStack spacing="1" justify="center">
          <Text color="muted">Don't have an account?</Text>
          <Button
            as="a"
            href="mailto:hello@creatorsclub.world"
            variant="link"
            colorScheme="purple"
          >
            Contact us
          </Button>
        </HStack>
      </Stack>
    </Stack>
  );
};
