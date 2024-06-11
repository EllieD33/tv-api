import {
    Card,
    CardBody,
    Text,
    Image,
    Heading,
} from "@chakra-ui/react";

function CharacterCard({ character }) {
    return (
        <Card mx={2} >
            <CardBody>
                <Image src={character.character.image?.medium} fallbackSrc='https://placehold.co/600x400' alt={`Headshot of ${character.name}`} />
                <Heading as="h3" fontSize="xl">{character.character.name}</Heading>
                <Text>{character.person.name}</Text>
            </CardBody>
        </Card>
    );
}

export default CharacterCard;
