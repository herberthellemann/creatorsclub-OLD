import { Box, Button, ModalBody, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { contentTypeOptions } from "../../../../../constants/taskParameterOptions";
import NewProductModalHeader from "../../NewProductModalHeader";
import NewProductModalFooter from "../../NewProductModalFooter";
import { RadioCard, RadioCardGroup } from "../../RadioCardGroup";
import { Dispatch, SetStateAction } from "react";

type Props = {
  taskType: string;
  setTaskType: Dispatch<SetStateAction<string>>;
  formStep: number;
  nextFormStep: () => void;
  prevFormStep: () => void;
  onModalClose: () => void;
  resetFormStep: () => void;
};

const Step1TaskTypeSelection = ({
  taskType,
  setTaskType,
  formStep,
  nextFormStep,
  prevFormStep,
  onModalClose,
  resetFormStep,
}: Props) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    nextFormStep();
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} m={0}>
      <NewProductModalHeader
        onModalClose={onModalClose}
        resetFormStep={resetFormStep}
      />
      <ModalBody p={4}>
        <Text>Choose the content type you are looking for</Text>
        <RadioCardGroup
          defaultValue={taskType}
          onChange={(value) => setTaskType(value)}
          spacing={4}
          py="1rem"
        >
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
      </ModalBody>
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
