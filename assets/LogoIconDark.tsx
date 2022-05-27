import { chakra, HTMLChakraProps } from "@chakra-ui/react";

export const LogoIconDark = (props: HTMLChakraProps<"svg">) => (
  <chakra.svg
    color="accent"
    height="48px"
    width="100%"
    viewBox="0 0 60 48"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.765137 23.9333C0.765137 39.4667 9.56514 48 30.0985 48C48.6985 48 58.0318 40.8667 59.2318 27.3333H47.0318C45.8985 34.9333 40.0318 37.9333 30.0985 37.9333C17.9651 37.9333 12.7651 33.5333 12.7651 23.9333C12.7651 14.4 17.8985 10.0667 30.0985 10.0667C40.0985 10.0667 45.8985 13 47.0318 20.5333H59.2318C58.0318 7.06667 48.6985 0 30.0985 0C9.56514 0 0.765137 8.46667 0.765137 23.9333Z"
      fill="url(#paint0_linear)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M40.7651 24.025C40.7651 18.2 37.4651 15 29.7651 15C22.7901 15 19.2901 17.675 18.8401 22.75L23.4151 22.75C23.8401 19.9 26.0401 18.775 29.7651 18.775C34.3151 18.775 36.2651 20.425 36.2651 24.025C36.2651 27.6 34.3401 29.225 29.7651 29.225C26.0151 29.225 23.8401 28.125 23.4151 25.3L18.8401 25.3C19.2901 30.35 22.7901 33 29.7651 33C37.4651 33 40.7651 29.825 40.7651 24.025Z"
      fill="url(#paint0_linear)"
    />

    <defs>
      <linearGradient
        id="paint0_linear"
        x1="44"
        y1="-1.78854"
        x2="44"
        y2="91.3879"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentColor" />
        <stop offset="1" stopColor="currentColor" />
      </linearGradient>
    </defs>
  </chakra.svg>
);
