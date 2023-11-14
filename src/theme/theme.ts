// グローバルなthemeの指定

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        // ここにCSSを記述
        backgroundColor: 'gray.100', // gray.100はChakraUIで提供されているGray100の色を指定
        color: 'gray.800'
      }
    }
  }
});

export default theme;
