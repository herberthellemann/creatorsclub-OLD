import {
  Divider,
  Flex,
  Stack,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { LogoDark } from "../../assets/LogoDark";
import { NavButton } from "./NavButton";
import { UserProfile } from "./UserProfile";
import {
  Cube,
  Folder,
  Home,
  Settings,
  TaskListSquareLtr,
  VehicleTruckProfile,
} from "@styled-icons/fluentui-system-filled";

export const Sidebar = () => (
  <Flex as="section" minH="100vh" bg="bg-canvas">
    <Flex
      flex="1"
      bg="bg-surface"
      overflowY="auto"
      boxShadow={useColorModeValue("sm", "sm-dark")}
      width="250px"
      py="6"
      px="4"
    >
      <Stack width="100%" justify="space-between" spacing="1">
        <Stack spacing="6" shouldWrapChildren>
          <LogoDark width="75%" />
          <Button variant="primary" width="100%" mt={0}>
            New task
          </Button>
          <Stack mt={0} spacing="1">
            <NavButton label="Home" navTo="/" icon={Home} />
            <NavButton label="Tasks" navTo="/tasks" icon={TaskListSquareLtr} />
            <NavButton
              label="Shipping"
              navTo="/shipping"
              icon={VehicleTruckProfile}
            />
            <NavButton label="Products" navTo="/products" icon={Cube} />
            <NavButton label="Storage" navTo="/storage" icon={Folder} />
          </Stack>
        </Stack>
        <Stack spacing="4">
          <Stack spacing="1">
            <NavButton label="Settings" navTo="/settings" icon={Settings} />
          </Stack>
          <Divider />
          <UserProfile
            name="Herbert Hellemann"
            image="https://tinyurl.com/yhkm2ek8"
            email="zermanik@gmail.com"
          />
        </Stack>
      </Stack>
    </Flex>
  </Flex>
);
