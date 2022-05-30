// A component that shows the current step and allows navigation for a multi-step modal

import { HStack, IconButton, Text } from "@chakra-ui/react";
import { ChevronLeft } from "@styled-icons/fluentui-system-filled";

type ModalStepProps = {
  currentStep: number;
  prevFormStep: () => void;
};

const ModalStep = ({ currentStep, prevFormStep }: ModalStepProps) => {
  return (
    <HStack>
      {currentStep < 3 && (
        <HStack>
          {currentStep > 0 && (
            <IconButton
              aria-label="Search database"
              icon={<ChevronLeft size="1.25rem" />}
              onClick={prevFormStep}
            />
          )}
          <Text color="gray.400">Step {currentStep + 1} of 3</Text>
        </HStack>
      )}
    </HStack>
  );
};

export default ModalStep;
