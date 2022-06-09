// A date input with Chakra UI prepared for React Hook Form

import { Input } from "@chakra-ui/react";
import { Control, Controller, FieldValues } from "react-hook-form";

type Props = {
  name: string;
  defaultValue: string;
  control: Control<any, any>;
};

const ReactHookDateInput = (props: Props) => {
  const { name, defaultValue, control } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field: { ref, ...restField } }) => (
        <Input
          {...restField}
          type="date"
          focusBorderColor="purple.600"
          width="full"
          defaultValue={defaultValue}
        />
      )}
    />
  );
};

export default ReactHookDateInput;
