// A date input with Chakra UI prepared for React Hook Form

import { FormControl, Input } from "@chakra-ui/react";
import { Control, Controller, FieldValues } from "react-hook-form";

type Props = {
  name: string;
  defaultValue?: Date;
  control: Control<any, any>;
};

const ReactHookDateInput = (props: Props) => {
  const { name, defaultValue, control } = props;

  const today: Date = new Date();
  const formattedDeadline: string = defaultValue
    ? defaultValue?.toISOString().slice(0, 10)
    : today.toISOString().slice(0, 10);

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field, fieldState: { invalid } }) => (
        <FormControl isInvalid={invalid}>
          <Input
            {...field}
            type="date"
            focusBorderColor="purple.600"
            width="full"
            //defaultValue={defaultValue?.toISOString().slice(0, 10)}
            //defaultValue={formattedDeadline}
            //defaultValue="2014-02-09"
            //defaultValue="09.02.2023"
            //value={formattedDeadline}
            //onChange={(val) => field.onChange(val)}
          />
        </FormControl>
      )}
    />
  );
};

export default ReactHookDateInput;
