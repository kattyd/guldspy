import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import WalletContextProvider from '@/components/WalletContextProvider'

import { extendTheme } from '@chakra-ui/react'

const colors = {
  background: '#698d60',
  accent: '#b73f33',
  bodyText: 'rgba(255,255,255,0.75',
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <WalletContextProvider>
        <Component {...pageProps} />
      </WalletContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
