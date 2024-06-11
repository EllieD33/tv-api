import { Flex, Heading, Icon, Spacer } from "@chakra-ui/react"
import { FaStethoscope } from "react-icons/fa6";
function Header() {
    return <header>
            <Flex justifyContent="center" alignItems="center" m={2}>
                <Icon as={FaStethoscope} boxSize={16} justifySelf="start"  />
                <Spacer />
                <Heading as="h1" size="3xl" textAlign="center" p={4}>
                    Grey's Anatomy
                </Heading>
                <Spacer />
                <Spacer />
            </Flex>
        </header>
}

export default Header