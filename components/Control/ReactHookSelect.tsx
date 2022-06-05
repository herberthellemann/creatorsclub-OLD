// A textfield with Chakra UI prepared for React Hook Form

import { Control, Controller, FieldValues } from "react-hook-form";
import { Select } from "chakra-react-select";
import { FormControl } from "@chakra-ui/react";

type Props = {
  name: string;
  placeholder: string;
  defaultValue?: string;
  options: {
    value: string;
    label: string;
  }[];
  control: Control<FieldValues, any>;
};

const ReactHookSelect = ({
  name,
  placeholder,
  defaultValue,
  options,
  control,
}: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: true }}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid },
      }) => (
        <FormControl isInvalid={invalid}>
          <Select
            size="sm"
            chakraStyles={{
              menu: (provided) => ({
                ...provided,
                overflow: "visible",
              }),
              dropdownIndicator: (provided) => ({
                ...provided,
                px: 2,
                cursor: "inherit",
              }),
            }}
            name={name}
            // The default value is not working for the moment
            // It is being displayed, but react-hook-form doesn't know the value apparently
            defaultValue={
              defaultValue
                ? options.find((c) => c.value === defaultValue)
                : null
            }
            options={options}
            ref={ref}
            onBlur={onBlur}
            onChange={(val) => onChange(val?.value)}
            value={options.find((c) => c.value === value)}
            selectedOptionColor="purple"
            placeholder={placeholder}
            closeMenuOnSelect={true}
          />
        </FormControl>
      )}
    />
  );
};

export default ReactHookSelect;
