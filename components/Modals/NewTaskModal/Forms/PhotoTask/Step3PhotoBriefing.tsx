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

export default Step3PhotoBriefing;
