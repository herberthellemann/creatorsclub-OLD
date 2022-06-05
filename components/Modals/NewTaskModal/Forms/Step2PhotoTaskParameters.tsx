import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputLeftElement,
  InputGroup,
  ModalBody,
  Spacer,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { TaskListSquareLtr } from "@styled-icons/fluentui-system-filled";
import {
  photoSubtypeOptions,
  contentAspectRatioOptions,
  contentUseCaseOptions,
  contentProductOptions,
} from "../../../../constants/taskParameterOptions";
import ReactHookSelect from "../../../Control/ReactHookSelect";
import NewProductModalFooter from "../NewProductModalFooter";
import NewProductModalHeader from "../NewProductModalHeader";
import { NewPhotoTaskContext } from "../Context/NewPhotoTaskContext";
import { ActionType } from "../Context/types";
import { useContext } from "react";

type Props = {
  taskType: string;
  formStep: number;
  nextFormStep: () => void;
  prevFormStep: () => void;
  onModalClose: () => void;
  resetFormStep: () => void;
};

const Step2PhotoTaskParameters = ({
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
  const { dispatch } = useTaskContext;

  const onSubmit = (data: any) => {
    dispatch({
      type: ActionType.PUSH_PHOTO_TASK_PARAMETERS,
      payload: {
        name: data.taskName,
        description: data.taskDescription,
        type: data.photoSubtype,
        aspectRatio: data.contentAspectRatio,
        //product: ProductType;
        product: data.contentProduct,
        useCase: data.contentUseCase,
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
        //contentType={state.contentType}
      />
      <ModalBody p={4}>
        <Flex direction="column" gap="2">
          <VStack flex="1">
            <FormControl>
              <Flex alignItems="center" mb={1}>
                <FormLabel htmlFor="taskName" mb={0}>
                  Task name
                </FormLabel>
                <Spacer />
                {errors.taskName ? (
                  <Text fontSize="sm" color="red.500">
                    {errors.taskName.message}
                  </Text>
                ) : null}
              </Flex>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={
                    TaskListSquareLtr ? <TaskListSquareLtr size="16px" /> : null
                  }
                />
                <Input
                  type="text"
                  placeholder="Task name"
                  focusBorderColor="purple.900"
                  {...register("taskName", {
                    required: "Please enter a task name",
                    minLength: 3,
                    maxLength: 80,
                  })}
                />
              </InputGroup>
              <Text
                fontSize="0.75rem"
                color="gray.500"
                height="18px"
                mb="0.25rem"
              >
                Choose a short unique name and avoid your brand name.
              </Text>
            </FormControl>
            <FormControl>
              <Flex alignItems="center" mb={1}>
                <FormLabel htmlFor="taskDescription" mb={0}>
                  Task description
                </FormLabel>
                <Spacer />
                {errors.taskDescription ? (
                  <Text fontSize="sm" color="red.500">
                    {errors.taskDescription.message}
                  </Text>
                ) : null}
              </Flex>
              <Textarea
                placeholder="Write a short description creators can understand"
                resize="none"
                focusBorderColor="purple.900"
                rows={3}
                mb="0.25rem"
                {...register("taskDescription", {
                  required: "Please enter a task name",
                  minLength: {
                    value: 30,
                    message: "Min 30 characters",
                  },
                  maxLength: {
                    value: 150,
                    message: "Max 150 characters",
                  },
                })}
              />
            </FormControl>
          </VStack>
          <Box flex="1" pt="0" fontSize="3xl">
            <FormLabel mb="0.25rem">Photo parameters</FormLabel>
            <Stack direction="row">
              <ReactHookSelect
                name="photoSubtype"
                placeholder="Type"
                options={photoSubtypeOptions}
                control={control}
              />
              <ReactHookSelect
                name="contentAspectRatio"
                placeholder="Format"
                options={contentAspectRatioOptions}
                control={control}
              />
              <ReactHookSelect
                name="contentProduct"
                placeholder="Product"
                options={contentProductOptions}
                control={control}
              />
              <ReactHookSelect
                name="contentUseCase"
                placeholder="Use case"
                options={contentUseCaseOptions}
                control={control}
              />
            </Stack>
          </Box>
        </Flex>
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

export default Step2PhotoTaskParameters;
