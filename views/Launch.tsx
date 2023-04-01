import { Heading, VStack, Image } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

const Launch = ({ onClick }: LaunchProps) => {
  return (
    <VStack
      justifyContent="center"
      width="100vw"
      height="100vh"
      gap="20px"
      backgroundImage="/bgFinal.png"
    >
      <Image src="/icetLogo.png" width="30%" alt="Obsqura 23" />
      <Heading
        as="button"
        textColor="white"
        fontSize="56px"
        fontFamily="Clash Display"
        onClick={() => onClick("home")}
      >
        Launch
      </Heading>
    </VStack>
  );
};

interface LaunchProps {
  onClick: Dispatch<SetStateAction<string>>;
}
export default Launch;
