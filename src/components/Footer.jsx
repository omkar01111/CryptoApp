import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import founder from'../assets/omkar.jpg'

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whatsapp.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"} color={"White"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best cypto trading app in india,we provide our guidenc at
            very resanable prices
          </Text>
        </VStack>
        <VStack>
          <Avatar src={founder} boxSize={"28"} mt={["4", "8"]} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
