// A textfield with Chakra UI prepared for React Hook Form

import { Control, Controller, FieldValues } from "react-hook-form";
import { Select } from "chakra-react-select";
import { FormControl } from "@chakra-ui/react";

type Props = {
  name: string;
  placeholder: string;
  options: {
    value: string;
    label: string;
  }[];
  control: Control<any, any>;
};

const ReactHookSelect = ({ name, placeholder, options, control }: Props) => {
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
            onChange={(val) => onChange(val?.value)}
            value={options.find((c) => c.value === value)}
            selectedOptionColor="purple"
            placeholder={placeholder}
            closeMenuOnSelect={true}
            isMulti={false}
          />
        </FormControl>
      )}
    />
  );
};

export default ReactHookSelect;
