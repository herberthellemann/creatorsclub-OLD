// A number input with Chakra UI prepared for React Hook Form

import {
  InputLeftElement,
  InputGroup,
  NumberInput,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { PeopleCommunity } from "@styled-icons/fluentui-system-filled";
import { Control, Controller, FieldValues } from "react-hook-form";
import { StyledIcon } from "@styled-icons/styled-icon";

type Props = {
  name: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  icon: StyledIcon;
  control: Control<FieldValues, any>;
};

const ReactHookNumberInput = (props: Props) => {
  const { name, min, max, step, defaultValue, icon: Icon, control } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field: { ref, ...restField } }) => (
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={Icon ? <Icon size="16px" /> : null}
          />
          <NumberInput
            {...restField}
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
      )}
    />
  );
};

export default ReactHookNumberInput;
