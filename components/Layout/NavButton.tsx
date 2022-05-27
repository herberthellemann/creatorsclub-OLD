import { As, Button, ButtonProps, HStack, Icon, Text } from "@chakra-ui/react";
import Router from "next/router";
import { string } from "yup";

interface NavButtonProps extends ButtonProps {
  icon: As;
  label: string;
  navTo: string;
}

export const NavButton = (props: NavButtonProps) => {
  const { icon, label, navTo, ...buttonProps } = props;
  return (
    <Button
      variant="ghost"
      justifyContent="start"
      px={3}
      onClick={(e) => {
        Router.push(navTo);
      }}
      {...buttonProps}
    >
      <HStack spacing="2">
        <Icon as={icon} boxSize="6" color="subtle" />
        <Text fontSize="md">{label}</Text>
      </HStack>
    </Button>
  );
};
