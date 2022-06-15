// A chakra react multi select component with icons

import { As, FormControl, Icon, TagLeftIcon } from "@chakra-ui/react";
import { StyledIcon } from "@styled-icons/styled-icon";
import {
  Select,
  chakraComponents,
  OptionBase,
  OptionProps,
  GroupBase,
  MultiValueGenericProps,
} from "chakra-react-select";

interface IconOption extends OptionBase {
  label: string;
  value: string;
  icon: As;
}

type Props = {
  name: string;
  placeholder: string;
  bgColor?: string;
  defaultValue?: string[];
  options:
    | {
        value: string;
        label: string;
        icon: StyledIcon;
      }[]
    | {
        label: string;
        options: {
          value: string;
          label: string;
          icon: StyledIcon;
        }[];
      }[];
};

const customComponents = {
  Option: ({
    children,
    ...props
  }: OptionProps<IconOption, true, GroupBase<IconOption>>) => (
    <chakraComponents.Option {...props}>
      <Icon as={props.data.icon} mr={1} h={3} w={3} />
      {children}
    </chakraComponents.Option>
  ),
  MultiValueContainer: ({
    children,
    ...props
  }: MultiValueGenericProps<IconOption, true, GroupBase<IconOption>>) => (
    <chakraComponents.MultiValueContainer {...props}>
      <TagLeftIcon as={props.data.icon} m={0} mr={1} />
      {children}
    </chakraComponents.MultiValueContainer>
  ),
};

const MultiSelectWithIcon = (props: Props) => {
  const { name, placeholder, bgColor, defaultValue, options } = props;

  return (
    <FormControl>
      <Select<IconOption, true, GroupBase<IconOption>>
        size="sm"
        name={name}
        options={options}
        placeholder={placeholder}
        closeMenuOnSelect={false}
        hasStickyGroupHeaders
        isMulti={true}
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
          multiValue: (provided) => ({
            ...provided,
            bgColor: "gray.500",
            color: "white",
          }),
        }}
        components={customComponents}
      />
    </FormControl>
  );
};

export default MultiSelectWithIcon;
