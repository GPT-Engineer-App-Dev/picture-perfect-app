import { useState, useRef } from "react";
import { Box, Button, Container, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const formatTime = (time) => {
    const milliseconds = `0${time % 1000}`.slice(-3);
    const seconds = `0${Math.floor(time / 1000) % 60}`.slice(-2);
    const minutes = `0${Math.floor(time / 60000) % 60}`.slice(-2);
    const hours = `0${Math.floor(time / 3600000)}`.slice(-2);
    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  };

  const handleStartStop = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
    } else {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setIsRunning(false);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="black">
      <VStack spacing={4}>
        <Box bg="black" color="white" p={4} borderRadius="md" boxShadow="md">
          <Text fontSize="4xl" fontFamily="monospace">
            {formatTime(time)}
          </Text>
        </Box>
        <Button colorScheme="yellow" onClick={handleStartStop}>
          {isRunning ? "Stop" : "Start"}
        </Button>
        <Button colorScheme="yellow" onClick={handleReset}>
          Reset
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;