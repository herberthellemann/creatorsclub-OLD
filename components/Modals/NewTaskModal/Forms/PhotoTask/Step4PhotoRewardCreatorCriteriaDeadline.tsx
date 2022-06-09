import {
  Box,
  Button,
  Code,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  ModalBody,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { NewPhotoTaskContext } from "../../Context/NewPhotoTaskContext";
import { ActionType } from "../../../../../constants/taskTypes";
import NewProductModalFooter from "../../NewProductModalFooter";
import NewProductModalHeader from "../../NewProductModalHeader";
import { Money, PeopleCommunity } from "@styled-icons/fluentui-system-filled";
import ReactHookMultiSelect from "../../../../Control/ReactHookMultiSelect";
import {
  bodyTypeOptions,
  countryOptions,
  ethnicGroupOptions,
  genderOptions,
  heightOptions,
} from "../../../../../constants/taskParameterOptions";
import ReactHookRangeSlider from "../../../../Control/ReactHookRangeSlider";
import ReactHookNumberInput from "../../../../Control/ReactHookNumberInput";
import ReactHookDateInput from "../../../../Control/ReactHookDateInput";
import {
  CreatorCriteria,
  CreatorReward,
  Deadline,
} from "../../../../../constants/taskTypes";

type Props = {
  taskType: string;
  formStep: number;
  nextFormStep: () => void;
  prevFormStep: () => void;
  onModalClose: () => void;
  resetFormStep: () => void;
};

type StepTypes = CreatorCriteria & CreatorReward & Deadline;

const Step4PhotoRewardCreatorCriteriaDeadline = ({
  taskType,
  formStep,
  nextFormStep,
  prevFormStep,
  onModalClose,
  resetFormStep,
}: Props) => {
  const useTaskContext = useContext(NewPhotoTaskContext);
  const { photoTask, dispatch } = useTaskContext;

  const { control, handleSubmit } = useForm<StepTypes>({
    defaultValues: {
      numberOfCreators: photoTask.numberOfCreators,
      ageRange: photoTask.ageRange,
      gender: photoTask.gender,
      ethnicGroup: photoTask.ethnicGroup,
      bodyType: photoTask.bodyType,
      height: photoTask.height,
      cashReward: photoTask.cashReward,
      deadline: photoTask.deadline,
    },
  });

  // Set min reward and recommendation defaults
  const minReward: number = taskType === "photo" ? 20 : 60;
  const recommendation: number = taskType === "photo" ? 25 : 80;

  // Set a default deadline 3 weeks after today
  const today: Date = new Date();
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  today.setDate(today.getDate() + 21);
  const defaultDeadline = today.toJSON().slice(0, 10);
  const giveawayValueTEMP: number = 13;

  const onSubmit = (data: StepTypes) => {
    console.log("data step 3: ", data);
    dispatch({
      type: ActionType.PUSH_CREATOR_CRITERIA,
      payload: {
        numberOfCreators: data.numberOfCreators,
        ageRange: data.ageRange,
        gender: data.gender,
        ageMin: data.ageRange[0],
        //ageMin: data.ageRange[0] ? data.ageRange[0] : -1,
        ageMax: data.ageRange[1],
        //ageMax: data.ageRange[0] ? data.ageRange[0] : -1,
        ethnicGroup: data.ethnicGroup,
        bodyType: data.bodyType,
        height: data.height,
        countries: data.countries,
      },
    });
    dispatch({
      type: ActionType.PUSH_REWARD,
      payload: {
        cashReward: Number(data.cashReward),
        giveawayReward: giveawayValueTEMP,
        totalReward: Number(data.cashReward) + giveawayValueTEMP,
      },
    });
    dispatch({
      type: ActionType.PUSH_DEADLINE,
      payload: {
        deadline: data.deadline,
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
          <Flex gap={4}>
            <Stack flex="3" gap={1}>
              <Box mb={2}>
                <Text fontWeight="semibold">Creator criteria</Text>
                <Text fontSize="0.75rem" color="gray.500">
                  Only creators that meet all criteria are allowed to apply to
                  tasks
                </Text>
              </Box>
              <FormControl>
                <FormLabel htmlFor="numberOfCreators" mb={1}>
                  Number of creators
                </FormLabel>
                <ReactHookNumberInput
                  name={"numberOfCreators"}
                  min={1}
                  max={20}
                  step={1}
                  defaultValue={1}
                  //defaultValue={photoTask.numberOfCreators}
                  icon={PeopleCommunity}
                  control={control}
                />
              </FormControl>
              <FormControl>
                <Flex flexDirection="row" alignItems="center" gap={2}>
                  <FormLabel htmlFor="ageRange" width="120px" pt={4} m={0}>
                    Age range
                  </FormLabel>
                  <ReactHookRangeSlider
                    name={"ageRange"}
                    min={18}
                    max={65}
                    minRange={7}
                    step={1}
                    //defaults={[18, 45]}
                    defaults={photoTask.ageRange}
                    marks={[18, 25, 35, 45, 55, 65]}
                    control={control}
                  />
                </Flex>
              </FormControl>
              <FormControl>
                <Flex flexDirection="row" alignItems="center" gap={2}>
                  <FormLabel htmlFor="gender" width="120px" m={0}>
                    Gender
                  </FormLabel>
                  <ReactHookMultiSelect
                    name="gender"
                    placeholder="Gender"
                    options={genderOptions}
                    control={control}
                    defaultValues={photoTask.gender}
                  />
                </Flex>
              </FormControl>
              <FormControl>
                <Flex flexDirection="row" alignItems="center" gap={2}>
                  <FormLabel htmlFor="ethnicGroup" width="120px" m={0}>
                    Ethnic group
                  </FormLabel>
                  <ReactHookMultiSelect
                    name="ethnicGroup"
                    placeholder="Ethnic group"
                    options={ethnicGroupOptions}
                    control={control}
                  />
                </Flex>
              </FormControl>
              <FormControl>
                <Flex flexDirection="row" alignItems="center" gap={2}>
                  <FormLabel htmlFor="bodyType" width="120px" m={0}>
                    Body type
                  </FormLabel>
                  <ReactHookMultiSelect
                    name="bodyType"
                    placeholder="Body type"
                    options={bodyTypeOptions}
                    control={control}
                  />
                </Flex>
              </FormControl>
              <FormControl>
                <Flex flexDirection="row" alignItems="center" gap={2}>
                  <FormLabel htmlFor="height" width="120px" m={0}>
                    Height
                  </FormLabel>
                  <ReactHookMultiSelect
                    name="height"
                    placeholder="Height"
                    options={heightOptions}
                    control={control}
                  />
                </Flex>
              </FormControl>
              <FormControl>
                <Flex flexDirection="row" alignItems="center" gap={2}>
                  <FormLabel htmlFor="countries" width="120px" m={0}>
                    Countries
                  </FormLabel>
                  <ReactHookMultiSelect
                    name="countries"
                    placeholder="Countries"
                    options={countryOptions}
                    control={control}
                  />
                </Flex>
              </FormControl>
            </Stack>
            <Divider orientation="vertical" height="430px" />
            <Stack flex="2" gap={1}>
              <Box mb={2}>
                <Text fontWeight="semibold">Creator reward</Text>
                <Text fontSize="0.75rem" color="gray.500">
                  Low rewards cause creators not applying.
                </Text>
                <HStack fontSize="0.75rem" color="gray.500">
                  <Text>Our recommendation: </Text>
                  <Code variant="subtle" colorScheme="gray">
                    {recommendation},00 €
                  </Code>
                </HStack>
              </Box>
              <FormControl pb={2}>
                <FormLabel htmlFor="cashReward" mb={1}>
                  Reward per {taskType} [€]
                </FormLabel>
                <ReactHookNumberInput
                  name={"cashReward"}
                  min={minReward}
                  max={1000}
                  step={5}
                  defaultValue={recommendation}
                  icon={Money}
                  control={control}
                />
              </FormControl>
              <Divider />
              <Box mb={2} pt={2}>
                <Text fontWeight="semibold">Task deadline</Text>
                <Text fontSize="0.75rem" color="gray.500">
                  Consider a minimum of 3 weeks for physical products
                </Text>
              </Box>
              <FormControl>
                <FormLabel htmlFor="deadline" mb={1}>
                  Task deadline
                </FormLabel>
                <ReactHookDateInput
                  name={"deadline"}
                  defaultValue={defaultDeadline}
                  control={control}
                />
              </FormControl>
            </Stack>
          </Flex>
        </Box>
      </ModalBody>
      <NewProductModalFooter
        formStep={formStep}
        prevFormStep={prevFormStep}
        onModalClose={onModalClose}
        resetFormStep={resetFormStep}
      >
        <Button type="submit" colorScheme="purple">
          Continue
        </Button>
      </NewProductModalFooter>
    </Box>
  );
};

export default Step4PhotoRewardCreatorCriteriaDeadline;
