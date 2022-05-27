import {
  As,
  Box,
  Heading,
  HStack,
  Icon,
  Square,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { MoreVertical } from "@styled-icons/fluentui-system-filled";

interface Props {
  icon: As;
  label: string;
  value: string;
}
export const StatIcon = (props: Props) => {
  const { label, value, icon, ...boxProps } = props;
  return (
    <Box
      px="6"
      py="6"
      bg="bg-surface"
      borderRadius="lg"
      boxShadow={useColorModeValue("sm", "sm-dark")}
      {...boxProps}
    >
      <Stack spacing="6">
        <Stack direction="row" justify="space-between">
          <HStack spacing="4">
            <Square size="12" bg="bg-accent-subtle" borderRadius="md">
              <Icon as={icon} boxSize="6" color="on-accent" />
            </Square>
            <Text fontWeight="medium">{label}</Text>
          </HStack>
          <Icon as={MoreVertical} boxSize="5" color="muted" />
        </Stack>
        <Stack spacing="4">
          <Heading size="md">{value}</Heading>
        </Stack>
      </Stack>
    </Box>
  );
};
