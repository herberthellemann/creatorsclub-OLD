import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  ModalFooter,
  Stack,
  Text,
} from "@chakra-ui/react";
import ModalStep from "../ModalStep";

type Props = {
  formStep: number;
  nextFormStep: () => void;
  prevFormStep: () => void;
  onModalClose: () => void;
  resetFormStep: () => void;
};

const Briefing = ({
  formStep,
  nextFormStep,
  prevFormStep,
  onModalClose,
  resetFormStep,
}: Props) => {
  const resetForm = () => {
    resetFormStep();
    onModalClose();
  };

  return (
    <Box m={0}>
      <Stack p={4}>
        <Text>Briefing</Text>
      </Stack>
      {/* <NewProductModalFooter
        formStep={formStep}
        nextFormStep={nextFormStep}
        prevFormStep={prevFormStep}
        onModalClose={onModalClose}
        resetFormStep={resetFormStep}
      /> */}
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

export default Briefing;
