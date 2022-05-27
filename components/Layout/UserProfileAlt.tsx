import { Avatar, Box, HStack, Text } from "@chakra-ui/react";

interface UserProfileProps {
  name: string;
  image: string;
  email: string;
}

export const UserProfileAlt = (props: UserProfileProps) => {
  const { name, image, email } = props;

  return (
    <HStack spacing="10px">
      <Avatar
        name={name}
        src={image}
        boxSize="10"
        borderWidth="1px"
        borderColor="on-accent"
      />
      <Box>
        <Text color="on-accent" fontWeight="medium" fontSize="sm">
          {name}
        </Text>
        <Text color="on-accent-muted" fontSize="sm">
          {email}
        </Text>
      </Box>
    </HStack>
  );
};
