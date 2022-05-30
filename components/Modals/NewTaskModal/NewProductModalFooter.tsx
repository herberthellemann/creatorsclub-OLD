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
import ModalStep from "./ModalStep";

type Props = {
  formStep: number;
  nextFormStep: () => void;
  prevFormStep: () => void;
  onModalClose: () => void;
  resetFormStep: () => void;
};

const NewProductModalFooter = ({
  formStep,
  nextFormStep,
  prevFormStep,
  onModalClose,
  resetFormStep,
}: Props) => {
  // Reset form

  const resetForm = () => {
    resetFormStep();
    onModalClose();
  };
  return (
    <Box>
      <Divider borderColor="gray.300" />
      <ModalFooter backgroundColor="gray.50" p={4}>
        <Flex width="100%" justifyContent="space-between" alignItems="center">
          <ModalStep formStep={formStep} prevFormStep={prevFormStep} />
          <HStack spacing={0}>
            <Button variant="ghost" mr={4} onClick={resetForm}>
              Cancel
            </Button>
            <Button variant="solid" colorScheme="purple" onClick={nextFormStep}>
              Next
            </Button>
          </HStack>
        </Flex>
      </ModalFooter>
    </Box>
  );
};

export default NewProductModalFooter;
