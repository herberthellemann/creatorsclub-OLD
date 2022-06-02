import { Box, Button, ModalBody, Text } from "@chakra-ui/react";
import NewProductModalFooter from "../NewProductModalFooter";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";
import NewProductModalHeader from "../NewProductModalHeader";

type Props = {
  formStep: number;
  nextFormStep: () => void;
  prevFormStep: () => void;
  onModalClose: () => void;
  resetFormStep: () => void;
};

const Step3Briefing = ({
  formStep,
  nextFormStep,
  prevFormStep,
  onModalClose,
  resetFormStep,
}: Props) => {
  const { state } = useStateMachine({ updateAction });
  console.log(JSON.stringify(state, null, 2));

  return (
    <Box m={0}>
      <NewProductModalHeader
        onModalClose={onModalClose}
        resetFormStep={resetFormStep}
      />
      <ModalBody p={4}>
        <Text>Briefing</Text>
      </ModalBody>
      <NewProductModalFooter
        formStep={formStep}
        prevFormStep={prevFormStep}
        onModalClose={onModalClose}
        resetFormStep={resetFormStep}
        children={
          <Button
            type="submit"
            colorScheme="purple"
            //Remove this line when including the form, as React Hook Form handles this
            onClick={nextFormStep}
          >
            Next
          </Button>
        }
      />
    </Box>
  );
};

export default Step3Briefing;
