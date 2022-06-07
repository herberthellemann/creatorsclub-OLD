// Card component for the scene, used to build a storyboard

import {
  As,
  Badge,
  Box,
  Center,
  Divider,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  Comment,
  FastForward,
  Location,
  Options,
  Person,
  WeatherSunny,
} from "@styled-icons/fluentui-system-filled";

// TEST EXTRA PARAMETERS
type extraParameter = {
  name: string;
  value: string;
  icon: As;
};

const extraParameters: extraParameter[] = [
  { name: "model", value: "Creator", icon: Person },
  { name: "lighting", value: "Day", icon: WeatherSunny },
  { name: "location", value: "Interior", icon: Location },
  { name: "playbackSpeed", value: "1x", icon: FastForward },
];

const Scene = () => {
  return (
    <Flex
      flexDirection="row"
      alignItems="flex-start"
      overflow="hidden"
      bgColor="white"
      borderWidth="2px"
      borderColor="purple.900"
      borderRadius="1rem"
      position="relative"
      width="min-content"
      //shadow="base"
      fontSize="sm"
      m={0}
      p={0}
      pr="260px"
    >
      <Flex flexDirection="column" minWidth="375px" height="100%" gap={0}>
        <Flex flexDirection="row" width="100%" gap={0}>
          <Flex
            flexDirection="column"
            justifyContent="space-evenly"
            alignItems="center"
            borderRight="1px"
            borderColor="gray.400"
            px={3}
            py={2}
          >
            <Text color="gray.400">Scene</Text>
            <Text fontSize="large" fontWeight="medium" m={0}>
              Nr.
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="start"
            borderRight="1px"
            borderColor="gray.400"
            px={3}
            py={2}
            gap={1}
          >
            <Text color="gray.400">Type</Text>
            <Badge variant="solid" bgColor="pink.300" size="sm" px={2} py={1}>
              <Flex flexDirection="row" alignItems="center" gap={1}>
                <Text>Reference</Text>
              </Flex>
            </Badge>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="space-evenly"
            alignItems="start"
            width="100%"
            px={3}
            py={2}
            gap={1}
          >
            <Text color="gray.400">Description</Text>
            <Editable placeholder="Click to add description" width="100%">
              <EditablePreview p={0} />
              <EditableInput p={0} />
            </Editable>
          </Flex>
        </Flex>
        <Divider borderColor="purple.900" />
        <HStack minWidth="500px" height="280px">
          <Center width="100%" height="100%" bgColor="gray.100">
            <Text>IMAGE</Text>
          </Center>
        </HStack>
        <Divider borderColor="purple.900" />
        <Flex flexDirection="column" width="100%" px={3} py={2} gap={1}>
          <Flex flexDirection="row" width="100%" justifyContent="space-between">
            <Text color="gray.400">Parameters</Text>
            <Icon as={Options} boxSize={5} color="gray.400" />
          </Flex>
          <Flex flexDirection="row" gap={2}>
            {extraParameters.map((parameter) => (
              <Badge variant="outline" size="sm" px={2} py={1}>
                <Flex flexDirection="row" alignItems="center" gap={1}>
                  <Icon as={parameter.icon} boxSize={3} />
                  <Text>{parameter.value}</Text>
                </Flex>
              </Badge>
            ))}
          </Flex>
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        position="absolute"
        right={0}
        width="260px"
        height="100%"
        overflow="hidden"
        borderLeft="1px"
        borderColor="purple.900"
        px={3}
        py={2}
        gap={1}
      >
        <Flex flexDirection="row" width="100%" justifyContent="space-between">
          <Text color="gray.400">Mentions</Text>
          <Icon as={Comment} boxSize={5} color="gray.400" />
        </Flex>
        <Editable
          placeholder="Click to add mentions"
          width="100%"
          height="100%"
          pb={1}
          //colorScheme="purple"
        >
          <EditablePreview />
          <EditableTextarea resize="none" height="100%" />
        </Editable>
      </Flex>
    </Flex>
  );
};

export default Scene;
