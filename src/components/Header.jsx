import { Flex, Heading, Icon, Spacer } from "@chakra-ui/react";
import { FaStethoscope } from "react-icons/fa6";
import { useTheme } from "@chakra-ui/react";

function Header() {
const theme = useTheme();

    return <header>
            <Flex justifyContent="center" alignItems="center" color="white" p={2} mb={2} backgroundColor={theme.colors.custom.dark}>
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