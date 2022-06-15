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
  Step2VideoTaskParameters,
  Step2PhotoTaskParameters,
  Step3VideoBriefing,
  Step3PhotoBriefing,
  Step4VideoRewardCreatorCriteriaDeadline,
  Step4PhotoRewardCreatorCriteriaDeadline,
  Step5VideoSummaryAndSubmission,
  Step5PhotoSummaryAndSubmission,
} from "./Forms";
import { NewVideoTaskContextProvider } from "./Context/NewVideoTaskContext";
import { NewPhotoTaskContextProvider } from "./Context/NewPhotoTaskContext";

type NewTaskModalProps = {
  buttonVariant: string;
  width?: string;
};

const NewTaskModal = (props: NewTaskModalProps) => {
  const { buttonVariant, width } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formStep, setFormStep] = useState(0);
  const [taskType, setTaskType] = useState("video");
  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);
  const resetFormStep = () => setFormStep(0);

  const modalWidth = () => {
    switch (formStep) {
      case 0:
        return "520";
      case 1:
        return "800px";
      case 3:
        return "880px";
      default:
        return "600px";
    }
  };

  return (
    <>
      <Button
        colorScheme="purple"
        variant={buttonVariant}
        width={width ? width : "auto"}
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
                taskType={taskType}
                setTaskType={setTaskType}
                formStep={formStep}
                nextFormStep={nextFormStep}
                prevFormStep={prevFormStep}
                onModalClose={onClose}
                resetFormStep={resetFormStep}
              />
            )}
            {taskType === "video" && (
              <NewVideoTaskContextProvider>
                {formStep == 1 && taskType && (
                  <Step2VideoTaskParameters
                    taskType={taskType}
                    formStep={formStep}
                    nextFormStep={nextFormStep}
                    prevFormStep={prevFormStep}
                    onModalClose={onClose}
                    resetFormStep={resetFormStep}
                  />
                )}
                {formStep == 2 && (
                  <Step3VideoBriefing
                    taskType={taskType}
                    formStep={formStep}
                    nextFormStep={nextFormStep}
                    prevFormStep={prevFormStep}
                    onModalClose={onClose}
                    resetFormStep={resetFormStep}
                  />
                )}
                {formStep == 3 && (
                  <Step4VideoRewardCreatorCriteriaDeadline
                    taskType={taskType}
                    formStep={formStep}
                    nextFormStep={nextFormStep}
                    prevFormStep={prevFormStep}
                    onModalClose={onClose}
                    resetFormStep={resetFormStep}
                  />
                )}
                {formStep == 4 && (
                  <Step5VideoSummaryAndSubmission
                    taskType={taskType}
                    formStep={formStep}
                    nextFormStep={nextFormStep}
                    prevFormStep={prevFormStep}
                    onModalClose={onClose}
                    resetFormStep={resetFormStep}
                  />
                )}
              </NewVideoTaskContextProvider>
            )}
            {taskType === "photo" && (
              <NewPhotoTaskContextProvider>
                {formStep == 1 && taskType && (
                  <Step2PhotoTaskParameters
                    taskType={taskType}
                    formStep={formStep}
                    nextFormStep={nextFormStep}
                    prevFormStep={prevFormStep}
                    onModalClose={onClose}
                    resetFormStep={resetFormStep}
                  />
                )}
                {formStep == 2 && (
                  <Step3PhotoBriefing
                    taskType={taskType}
                    formStep={formStep}
                    nextFormStep={nextFormStep}
                    prevFormStep={prevFormStep}
                    onModalClose={onClose}
                    resetFormStep={resetFormStep}
                  />
                )}
                {formStep == 3 && (
                  <Step4PhotoRewardCreatorCriteriaDeadline
                    taskType={taskType}
                    formStep={formStep}
                    nextFormStep={nextFormStep}
                    prevFormStep={prevFormStep}
                    onModalClose={onClose}
                    resetFormStep={resetFormStep}
                  />
                )}
                {formStep == 4 && (
                  <Step5PhotoSummaryAndSubmission
                    taskType={taskType}
                    formStep={formStep}
                    nextFormStep={nextFormStep}
                    prevFormStep={prevFormStep}
                    onModalClose={onClose}
                    resetFormStep={resetFormStep}
                  />
                )}
              </NewPhotoTaskContextProvider>
            )}
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewTaskModal;
