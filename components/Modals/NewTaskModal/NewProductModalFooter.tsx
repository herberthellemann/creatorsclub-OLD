import {
  Box,
  Divider,
  ModalFooter,
  Flex,
  HStack,
  Button,
} from "@chakra-ui/react";
import ModalStep from "./ModalStep";

type Props = {
  formStep: number;
  prevFormStep: () => void;
  onModalClose: () => void;
  resetFormStep: () => void;
  children: React.ReactNode;
};

const NewProductModalFooter = ({
  formStep,
  prevFormStep,
  onModalClose,
  resetFormStep,
  children,
}: Props) => {
  return (
    <Box>
      <Divider borderColor="gray.300" />
      <ModalFooter backgroundColor="gray.50" p={4}>
        <Flex width="100%" justifyContent="space-between" alignItems="center">
          <ModalStep formStep={formStep} prevFormStep={prevFormStep} />
          <HStack spacing={0}>
            <Button
              variant="ghost"
              mr={4}
              onClick={() => {
                resetFormStep();
                onModalClose();
              }}
            >
              Cancel
            </Button>
            {children}
          </HStack>
        </Flex>
      </ModalFooter>
    </Box>
  );
};

export default NewProductModalFooter;
