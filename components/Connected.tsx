import { FC } from 'react'
import {
    Button,
    Container,
    Heading,
    HStack,
    Text,
    VStack,
    Image,
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const Connected: FC = () => {
    return (
        <VStack spacing={20}>
            <Container>
                <VStack spacing={8}>
                    <Heading
                        color='white'
                        as='h1'
                        size='2x1'
                        noOfLines={1}
                        textAlign='center'
                    >
                        Welcome Guldspy.
                    </Heading>

                    <Text color='bodyText' fontSize='x1' textAlign='center'>
                        Each guldspy is randomly generated and can be staked to receive
                        <Text as='b'> $GDY</Text> Use your <Text as='b'> $GDY</Text> to
                        upgrade your guldspy and receive perks within the community!
                    </Text>
                </VStack>
            </Container>

            <HStack spacing={10}>
            <Image src="avatar1.png" alt="" />
            <Image src="avatar2.png" alt="" />
            <Image src="avatar3.png" alt="" />
            <Image src="avatar4.png" alt="" />
            <Image src="avatar5.png" alt="" />
            </HStack>

            <Button bgColor='accent' color='white' maxW='380px'>
                <HStack>
                    <Text>mint guldspy</Text>
                    <ArrowForwardIcon />
                </HStack>
            </Button>
        </VStack>
    )
}

export default Connected