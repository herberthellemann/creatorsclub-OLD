import { Box, Button, ModalBody, Text } from "@chakra-ui/react";
import NewProductModalFooter from "../../NewProductModalFooter";
import NewProductModalHeader from "../../NewProductModalHeader";
import { NewPhotoTaskContext } from "../../Context/NewPhotoTaskContext";
import { useContext } from "react";

type Props = {
  taskType: string;
  formStep: number;
  nextFormStep: () => void;
  prevFormStep: () => void;
  onModalClose: () => void;
  resetFormStep: () => void;
};

const Step3PhotoBriefing = ({
  taskType,
  formStep,
  nextFormStep,
  prevFormStep,
  onModalClose,
  resetFormStep,
}: Props) => {
  const useTaskContext = useContext(NewPhotoTaskContext);
  const { photoTask, dispatch } = useTaskContext;

  return (
    <Box m={0}>
      <NewProductModalHeader
        onModalClose={onModalClose}
        resetFormStep={resetFormStep}
        contentType={taskType}
      />
      <ModalBody p={4}>
        <Text>Briefing</Text>
        <Text>TBD</Text>
      </ModalBody>
      <NewProductModalFooter
        formStep={formStep}
        prevFormStep={prevFormStep}
        onModalClose={onModalClose}
        resetFormStep={resetFormStep}
      >
        <Button type="submit" colorScheme="purple" onClick={nextFormStep}>
          Next
        </Button>
      </NewProductModalFooter>
    </Box>
  );
};

export default Step3PhotoBriefing;
