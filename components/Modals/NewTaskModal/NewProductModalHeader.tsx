import { Box, Divider, ModalCloseButton, ModalHeader } from "@chakra-ui/react";

type Props = {
  onModalClose: () => void;
  resetFormStep: () => void;
  contentType?: string;
};

const NewProductModalHeader = ({
  onModalClose,
  resetFormStep,
  contentType,
}: Props) => {
  return (
    <Box>
      <ModalHeader p={4} backgroundColor="gray.50" alignContent="end">
        New{" "}
        {contentType
          ? contentType.charAt(0).toUpperCase() + contentType.slice(1)
          : "Content"}{" "}
        Task 🙌
        <ModalCloseButton
          onClick={() => {
            resetFormStep();
            onModalClose();
          }}
          top={3}
        />
      </ModalHeader>
      <Divider borderColor="gray.300" />
    </Box>
  );
};

export default NewProductModalHeader;
