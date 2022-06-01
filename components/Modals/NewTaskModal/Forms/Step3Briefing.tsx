import { Box, Button, Stack, Text } from "@chakra-ui/react";
import NewProductModalFooter from "../NewProductModalFooter";

type Props = {
  formStep: number;
  nextFormStep: () => void;
  prevFormStep: () => void;
  onModalClose: () => void;
  resetFormStep: () => void;
};

const Step3Briefing = ({
  formStep,
  nextFormStep,
  prevFormStep,
  onModalClose,
  resetFormStep,
}: Props) => {
  return (
    <Box m={0}>
      <Stack p={4}>
        <Text>Briefing</Text>
      </Stack>{" "}
      <NewProductModalFooter
        formStep={formStep}
        prevFormStep={prevFormStep}
        onModalClose={onModalClose}
        resetFormStep={resetFormStep}
        children={
          <Button
            type="submit"
            colorScheme="purple"
            //Remove this line when including the form, as React Hook Form handles this
            onClick={nextFormStep}
          >
            Next
          </Button>
        }
      />
    </Box>
  );
};

export default Step3Briefing;
