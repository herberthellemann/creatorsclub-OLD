// Card component for the scene, used to build a storyboard

import {
  As,
  Badge,
  Box,
  Divider,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  FormLabel,
  Flex,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import {
  Comment,
  Options,
  MoviesAndTv,
} from "@styled-icons/fluentui-system-filled";
import {
  lightingOptions,
  locationOptions,
  playbackSpeedOptions,
  sceneFocusOptions,
  sceneTypeOptions,
} from "../../constants/taskParameterOptions";
import MultiSelectWithIcon from "./MultiSelectWithIcon";
import SingleSelect from "./SingleSelect";

const groupedExtraParameters = [
  { label: "Scene focus", options: sceneFocusOptions },
  { label: "Lighting", options: lightingOptions },
  { label: "Location", options: locationOptions },
  { label: "Playback speed", options: playbackSpeedOptions },
];

const SceneCardNew = () => {
  return (
    <Flex
      flexDirection="row"
      alignItems="flex-start"
      position="relative"
      width="min-content"
      fontSize="sm"
      m={0}
      p={6}
      bg="white"
      rounded="xl"
      shadow="base"
      pr="260px"
    >
      <Flex
        flexDirection="column"
        minWidth="375px"
        height="100%"
        gap={4}
        mr={6}
      >
        <Flex flexDirection="row" width="100%" gap={4}>
          <Flex flexDirection="column">
            <FormLabel m={0}>Scene</FormLabel>
            <Text mt="13px">Nr.</Text>
          </Flex>
          <Divider orientation="vertical" height="61px" />
          <Flex flexDirection="column">
            <FormLabel mb={2}>Type</FormLabel>
            <SingleSelect
              name={"sceneType"}
              placeholder={"Choose..."}
              width="115px"
              options={sceneTypeOptions}
            />
          </Flex>
          <Divider orientation="vertical" height="61px" />
          <Flex flexDirection="column" width="100%">
            <FormLabel m={0}>Description</FormLabel>
            <Editable
              mt="13px"
              width="100%"
              placeholder="👉 Click to add description"
            >
              <EditablePreview p={0} />
              <EditableInput p={0} />
            </Editable>
          </Flex>
        </Flex>
        <Box
          width="500px"
          height="280px"
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
            src="https://images.unsplash.com/photo-1597238684351-0a5648785870"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </Box>
        <Flex flexDirection="column" width="100%" borderRadius="0.5rem" gap={2}>
          <Flex flexDirection="row" gap={2}>
            <FormLabel m={0}>Additional parameters</FormLabel>
            <Icon as={Options} boxSize="5" color="gray.400" />
          </Flex>
          <Flex flexDirection="column" gap={1}>
            <MultiSelectWithIcon
              name={"sceneShot"}
              placeholder={"Additional parameters"}
              options={groupedExtraParameters}
            />
            <Text fontSize="0.75rem" color="gray.500">
              Add these parameters only if you require something very specific
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Divider orientation="vertical" height="434px" />
      <Box position="absolute" width="260px" top={0} right={0} bottom={0} p={6}>
        <Flex flexDirection="column" width="100%" height="100%">
          <Flex flexDirection="row" gap={2}>
            <FormLabel m={0}>Mentions</FormLabel>
            <Icon as={Comment} boxSize="5" color="gray.400" />
          </Flex>
          <Editable
            placeholder="👉 Click to add mentions"
            width="100%"
            height="100%"
            mt="13px"
          >
            <EditablePreview />
            <EditableTextarea resize="none" height="100%" />
          </Editable>
        </Flex>
      </Box>
    </Flex>
  );
};

export default SceneCardNew;
