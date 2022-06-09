import { Box, Button, Flex, ModalBody, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { NewVideoTaskContext } from "../../Context/NewVideoTaskContext";
import { ActionType } from "../../../../../constants/taskTypes";
import NewProductModalFooter from "../../NewProductModalFooter";
import NewProductModalHeader from "../../NewProductModalHeader";

type Props = {
  taskType: string;
  formStep: number;
  nextFormStep: () => void;
  prevFormStep: () => void;
  onModalClose: () => void;
  resetFormStep: () => void;
};

const Step4VideoRewardCreatorCriteriaDeadline = ({
  taskType,
  formStep,
  nextFormStep,
  prevFormStep,
  onModalClose,
  resetFormStep,
}: Props) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const useTaskContext = useContext(NewVideoTaskContext);
  const { videoTask, dispatch } = useTaskContext;

  const onSubmit = (data: any) => {
    /* dispatch({
      type: ActionType.PUSH_CREATOR_CRITERIA,
      payload: {
        numberOfCreators: data.numberOfCreators,
        gender: data.gender,
        ageRange: data.ageRange,
        ageMin: data.ageMin,
        ageMax: data.ageMax,
        ethnicGroup: data.ethnicGroup,
        bodyType: data.bodyType,
        height: data.height,
        countries: data.countries,
      },
    }); */
    nextFormStep();
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <NewProductModalHeader
        onModalClose={onModalClose}
        resetFormStep={resetFormStep}
        contentType={taskType}
      />
      <ModalBody p={4}>
        <Flex>
          <Box flex={2}></Box>
          <Box flex={1}></Box>
        </Flex>
      </ModalBody>
      <NewProductModalFooter
        formStep={formStep}
        prevFormStep={prevFormStep}
        onModalClose={onModalClose}
        resetFormStep={resetFormStep}
      >
        <Button type="submit" colorScheme="purple">
          Next
        </Button>
      </NewProductModalFooter>
    </Box>
  );
};

export default Step4VideoRewardCreatorCriteriaDeadline;
