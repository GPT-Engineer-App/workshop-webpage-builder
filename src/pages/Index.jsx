import React from "react";
import { Box, Heading, Text, Stack, Container, Button, SimpleGrid, Image } from "@chakra-ui/react";
import { FaTools, FaLaptop, FaHeadset } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Stack spacing={8} align="center" textAlign="center">
            <Heading as="h1" size="2xl">
              Welcome to the Computer Workshop
            </Heading>
            <Text fontSize="xl" maxW="600px">
              We provide top-notch computer repair services, upgrades, and technical support for all your computing needs.
            </Text>
            <Button colorScheme="blue" size="lg">
              Book an Appointment
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Services section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" textAlign="center" mb={10}>
            Our Services
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box textAlign="center">
              <FaTools size={48} />
              <Heading as="h3" size="lg" mt={4}>
                Computer Repair
              </Heading>
              <Text mt={4}>We fix all types of computer issues, from hardware failures to software problems.</Text>
            </Box>
            <Box textAlign="center">
              <FaLaptop size={48} />
              <Heading as="h3" size="lg" mt={4}>
                Upgrades & Maintenance
              </Heading>
              <Text mt={4}>Upgrade your computer's performance with our hardware and software solutions.</Text>
            </Box>
            <Box textAlign="center">
              <FaHeadset size={48} />
              <Heading as="h3" size="lg" mt={4}>
                Technical Support
              </Heading>
              <Text mt={4}>Our expert technicians are ready to assist you with any technical issues.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* About section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Image src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHJlcGFpciUyMHRlY2huaWNpYW58ZW58MHx8fHwxNzEwOTAyOTA3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Computer repair technician" />
            </Box>
            <Box>
              <Heading as="h2" size="xl" mb={4}>
                About Us
              </Heading>
              <Text fontSize="lg">The Computer Workshop has been providing reliable computer services for over a decade. Our team of skilled technicians is dedicated to delivering the best solutions for your computing needs. We pride ourselves on our fast turnaround times and excellent customer service.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Contact section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" textAlign="center" mb={10}>
            Contact Us
          </Heading>
          <Stack spacing={4} align="center">
            <Text fontSize="lg">Ready to get started? Contact us today to schedule an appointment or inquire about our services.</Text>
            <Button colorScheme="blue" size="lg">
              Get in Touch
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
