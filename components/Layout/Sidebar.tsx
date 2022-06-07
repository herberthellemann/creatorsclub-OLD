import { Divider, Flex, Stack, Button } from "@chakra-ui/react";
import { LogoLight } from "../../assets/LogoLight";
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
import { useSession } from "next-auth/react";

let sessionEmail: string | null | undefined;
let sessionName: string | null | undefined;
let sessionImageUrl: string | null | undefined;

export function Sidebar() {
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
    <Flex as="section" minH="100vh">
      <Flex
        bg="bg-accent"
        color="on-accent"
        overflowY="auto"
        width="250px"
        py={6}
        px={4}
      >
        <Stack width="100%" justify="space-between" spacing={1}>
          <Stack spacing={6} shouldWrapChildren>
            <LogoLight width="75%" />
            <Button variant="primary-on-accent" width="100%" mt={0}>
              New task
            </Button>
            <Stack mt={0} spacing={1}>
              <NavButton label="Home" navTo="/" icon={Home} />
              <NavButton
                label="Tasks"
                navTo="/tasks"
                icon={TaskListSquareLtr}
              />
              <NavButton
                label="Shipping"
                navTo="/shipping"
                icon={VehicleTruckProfile}
              />
              <NavButton label="Products" navTo="/products" icon={Cube} />
              <NavButton label="Storage" navTo="/storage" icon={Folder} />
            </Stack>
          </Stack>
          <Stack spacing={6}>
            <Stack spacing={1}>
              <NavButton label="Settings" navTo="/settings" icon={Settings} />
            </Stack>
            <Divider />
            <UserProfile
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
