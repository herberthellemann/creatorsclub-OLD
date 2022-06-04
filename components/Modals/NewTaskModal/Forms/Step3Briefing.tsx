import { Box, Button, ModalBody, Text } from "@chakra-ui/react";
import NewProductModalFooter from "../NewProductModalFooter";
import updateAction from "../updateAction";
import NewProductModalHeader from "../NewProductModalHeader";
import { NewTaskContext } from "../Context/NewTaskContext";
import { useContext } from "react";

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
  const useTaskContext = useContext(NewTaskContext);
  const { task, dispatch } = useTaskContext;
  console.log(`NEW log task state from Step 3: `, task);

  return (
    <Box m={0}>
      <NewProductModalHeader
        onModalClose={onModalClose}
        resetFormStep={resetFormStep}
      />
      <ModalBody p={4}>
        <Text>Briefing</Text>
        <Text>From the context. Video length: {task.length}</Text>
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
