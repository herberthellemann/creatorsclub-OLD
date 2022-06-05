import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  InputLeftElement,
  Input,
  InputGroup,
  ModalBody,
  NumberInput,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { NewVideoTaskContext } from "../Context/NewVideoTaskContext";
import { NewPhotoTaskContext } from "../Context/NewPhotoTaskContext";
import { ActionType } from "../Context/types";
import NewProductModalFooter from "../NewProductModalFooter";
import NewProductModalHeader from "../NewProductModalHeader";
import { PeopleCommunity, Person } from "@styled-icons/fluentui-system-filled";

type Props = {
  taskType: string;
  formStep: number;
  nextFormStep: () => void;
  prevFormStep: () => void;
  onModalClose: () => void;
  resetFormStep: () => void;
};

const Step4PhotoRewardCreatorCriteriaDeadline = ({
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

  const useTaskContext = useContext(NewPhotoTaskContext);
  const { photoTask, dispatch } = useTaskContext;

  const onSubmit = (data: any) => {
    dispatch({
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
    });
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
        <Box>
          <Stack>
            <FormControl>
              <Flex alignItems="center" mb={1}>
                <FormLabel htmlFor="ageRange" mb={0}>
                  Age range
                </FormLabel>
                <Spacer />
                {errors.taskName ? (
                  <Text fontSize="sm" color="red.500">
                    {errors.ageRange.message}
                  </Text>
                ) : null}
              </Flex>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={Person ? <Person size="16px" /> : null}
                />
                <Input
                  type="text"
                  placeholder="Age range"
                  focusBorderColor="purple.900"
                  {...register("ageRange", {
                    required: "Please enter an age range",
                    minLength: 3,
                    maxLength: 80,
                  })}
                />
              </InputGroup>
            </FormControl>
            {/* <FormControl>
              <Flex alignItems="center" mb={1}>
                <FormLabel htmlFor="numberOfCreators" mb={0}>
                  Number of creators
                </FormLabel>
                <Spacer />
                {errors.taskName ? (
                  <Text fontSize="sm" color="red.500">
                    {errors.numberOfCreators.message}
                  </Text>
                ) : null}
              </Flex>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={
                    PeopleCommunity ? <PeopleCommunity size="16px" /> : null
                  }
                />
                <NumberInput
                  defaultValue={1}
                  min={1}
                  max={20}
                  step={1}
                  {...register("numberOfCreators", {
                    required: "Please enter a number of creators",
                  })}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </InputGroup>
            </FormControl> */}
          </Stack>
        </Box>
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

export default Step4PhotoRewardCreatorCriteriaDeadline;
