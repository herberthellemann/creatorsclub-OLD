import {
  Box,
  Divider,
  Stack,
  Text,
  ModalFooter,
  Flex,
  HStack,
  Button,
} from "@chakra-ui/react";
import ModalStep from "../ModalStep";
import NewProductModalFooter from "../NewProductModalFooter";

type Props = {
  formStep: number;
  nextFormStep: () => void;
  prevFormStep: () => void;
  onModalClose: () => void;
  resetFormStep: () => void;
};

const TaskParameters = ({
  formStep,
  nextFormStep,
  prevFormStep,
  onModalClose,
  resetFormStep,
}: Props) => {
  return (
    <Box>
      <Stack p={4}>
        <Text>Task Parameters</Text>
      </Stack>
      <NewProductModalFooter
        formStep={formStep}
        nextFormStep={nextFormStep}
        prevFormStep={prevFormStep}
        onModalClose={onModalClose}
        resetFormStep={resetFormStep}
      />
      {/* <Divider borderColor="gray.300" />
      <ModalFooter backgroundColor="gray.50" p={4}>
        <Flex width="100%" justifyContent="space-between" alignItems="center">
          <ModalStep formStep={formStep} prevFormStep={prevFormStep} />
          <HStack spacing={0}>
            <Button variant="ghost" mr={4} onClick={onModalClose}>
              Cancel
            </Button>
            <Button variant="solid" colorScheme="purple" onClick={nextFormStep}>
              Next
            </Button>
          </HStack>
        </Flex>
      </ModalFooter> */}
    </Box>
  );
};

export default TaskParameters;
