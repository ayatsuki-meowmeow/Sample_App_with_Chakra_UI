import React from 'react';
import logo from './logo.svg';
import { Button, ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';

function App() {
  return (
    // Chakra_UIを使うには、<ChakraProvider></ChakraProvider>で囲う必要がある
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">ボタン</Button>
      <p>文字色確認</p>
    </ChakraProvider>
  );
}

export default App;
