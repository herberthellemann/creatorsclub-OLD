// A component that shows the current step and allows navigation for a multi-step modal

import { HStack, IconButton, Text } from "@chakra-ui/react";
import { ChevronLeft } from "@styled-icons/fluentui-system-filled";

type ModalStepProps = {
  formStep: number;
  prevFormStep: () => void;
};

const ModalStep = ({ formStep, prevFormStep }: ModalStepProps) => {
  return (
    <HStack>
      {formStep < 4 && (
        <HStack>
          {formStep > 1 && (
            <IconButton
              aria-label="Search database"
              icon={<ChevronLeft size="1.25rem" />}
              onClick={prevFormStep}
            />
          )}
          <Text color="gray.400">Step {formStep} of 3</Text>
        </HStack>
      )}
    </HStack>
  );
};

export default ModalStep;
