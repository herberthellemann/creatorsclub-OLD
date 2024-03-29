// A number input with Chakra UI prepared for React Hook Form

import {
  FormControl,
  InputLeftElement,
  InputGroup,
  NumberInput,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { Control, Controller, FieldValues } from "react-hook-form";
import { StyledIcon } from "@styled-icons/styled-icon";

type Props = {
  name: string;
  min: number;
  max: number;
  step: number;
  defaultValue?: number;
  icon: StyledIcon;
  control: Control<any, any>;
};

const ReactHookNumberInput = (props: Props) => {
  const { name, min, max, step, defaultValue, icon: Icon, control } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field, fieldState: { invalid } }) => (
        <FormControl isInvalid={invalid}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={Icon ? <Icon size="16px" /> : null}
            />
            <NumberInput
              {...field}
              focusBorderColor="purple.600"
              width="full"
              allowMouseWheel
              min={min}
              max={max}
              step={step}
              defaultValue={defaultValue}
            >
              <NumberInputField pl={8} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </InputGroup>
        </FormControl>
      )}
    />
  );
};

export default ReactHookNumberInput;
