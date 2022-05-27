// A textfield for URLs with Chakra UI prepared for Formik validation & submission

import {
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputLeftAddon,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { useField } from "formik";
import { ChangeEventHandler, FocusEventHandler } from "react";

type Props = {
  id: string;
  name: string;
  placeholder: string;
  label: string;
  value: string;
  helpText?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
};

const FormikUrlInput = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);

  const errorStyle: boolean = meta.touched && meta.error ? true : false;
  const borderColor: string = errorStyle ? "red.500" : "gray.200";
  const focusBorderColor: string = errorStyle ? "red.500" : "purple.900";

  return (
    <FormControl mb={4}>
      <Flex alignItems="center" mb={1}>
        <FormLabel htmlFor={props.id || props.name} mb={0}>
          {label}
        </FormLabel>
        <Spacer />
        {meta.touched && meta.error ? (
          <Text fontSize="sm" color="red.500">
            {meta.error}
          </Text>
        ) : null}
      </Flex>

      <InputGroup>
        <InputLeftAddon children="https://" />
        <Input
          //variant="filled"
          //focusBorderColor={focusBorderColor}
          //borderColor={borderColor}
          //backgroundColor="white"
          focusBorderColor="purple.900"
          mb={0}
          {...field}
          {...props}
        />
      </InputGroup>

      {props.helpText ? (
        <Text fontSize="0.75rem" color="gray.500" height="18px">
          {props.helpText}
        </Text>
      ) : null}
    </FormControl>
  );
};

export default FormikUrlInput;
