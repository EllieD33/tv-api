import { useEffect, useState } from "react";
import { Flex, Heading, Button, ButtonGroup, Text } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { useTheme } from "@chakra-ui/react";
import CharacterCard from "./CharacterCard";
import { fetchCast } from "../utils/api";

function CharacterDisplay() {
    const [characters, setCharacters] = useState([]);
    const [firstCharacter, setFirstCharacter] = useState(0)
    const [lastCharacter, setLastCharacter] = useState(4)

    useEffect(() => {
        fetchCast().then((castData) => {
            setCharacters(castData)
        })
    }, [])

    const theme = useTheme()

    const handleNext = () => {
        setFirstCharacter((prevFirst) => {
            const newFirst = (prevFirst + 4 + characters.length) % characters.length;
            console.log(newFirst, 'first (next)')
            return newFirst
        })
        setLastCharacter((prevLast) => {
            const newLast = (prevLast + 4 + characters.length) % characters.length;
            console.log(newLast, 'last (next)')
            return newLast
        })
    }

    const handlePrevious = () => {
        setFirstCharacter((prevFirst) => {
            const newFirst = (prevFirst - 4 + characters.length) % characters.length;
            console.log(newFirst, 'first (prev)')
            return newFirst
        })
        setLastCharacter((prevLast) => {
            const newLast = (prevLast - 4 + characters.length) % characters.length;
            console.log(newLast, 'last (prev)')
            return newLast
        })
    }

    const getCards =  () => {
        if (firstCharacter < lastCharacter) {
            return characters.slice(firstCharacter, lastCharacter);
        }
        return [...characters.slice(firstCharacter), ...characters.slice(0, lastCharacter)];
    }

    return <section >
        <Flex direction="column"
                p={4}
                mx={2}
                my={4}
                border="2px"
                borderColor={theme.colors.custom.dark }>
            <Heading as="h2">Characters</Heading>
            <Flex>
                {getCards().map((character) => (
                        <CharacterCard key={character.character.id} character={character} />
                    ))}
            </Flex>
            <ButtonGroup variant="outline" spacing="80%" mt={4}>
                <Button onClick={handlePrevious} borderColor={theme.colors.custom[700]} leftIcon={<ArrowLeftIcon />} >Prev</Button>
                <Button onClick={handleNext} borderColor={theme.colors.custom[700]} rightIcon={<ArrowRightIcon />} >Next</Button>
            </ButtonGroup>
        </Flex>
    </section>
}

export default CharacterDisplay