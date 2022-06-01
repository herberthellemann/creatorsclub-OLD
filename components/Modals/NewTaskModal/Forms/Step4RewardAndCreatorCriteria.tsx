import { Box, Button, Stack, Text } from "@chakra-ui/react";
import NewProductModalFooter from "../NewProductModalFooter";

type Props = {
  formStep: number;
  nextFormStep: () => void;
  prevFormStep: () => void;
  onModalClose: () => void;
  resetFormStep: () => void;
};

const Step4RewardAndCreatorCriteria = ({
  formStep,
  nextFormStep,
  prevFormStep,
  onModalClose,
  resetFormStep,
}: Props) => {
  return (
    <Box m={0}>
      <Stack p={4}>
        <Text>Reward and Creator Criteria</Text>
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

export default Step4RewardAndCreatorCriteria;
