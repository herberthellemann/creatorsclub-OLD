// A multi select input with Chakra UI prepared for React Hook Form

import { Control, Controller, FieldValues } from "react-hook-form";
import { Select } from "chakra-react-select";
import { FormControl } from "@chakra-ui/react";

type Props = {
  name: string;
  placeholder: string;
  defaultValues?: string[];
  options: {
    value: string;
    label: string;
  }[];
  control: Control<any, any>;
};

const ReactHookMultiSelect = ({
  name,
  placeholder,
  defaultValues,
  options,
  control,
}: Props) => {
  console.log("default values: ", defaultValues);

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
              dropdownIndicator: (provided) => ({
                ...provided,
                px: 2,
                cursor: "inherit",
              }),
              menu: (provided) => ({
                ...provided,
                overflow: "visible",
              }),
              menuList: (provided) => ({
                ...provided,
                borderRadius: "8px",
              }),
            }}
            name={name}
            options={options}
            ref={ref}
            onBlur={onBlur}
            onChange={(val) => onChange(val.map((c) => c.value))} //CHANGED
            value={options.find((c) => c.value === value)} //CHANGED
            defaultValue={
              defaultValues
                ? options.filter((c, index) => c.value === defaultValues[index])
                : null
            }
            colorScheme="purple" //CHANGED
            selectedOptionColor="purple"
            placeholder={placeholder}
            closeMenuOnSelect={true}
            isMulti={true}
          />
        </FormControl>
      )}
    />
  );
};

export default ReactHookMultiSelect;
