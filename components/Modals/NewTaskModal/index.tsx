// New task modal => includes the smart storyboard builder

import {
  Button,
  Divider,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { Add } from "@styled-icons/fluentui-system-filled";
import { useState } from "react";
import ModalStep from "./ModalStep";
import { TaskParameters, Briefing, RewardAndCreatorCriteria } from "./Forms";

const NewTaskModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formStep, setFormStep] = useState(1);
  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);
  const resetFormStep = () => setFormStep(1);

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
        <ModalContent borderWidth={4} minWidth="640px" borderColor="purple.900">
          <ModalHeader p={4} backgroundColor="gray.50" alignContent="end">
            Create New Task 🙌
            <ModalCloseButton top="12px" />
          </ModalHeader>
          <Divider borderColor="gray.300" />
          <ModalBody p={0}>
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
          {/* <Divider borderColor="gray.300" />
          <ModalFooter backgroundColor="gray.50" p={4}>
            <Flex
              width="100%"
              justifyContent="space-between"
              alignItems="center"
            >
              <ModalStep currentStep={formStep} prevFormStep={prevFormStep} />
              <HStack spacing={0}>
                <Button variant="ghost" mr={4} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  variant="solid"
                  colorScheme="purple"
                  onClick={nextFormStep}
                >
                  Next
                </Button>
              </HStack>
            </Flex>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewTaskModal;
