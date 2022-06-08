// A multi select input with Chakra UI prepared for React Hook Form

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

const ReactHookMultiSelect = ({
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
            // The default value is not working for the moment
            // It is being displayed, but react-hook-form doesn't know the value apparently
            /* defaultValue={
              defaultValue
                ? options.find((c) => c.value === defaultValue)
                : null
            } */
            //defaultValue={options.find((c) => c.value === defaultValue)}
            options={options}
            ref={ref}
            onBlur={onBlur}
            onChange={(val) => onChange(val.map((c) => c.value))} //CHANGED
            value={options.find((c) => c.value === value)} //CHANGED
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
