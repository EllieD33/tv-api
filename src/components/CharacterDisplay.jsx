import { useEffect, useState } from "react";
import { Flex, Heading, Button, ButtonGroup } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useTheme } from "@chakra-ui/react";
import CharacterCard from "./CharacterCard";
import { fetchCast } from "../utils/api";

function CharacterDisplay() {
    const [characters, setCharacters] = useState([]);
    const [firstCharacter, setFirstCharacter] = useState(0);
    const [lastCharacter, setLastCharacter] = useState(4);

    useEffect(() => {
        fetchCast().then((castData) => {
            setCharacters(castData);
        });
    }, []);

    const theme = useTheme();

    const updateIndices = (step) => {
        setFirstCharacter((prevFirst) => {
            const newFirst =
                (prevFirst + step + characters.length) % characters.length;
            return newFirst;
        });
        setLastCharacter((prevLast) => {
            const newLast =
                (prevLast + step + characters.length) % characters.length;
            return newLast;
        });
    };

    const handleNext = () => updateIndices(4);
    const handlePrevious = () => updateIndices(-4);

    const getCards = () => {
        if (firstCharacter < lastCharacter) {
            return characters.slice(firstCharacter, lastCharacter);
        }
        return [
            ...characters.slice(firstCharacter),
            ...characters.slice(0, lastCharacter),
        ];
    };

    return (
        <section>
            <Flex
                direction="column"
                p={4}
                mx={2}
                my={4}
                border="2px"
                borderColor={theme.colors.custom.dark}
            >
                <Heading as="h2">Characters</Heading>
                <Flex>
                    {getCards().map((character) => (
                        <CharacterCard
                            key={character.character.id}
                            character={character}
                        />
                    ))}
                </Flex>
                <ButtonGroup variant="outline" spacing="80%" mt={4}>
                    <Button
                        onClick={handlePrevious}
                        borderColor={theme.colors.custom[700]}
                        leftIcon={<ArrowLeftIcon />}
                    >
                        Prev
                    </Button>
                    <Button
                        onClick={handleNext}
                        borderColor={theme.colors.custom[700]}
                        rightIcon={<ArrowRightIcon />}
                    >
                        Next
                    </Button>
                </ButtonGroup>
            </Flex>
        </section>
    );
}

export default CharacterDisplay;
