// A number innput with Chakra UI prepared for Formik validation & submission

import {
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Text,
  Flex,
  Spacer,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { useField } from "formik";
import { ChangeEventHandler, FocusEventHandler, useState } from "react";
import { StyledIcon } from "@styled-icons/styled-icon";

type Props = {
  id: string;
  name: string;
  label: string;
  value: string | number;
  helpText?: string;
  icon?: StyledIcon;
  onChange: any;
  onBlur: FocusEventHandler<HTMLInputElement>;
};

const FormikNumberInput = ({ label, icon: Icon, ...props }: Props) => {
  const [field, meta] = useField(props);

  const errorStyle: boolean = meta.touched && meta.error ? true : false;
  const borderColor: string = errorStyle ? "red.500" : "gray.200";
  const focusBorderColor: string = errorStyle ? "red.500" : "purple.900";

  return (
    <FormControl>
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
        <InputLeftElement
          pointerEvents="none"
          children={Icon ? <Icon size="16px" /> : null}
        />
        <NumberInput></NumberInput>
        <NumberInput
          //variant="filled"
          //focusBorderColor={focusBorderColor}
          //borderColor={borderColor}
          //backgroundColor="white"
          defaultValue={0.0}
          min={0.0}
          precision={2}
          step={1.0}
          focusBorderColor="purple.600"
          width="full"
          mb={0}
          allowMouseWheel
          {...field}
          {...props}
        >
          <NumberInputField pl={10} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </InputGroup>

      {props.helpText ? (
        <Text fontSize="0.75rem" color="gray.500" mb={4} height="18px">
          {props.helpText}
        </Text>
      ) : null}
    </FormControl>
  );
};

export default FormikNumberInput;
