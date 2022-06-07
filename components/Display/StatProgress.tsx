import {
  Box,
  Heading,
  Progress,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

interface Props {
  label: string;
  value: number;
  limit: number;
}
export const StatProgress = (props: Props) => {
  const { label, value, limit, ...boxProps } = props;
  return (
    <Box
      bg="bg-surface"
      boxShadow={useColorModeValue("sm", "sm-dark")}
      {...boxProps}
    >
      <Box px={4} py={5}>
        <Stack>
          <Text fontSize="sm" color="muted">
            {label}
          </Text>
          <Stack direction="row" align="baseline">
            <Heading size={useBreakpointValue({ base: "sm", md: "md" })}>
              {value}
            </Heading>
            <Text aria-hidden fontWeight="semibold" color="muted">
              / {limit}
            </Text>
            <Box srOnly>out of {limit}</Box>
          </Stack>
        </Stack>
      </Box>
      <Progress
        value={(value / limit) * 100}
        size="xs"
        borderRadius="none"
        bg="bg-surface"
      />
    </Box>
  );
};
