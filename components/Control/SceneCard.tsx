// Card component for the scene, used to build a storyboard

import {
  As,
  Badge,
  Box,
  Center,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  Flex,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import {
  Comment,
  FastForward,
  Location,
  Options,
  Person,
  WeatherSunny,
  MoviesAndTv,
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

const SceneCard = () => {
  return (
    <Flex
      flexDirection="row"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      width="min-content"
      fontSize="sm"
      m={0}
      p={4}
      //mx="auto"
      bg="white"
      rounded="xl"
      shadow="base"
      pr="260px"
    >
      <Flex flexDirection="column" minWidth="375px" height="100%" gap={4}>
        <Flex flexDirection="row" width="100%" gap={4}>
          <Flex
            flexDirection="column"
            justifyContent="space-evenly"
            alignItems="center"
            borderRadius="0.5rem"
            px={3}
            py={2}
            gap={2}
            bgColor="gray.100"
          >
            <Text color="gray.400">Scene</Text>
            <Text fontSize="large" fontWeight="medium" m={0}>
              Nr.
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="space-evenly"
            alignItems="start"
            borderRadius="0.5rem"
            px={3}
            py={2}
            gap={2}
            bgColor="gray.100"
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
            borderRadius="0.5rem"
            width="100%"
            px={3}
            py={2}
            gap={2}
            bgColor="gray.100"
          >
            <Text color="gray.400">Description</Text>
            <Editable placeholder="Click to add description" width="100%">
              <EditablePreview p={0} />
              <EditableInput p={0} />
            </Editable>
          </Flex>
        </Flex>
        <Box
          width="500px"
          height="280px"
          bgColor="gray.100"
          borderWidth="1px"
          borderRadius="md"
          borderColor="gray.300"
          overflow="hidden"
        >
          <Badge
            position="absolute"
            variant="solid"
            size="sm"
            m={4}
            px={2}
            py={1}
          >
            <Flex flexDirection="row" alignItems="center" gap={1}>
              <Icon as={MoviesAndTv} boxSize="3" />
              <Text>Choose shot</Text>
            </Flex>
          </Badge>
          <Image
            src="https://images.unsplash.com/photo-1652538302725-0ee98032dcad"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </Box>
        <Flex
          flexDirection="column"
          width="100%"
          borderRadius="0.5rem"
          px={3}
          pt={2}
          pb={3}
          gap={2}
          bgColor="gray.100"
        >
          <Flex flexDirection="row" width="100%" justifyContent="space-between">
            <Text color="gray.400">Parameters</Text>
            <Icon as={Options} boxSize="5" color="gray.400" />
          </Flex>
          <Flex flexDirection="row" gap={2}>
            {extraParameters.map((parameter) => (
              <Badge variant="solid" size="sm" px={2} py={1}>
                <Flex flexDirection="row" alignItems="center" gap={1}>
                  <Icon as={parameter.icon} boxSize="3" />
                  <Text>{parameter.value}</Text>
                </Flex>
              </Badge>
            ))}
          </Flex>
        </Flex>
      </Flex>
      <Box position="absolute" width="260px" top={0} right={0} bottom={0} p={4}>
        <Flex
          flexDirection="column"
          width="100%"
          height="100%"
          overflow="hidden"
          borderRadius="0.5rem"
          bgColor="gray.100"
          px={3}
          py={2}
          gap={1}
        >
          <Flex flexDirection="row" width="100%" justifyContent="space-between">
            <Text color="gray.400">Mentions</Text>
            <Icon as={Comment} boxSize="5" color="gray.400" />
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
      </Box>
    </Flex>
  );
};

export default SceneCard;
