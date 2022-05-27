import { Divider, Flex, Stack, Button } from "@chakra-ui/react";
import { LogoLight } from "../../assets/LogoLight";
import { NavButtonAlt } from "./NavButtonAlt";
import { UserProfileAlt } from "./UserProfileAlt";
import {
  Cube,
  Folder,
  Home,
  Settings,
  TaskListSquareLtr,
  VehicleTruckProfile,
} from "@styled-icons/fluentui-system-filled";
import { useSession } from "next-auth/react";

let sessionEmail: string | null | undefined;
let sessionName: string | null | undefined;
let sessionImageUrl: string | null | undefined;

export function SidebarAlt() {
  const { data: session, status } = useSession();

  if (!session) {
    console.log("No session available");
  }

  //Fetch session data
  if (session) {
    console.log("Session available");
    sessionEmail = session.user?.email;
    sessionName = session.user?.name;
    sessionImageUrl = session.user?.image;
  }

  return (
    <Flex as="section" minH="100vh" bg="bg-canvas">
      <Flex
        flex="1"
        bg="bg-accent"
        color="on-accent"
        overflowY="auto"
        width="250px"
        py="6"
        px="4"
      >
        <Stack width="100%" justify="space-between" spacing="1">
          <Stack spacing="6" shouldWrapChildren>
            <LogoLight width="75%" />
            <Button variant="primary-on-accent" width="100%" mt={0}>
              New task
            </Button>
            <Stack mt={0} spacing="1">
              <NavButtonAlt label="Home" navTo="/" icon={Home} />
              <NavButtonAlt
                label="Tasks"
                navTo="/tasks"
                icon={TaskListSquareLtr}
              />
              <NavButtonAlt
                label="Shipping"
                navTo="/shipping"
                icon={VehicleTruckProfile}
              />
              <NavButtonAlt label="Products" navTo="/products" icon={Cube} />
              <NavButtonAlt label="Storage" navTo="/storage" icon={Folder} />
            </Stack>
          </Stack>
          <Stack spacing="4">
            <Stack spacing="1">
              <NavButtonAlt
                label="Settings"
                navTo="/settings"
                icon={Settings}
              />
            </Stack>
            <Divider />
            <UserProfileAlt
              name={sessionName || "No name available"}
              image={sessionImageUrl || "https://tinyurl.com/yhkm2ek8"}
              email={sessionEmail || "No email available"}
            />
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
}
