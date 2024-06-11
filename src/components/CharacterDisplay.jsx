import { useEffect, useState } from "react";
import { Flex, Heading, Button, ButtonGroup, Text } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { useTheme } from "@chakra-ui/react";
import CharacterCard from "./CharacterCard";
import { fetchCast } from "../utils/api";

function CharacterDisplay() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetchCast().then((castData) => {
            setCharacters(castData)
        })
    }, [])

    const theme = useTheme()

    return <section >
        <Flex direction="column"
                p={4}
                mx={2}
                my={4}
                border="2px"
                borderColor={theme.colors.custom.dark }>
            <Heading as="h2">Characters</Heading>
            <Flex>
                {
                    characters.filter((character, index) => index < 4).map((character) => {
                        return <CharacterCard key={character.character.id} character={character} />
                    })
                }
            </Flex>
            <ButtonGroup variant="outline" spacing="80%" mt={4}>
                <Button borderColor={theme.colors.custom[700]} leftIcon={<ArrowLeftIcon />} >Prev</Button>
                <Button borderColor={theme.colors.custom[700]} rightIcon={<ArrowRightIcon />} >Next</Button>
            </ButtonGroup>
        </Flex>
    </section>
}

export default CharacterDisplay