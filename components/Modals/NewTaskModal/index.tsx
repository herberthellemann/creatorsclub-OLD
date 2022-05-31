// New task modal => includes the smart storyboard builder

import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Add } from "@styled-icons/fluentui-system-filled";
import { useState } from "react";
import {
  TaskTypeSelection,
  TaskParameters,
  Briefing,
  RewardAndCreatorCriteria,
} from "./Forms";

const NewTaskModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formStep, setFormStep] = useState(0);
  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);
  const resetFormStep = () => setFormStep(0);

  return (
    <>
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
        <ModalContent borderWidth={4} minWidth="800px" borderColor="purple.900">
          <ModalHeader p={4} backgroundColor="gray.50" alignContent="end">
            New Content Task 🙌
            <ModalCloseButton
              onClick={() => {
                resetFormStep();
                onClose();
              }}
              top="12px"
            />
          </ModalHeader>
          <Divider borderColor="gray.300" />
          <ModalBody p={0}>
            {formStep == 0 && (
              <TaskTypeSelection
                formStep={formStep}
                nextFormStep={nextFormStep}
                prevFormStep={prevFormStep}
                onModalClose={onClose}
                resetFormStep={resetFormStep}
              />
            )}
            {formStep == 1 && (
              <TaskParameters
                formStep={formStep}
                nextFormStep={nextFormStep}
                prevFormStep={prevFormStep}
                onModalClose={onClose}
                resetFormStep={resetFormStep}
              />
            )}
            {formStep == 2 && (
              <Briefing
                formStep={formStep}
                nextFormStep={nextFormStep}
                prevFormStep={prevFormStep}
                onModalClose={onClose}
                resetFormStep={resetFormStep}
              />
            )}
            {formStep == 3 && (
              <RewardAndCreatorCriteria
                formStep={formStep}
                nextFormStep={nextFormStep}
                prevFormStep={prevFormStep}
                onModalClose={onClose}
                resetFormStep={resetFormStep}
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewTaskModal;
