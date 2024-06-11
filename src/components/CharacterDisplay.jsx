import { useEffect, useState } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import CharacterCard from "./CharacterCard";
import { fetchCast } from "../utils/api";

function CharacterDisplay() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetchCast().then((castData) => {
            setCharacters(castData)
        })
    }, [])

    return <section >
        <Flex direction="column"
                p={4}
                mx={2}
                my={4}
                border="2px"
                borderColor="gray.400">
            <Heading as="h2">Characters</Heading>
            <Flex>
                {
                    characters.filter((character, index) => index < 4).map((character) => {
                        return <CharacterCard key={character.character.id} character={character} />
                    })
                }
            </Flex>
        </Flex>
    </section>
}

export default CharacterDisplay