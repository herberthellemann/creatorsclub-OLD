import { Box, Button, ModalBody, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { NewPhotoTaskContext } from "../../Context/NewPhotoTaskContext";
import NewProductModalFooter from "../../NewProductModalFooter";
import NewProductModalHeader from "../../NewProductModalHeader";

type Props = {
  taskType: string;
  formStep: number;
  nextFormStep: () => void;
  prevFormStep: () => void;
  onModalClose: () => void;
  resetFormStep: () => void;
};

const Step5PhotoSummaryAndSubmission = ({
  taskType,
  formStep,
  nextFormStep,
  prevFormStep,
  onModalClose,
  resetFormStep,
}: Props) => {
  const useTaskContext = useContext(NewPhotoTaskContext);
  const { photoTask, dispatch } = useTaskContext;
  console.log(`NEW log task state from Step5: `, photoTask);

  return (
    <Box m={0}>
      <NewProductModalHeader
        onModalClose={onModalClose}
        resetFormStep={resetFormStep}
        contentType={taskType}
      />
      <ModalBody p={4}>
        <Text>Reward and Creator Criteria</Text>
      </ModalBody>
      <NewProductModalFooter
        formStep={formStep}
        prevFormStep={prevFormStep}
        onModalClose={onModalClose}
        resetFormStep={resetFormStep}
        children={
          <Button type="submit" colorScheme="purple">
            Next
          </Button>
        }
      />
    </Box>
  );
};

export default Step5PhotoSummaryAndSubmission;
