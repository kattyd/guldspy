import { Box, Center, Spacer, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'
import Disconnected from '@/components/Disconnected'
import { useWallet } from '@solana/wallet-adapter-react'
import Connected from '@/components/Connected'

const Home: NextPage = () => {
  const { connected } = useWallet()

  return (
    <div className={styles.container}>
      <Head>
        <title>Guldspy</title>
        <meta name='The NFT Collection for Guldspy' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box 
        w='full'
        h='calc(100vh)'
        bgImage={'url(/home-background.svg)'}
        backgroundPosition='center' 
      >
        <Stack w='full' h='calc(100vh)' justify='center'>
                                   {/* NavBar */}
                                   <NavBar />
        <Spacer />
        <Center>{connected ? <Connected /> : <Disconnected />}
                     { /* If connected, the second view, otherwise the first */ }
            </Center>
        <Spacer />

        <Center>
          <Box marginBottom={4} color='white'>
            <a
              href='https://twitter.com/_buildspace'
              target='blank'
              rel='noopener noreferrer'
            >
              built with @_buildspace x @diretnan
            </a>
          </Box>
        </Center>
        </Stack>
        </Box>
    </div>
  )
}

export default Home 