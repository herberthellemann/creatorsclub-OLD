import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";

const Card = (props: BoxProps) => (
  <Box
    mx="auto"
    bg={useColorModeValue("white", "gray.700")}
    overflow="hidden"
    rounded="xl"
    padding={10}
    shadow="base"
    px={8}
    {...props}
  />
);

export default Card;
