import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { contentTypeOptions } from "../../../../constants/taskParameterOptions";
import NewProductModalFooter from "../NewProductModalFooter";
import { RadioCard, RadioCardGroup } from "../RadioCardGroup";

type Props = {
  formStep: number;
  nextFormStep: () => void;
  prevFormStep: () => void;
  onModalClose: () => void;
  resetFormStep: () => void;
};

const TaskTypeSelection = ({
  formStep,
  nextFormStep,
  prevFormStep,
  onModalClose,
  resetFormStep,
}: Props) => {
  const [contentType, setContentType] = useState("video");

  const handleClick = () => {
    alert(JSON.stringify(contentType, null, 2));
    nextFormStep();
  };

  return (
    <Box m={0}>
      <Stack p={4}>
        <Text>Choose the content type you are looking for</Text>
        <RadioCardGroup
          defaultValue={contentTypeOptions.at(0)?.value}
          onChange={(value) => setContentType(value)}
          spacing={4}
          py="1rem"
        >
          {contentTypeOptions.map((option) => (
            <RadioCard key={option.value} value={option.value} minW="200px">
              <Text color="emphasized" fontWeight="medium" fontSize="md">
                {option.label} Task
              </Text>
              <Text color="muted" fontSize="sm">
                {option.description}
              </Text>
            </RadioCard>
          ))}
        </RadioCardGroup>
      </Stack>
      <NewProductModalFooter
        formStep={formStep}
        prevFormStep={prevFormStep}
        onModalClose={onModalClose}
        resetFormStep={resetFormStep}
        children={
          <Button type="submit" colorScheme="purple" onClick={handleClick}>
            Next
          </Button>
        }
      />
    </Box>
  );
};

export default TaskTypeSelection;
