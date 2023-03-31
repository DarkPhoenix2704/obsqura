import { useCountdown } from "@app/hooks/useCountDown";
import { Flex, Heading, Image, VStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const HomeView = () => {
  const [days, hours, minutes, seconds] = useCountdown("Apr 27, 2023 00:00:00");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        length: 0.8,
        type: "spring",
        stiffness: 260,
        damping: 30,
      }}
    >
      <VStack
        justifyContent="center"
        width="100vw"
        height="100vh"
        gap="20px"
        backgroundImage="/bgFinal.png"
      >
        <Image src="/logo.png" alt="Obsqura 23" width="70%" />
        <Flex
          justifyContent="center"
          flexWrap="wrap"
          gap={{
            base: "20px",
          }}
        >
          <VStack>
            <Heading
              fontSize={{
                base: "48px",
                md: "64px",
              }}
              textColor="#FFFFFF"
              fontFamily="Clash Display"
            >
              {days}
            </Heading>
            <Text
              fontSize={{
                base: "24px",
                md: "32px",
              }}
              textColor="#FFFFFF"
              fontFamily="Clash Display"
              style={{
                marginTop: "-10px",
              }}
            >
              Days
            </Text>
          </VStack>
          <VStack>
            <Heading
              fontSize={{
                base: "48px",
                md: "64px",
              }}
              textColor="#FFFFFF"
              fontFamily="Clash Display"
            >
              {hours}
            </Heading>
            <Text
              fontSize={{
                base: "24px",
                md: "32px",
              }}
              textColor="#FFFFFF"
              fontFamily="Clash Display"
              style={{
                marginTop: "-10px",
              }}
            >
              Hours
            </Text>
          </VStack>
          <VStack>
            <Heading
              fontSize={{
                base: "48px",
                md: "64px",
              }}
              textColor="#FFFFFF"
              fontFamily="Clash Display"
            >
              {minutes}
            </Heading>
            <Text
              fontSize={{
                base: "24px",
                md: "32px",
              }}
              textColor="#FFFFFF"
              fontFamily="Clash Display"
              style={{
                marginTop: "-10px",
              }}
            >
              Minutes
            </Text>
          </VStack>
          <VStack>
            <Heading
              fontSize={{
                base: "48px",
                md: "64px",
              }}
              textColor="#FFFFFF"
              fontFamily="Clash Display"
            >
              {seconds}
            </Heading>
            <Text
              fontSize={{
                base: "24px",
                md: "32px",
              }}
              textColor="#FFFFFF"
              fontFamily="Clash Display"
              style={{
                marginTop: "-10px",
              }}
            >
              Seconds
            </Text>
          </VStack>
        </Flex>
      </VStack>
    </motion.div>
  );
};

export default HomeView;
