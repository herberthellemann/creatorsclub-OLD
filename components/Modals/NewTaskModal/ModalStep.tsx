// A component that shows the current step and allows navigation for a multi-step modal

import { HStack, IconButton, Text } from "@chakra-ui/react";
import { ChevronLeft } from "@styled-icons/fluentui-system-filled";

type ModalStepProps = {
  formStep: number;
  prevFormStep: () => void;
};

const stepNames = [
  "Content type",
  "Task Parameters",
  "Briefing",
  "Creator criteria, reward & deadline",
  "Summary and submission",
];

const ModalStep = ({ formStep, prevFormStep }: ModalStepProps) => {
  return (
    <HStack>
      {formStep < 5 && (
        <HStack>
          {formStep > 0 && (
            <IconButton
              aria-label="Search database"
              icon={<ChevronLeft size="1.25rem" />}
              onClick={prevFormStep}
            />
          )}
          {formStep != 0 && (
            <>
              {formStep != 4 && (
                <Text color="gray.400">Step {formStep} of 3: </Text>
              )}
              <Text color="gray.400" fontWeight="semibold">
                {stepNames[formStep]}
              </Text>
            </>
          )}
          {/* {formStep > 0 && formStep < 4 && (
            <>
              <Text color="gray.400">Step {formStep} of 3: </Text>
              <Text color="gray.400" fontWeight="semibold">
                {stepNames[formStep]}
              </Text>
            </>
          )}
          {formStep == 4 && (
            <>
              <Text color="gray.400" fontWeight="semibold">
                {stepNames[formStep]}
              </Text>
            </>
          )} */}
        </HStack>
      )}
    </HStack>
  );
};

export default ModalStep;
