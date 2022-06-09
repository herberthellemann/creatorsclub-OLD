// A range select with Chakra UI prepared for React Hook Form

import {
  Box,
  RangeSlider,
  RangeSliderMark,
  RangeSliderThumb,
  RangeSliderTrack,
  RangeSliderFilledTrack,
} from "@chakra-ui/react";
import { Drag } from "@styled-icons/fluentui-system-filled";
import { Control, Controller, FieldValues } from "react-hook-form";
import { useState } from "react";

type Props = {
  name: string;
  min: number;
  max: number;
  minRange: number;
  step: number;
  defaults: [number, number];
  marks: number[];
  control: Control<any, any>;
};

const ReactHookRangeSlider = (props: Props) => {
  const { name, min, max, minRange, step, defaults, marks, control } = props;
  const [rangeSliderValue, setRangeSliderValue] = useState([
    defaults[0],
    defaults[1],
  ]);

  return (
    <Box pt={7} pb={3} px={4} width="100%">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <RangeSlider
            {...field}
            onChange={(val) => {
              setRangeSliderValue(val);
              field.onChange(val);
            }}
            colorScheme="purple"
            minStepsBetweenThumbs={minRange}
            defaultValue={defaults}
            min={min}
            max={max}
            step={step}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb boxSize={6} index={0}>
              <Box color="purple.300" as={Drag} />
            </RangeSliderThumb>
            <RangeSliderThumb boxSize={6} index={1}>
              <Box color="purple.300" as={Drag} />
            </RangeSliderThumb>
            {rangeSliderValue.map((val, index) => (
              <RangeSliderMark
                key={val}
                value={rangeSliderValue[index]}
                fontSize="sm"
                textAlign="center"
                bg="purple.500"
                color="white"
                mt={-10}
                ml={-4}
                w={8}
                borderRadius="full"
              >
                {rangeSliderValue[index]}
                {rangeSliderValue[index] == max ? "+" : ""}
              </RangeSliderMark>
            ))}
            {marks.map((val, index) => (
              <RangeSliderMark
                key={val}
                value={marks[index]}
                fontSize="sm"
                textAlign="center"
                mt={3}
                ml={-4}
                w={8}
              >
                {marks[index]}
                {marks[index] == max ? "+" : ""}
              </RangeSliderMark>
            ))}
          </RangeSlider>
        )}
      />
    </Box>
  );
};

export default ReactHookRangeSlider;
