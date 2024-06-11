import { Flex, Heading } from "@chakra-ui/react";
import CharacterCard from "./CharacterCard"

function CharacterDisplay() {
    return <section >
        <Flex direction="column"
                p={4}
                mx={2}
                my={4}
                border="2px"
                borderColor="gray.400">
            <Heading as="h2">Characters</Heading>
            <Flex>
                <CharacterCard />
                <CharacterCard />
                <CharacterCard />
            </Flex>
        </Flex>
    </section>
}

export default CharacterDisplay