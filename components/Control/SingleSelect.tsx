// A chakra react single select component

import { Select, SingleValue } from "chakra-react-select";
import { FormControl } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  name: string;
  placeholder: string;
  bgColor?: string;
  width?: string;
  defaultValue?: string[];
  options:
    | {
        value: string;
        label: string;
        color: string;
      }[]
    | {
        label: string;
        options: {
          value: string;
          label: string;
          color: string;
        }[];
      }[];
};

const SingleSelect = (props: Props) => {
  const { name, placeholder, bgColor, width, defaultValue, options } = props;
  const [selected, setSelected] =
    useState<SingleValue<{ value: string; label: string; color: string }>>();
  const [index, setIndex] = useState(0);

  //console.log(`length`, selected?.label.length);

  return (
    <FormControl>
      <Select
        size="sm"
        chakraStyles={{
          control: (provided) => ({
            ...provided,
            borderRadius: "full",
            color: "white",
            borderWidth: selected ? "0px" : "1px",
            width: width ? width : "auto",
            //width: selected ? `${8 * selected?.label.length + 10}px` : "90px",
            bgColor: selected ? selected.color : "transparent",
          }),
          indicatorsContainer: (provided) => ({
            ...provided,
            display: "none",
          }),
          menu: (provided) => ({
            ...provided,
            overflow: "visible",
          }),
          menuList: (provided) => ({
            ...provided,
            borderRadius: "8px",
          }),
          groupHeading: (provided) => ({
            ...provided,
            //bgColor: "gray.500",
            //color: "white",
          }),
        }}
        name={name}
        options={options}
        selectedOptionColor="purple"
        placeholder={placeholder}
        closeMenuOnSelect={true}
        isMulti={false}
        onChange={(val) => setSelected(val)}
      />
    </FormControl>
  );
};

export default SingleSelect;
