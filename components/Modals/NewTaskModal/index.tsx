// New task modal => includes the smart storyboard builder

import {
  Box,
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Add } from "@styled-icons/fluentui-system-filled";
import { useState } from "react";
import {
  Step1TaskTypeSelection,
  Step2TaskParameters,
  Step3Briefing,
  Step4RewardAndCreatorCriteria,
} from "./Forms";
import { NewTaskContextProvider } from "./Context/NewTaskContext";

const NewTaskModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formStep, setFormStep] = useState(0);
  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);
  const resetFormStep = () => setFormStep(0);

  const modalWidth = () => {
    switch (formStep) {
      case 0:
        return "520";
      case 1:
        return "800px";
      default:
        return "600px";
    }
  };

  return (
    <>
      <NewTaskContextProvider>
        <Button
          colorScheme="purple"
          onClick={onOpen}
          leftIcon={<Add size="1rem" />}
        >
          New Task
        </Button>

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          closeOnOverlayClick={false}
          isCentered
        >
          <ModalOverlay background="purple.600" />
          <ModalContent
            borderWidth={4}
            minWidth={modalWidth()}
            borderColor="purple.900"
          >
            <Box>
              {formStep == 0 && (
                <Step1TaskTypeSelection
                  formStep={formStep}
                  nextFormStep={nextFormStep}
                  prevFormStep={prevFormStep}
                  onModalClose={onClose}
                  resetFormStep={resetFormStep}
                />
              )}
              {formStep == 1 && (
                <Step2TaskParameters
                  formStep={formStep}
                  nextFormStep={nextFormStep}
                  prevFormStep={prevFormStep}
                  onModalClose={onClose}
                  resetFormStep={resetFormStep}
                />
              )}
              {formStep == 2 && (
                <Step3Briefing
                  formStep={formStep}
                  nextFormStep={nextFormStep}
                  prevFormStep={prevFormStep}
                  onModalClose={onClose}
                  resetFormStep={resetFormStep}
                />
              )}
              {formStep == 3 && (
                <Step4RewardAndCreatorCriteria
                  formStep={formStep}
                  nextFormStep={nextFormStep}
                  prevFormStep={prevFormStep}
                  onModalClose={onClose}
                  resetFormStep={resetFormStep}
                />
              )}
            </Box>
          </ModalContent>
        </Modal>
      </NewTaskContextProvider>
    </>
  );
};

export default NewTaskModal;
