import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    // Chakra_UIを使うには、<ChakraProvider></ChakraProvider>で囲う必要がある
    <ChakraProvider>
      <Button colorScheme="teal">ボタン</Button>
    </ChakraProvider>
  );
}

export default App;
