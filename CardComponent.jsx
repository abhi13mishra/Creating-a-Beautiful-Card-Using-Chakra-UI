import React from 'react';
import {
  Box,
  Image,
  Heading,
  Text,
  VStack,
  useColorModeValue
} from '@chakra-ui/react';

const CardComponent = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const shadow = useColorModeValue('md', 'dark-lg');

  return (
    <Box
      w={['90%', '300px']}
      bg={bg}
      p={5}
      borderRadius="lg"
      boxShadow={shadow}
      mx="auto"
      mt="10"
      transition="0.3s"
      _hover={{ transform: 'scale(1.03)', boxShadow: 'xl' }}
    >
      <VStack spacing={4} align="center">
        <Heading size="md">Beautiful Chakra Card</Heading>
        <Image
          src="https://bit.ly/2Z4KKcF"
          alt="Sample Image"
          borderRadius="full"
          boxSize="120px"
        />
        <Text fontSize="sm" textAlign="center" color="gray.600">
          This is a responsive Chakra UI card with custom design, rounded corners, and shadow.
        </Text>
      </VStack>
    </Box>
  );
};

export default CardComponent;