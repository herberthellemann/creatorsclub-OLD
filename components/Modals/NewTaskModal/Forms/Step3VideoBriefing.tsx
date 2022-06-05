import { Box, Button, ModalBody, Text } from "@chakra-ui/react";
import NewProductModalFooter from "../NewProductModalFooter";
import NewProductModalHeader from "../NewProductModalHeader";
import { NewVideoTaskContext } from "../Context/NewVideoTaskContext";
import { useContext } from "react";

type Props = {
  taskType: string;
  formStep: number;
  nextFormStep: () => void;
  prevFormStep: () => void;
  onModalClose: () => void;
  resetFormStep: () => void;
};

const Step3VideoBriefing = ({
  taskType,
  formStep,
  nextFormStep,
  prevFormStep,
  onModalClose,
  resetFormStep,
}: Props) => {
  const useTaskContext = useContext(NewVideoTaskContext);
  const { videoTask, dispatch } = useTaskContext;
  console.log(`NEW log task state from Step 3: `, videoTask);

  return (
    <Box m={0}>
      <NewProductModalHeader
        onModalClose={onModalClose}
        resetFormStep={resetFormStep}
        contentType={taskType}
      />
      <ModalBody p={4}>
        <Text>Briefing</Text>
        <Text>From the context. Video length: {videoTask.length}</Text>
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

export default Step3VideoBriefing;
