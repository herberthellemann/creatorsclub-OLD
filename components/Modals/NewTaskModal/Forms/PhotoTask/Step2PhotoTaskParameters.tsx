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
} from "../../../../../constants/taskParameterOptions";
import ReactHookSelect from "../../../../Control/ReactHookSelect";
import NewProductModalFooter from "../../NewProductModalFooter";
import NewProductModalHeader from "../../NewProductModalHeader";
import { NewPhotoTaskContext } from "../../Context/NewPhotoTaskContext";
import { ActionType } from "../../../../../constants/taskTypes";
import { useContext } from "react";
import { PhotoTaskParameters } from "../../../../../constants/taskTypes";

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
  const useTaskContext = useContext(NewPhotoTaskContext);
  const { photoTask, dispatch } = useTaskContext;

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PhotoTaskParameters>({
    defaultValues: {
      name: photoTask.name,
      description: photoTask.description,
      type: photoTask.type,
      aspectRatio: photoTask.aspectRatio,
      product: photoTask.product,
      useCase: photoTask.useCase,
    },
  });

  const onSubmit = (data: PhotoTaskParameters) => {
    dispatch({
      type: ActionType.PUSH_PHOTO_TASK_PARAMETERS,
      payload: {
        name: data.name,
        description: data.description,
        type: data.type,
        aspectRatio: data.aspectRatio,
        //product: ProductType;
        product: data.product,
        useCase: data.useCase,
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
        <Flex direction="column" gap="2">
          <VStack flex="1">
            <FormControl>
              <Flex alignItems="center" mb={1}>
                <FormLabel htmlFor="name" mb={0}>
                  Task name
                </FormLabel>
                <Spacer />
                {errors.name ? (
                  <Text fontSize="sm" color="red.500">
                    {errors.name.message}
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
                  defaultValue={photoTask.name}
                  placeholder="Task name"
                  focusBorderColor="purple.900"
                  {...register("name", {
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
                <FormLabel htmlFor="description" mb={0}>
                  Task description
                </FormLabel>
                <Spacer />
                {errors.description ? (
                  <Text fontSize="sm" color="red.500">
                    {errors.description.message}
                  </Text>
                ) : null}
              </Flex>
              <Textarea
                defaultValue={photoTask.description}
                placeholder="Write a short description creators can understand"
                resize="none"
                focusBorderColor="purple.900"
                rows={3}
                mb="0.25rem"
                {...register("description", {
                  required: "Please enter a task description",
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
                name="type"
                placeholder="Type"
                options={photoSubtypeOptions}
                control={control}
              />
              <ReactHookSelect
                name="aspectRatio"
                placeholder="Format"
                options={contentAspectRatioOptions}
                control={control}
              />
              <ReactHookSelect
                name="product"
                placeholder="Product"
                options={contentProductOptions}
                control={control}
              />
              <ReactHookSelect
                name="useCase"
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
      >
        <Button type="submit" colorScheme="purple">
          Next
        </Button>
      </NewProductModalFooter>
    </Box>
  );
};

export default Step2PhotoTaskParameters;
