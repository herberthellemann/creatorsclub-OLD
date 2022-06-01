import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
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

const Step1TaskTypeSelection = ({
  formStep,
  nextFormStep,
  prevFormStep,
  onModalClose,
  resetFormStep,
}: Props) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log("Task type data:");
    console.log(data);
    alert(JSON.stringify(data, null, 2));
    nextFormStep();
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} m={0}>
      <Stack p={4}>
        <Text>Choose the content type you are looking for</Text>
        <Controller
          name="taskType"
          control={control}
          render={({ field }) => (
            <RadioCardGroup {...field} spacing={4} py="1rem">
              {contentTypeOptions.map((option) => (
                <RadioCard key={option.value} value={option.value} minW="200px">
                  <Text color="emphasized" fontWeight="medium" fontSize="md">
                    {option.label} Content
                  </Text>
                  <Text color="muted" fontSize="sm" noOfLines={2}>
                    {option.description}
                  </Text>
                </RadioCard>
              ))}
            </RadioCardGroup>
          )}
        />
      </Stack>
      <NewProductModalFooter
        formStep={formStep}
        prevFormStep={prevFormStep}
        onModalClose={onModalClose}
        resetFormStep={resetFormStep}
        children={
          <Button type="submit" colorScheme="purple">
            Next
          </Button>
        }
      />
    </Box>
  );
};

export default Step1TaskTypeSelection;
