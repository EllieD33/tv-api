import {
    Card,
    CardBody,
    Text,
    Image,
    Heading,
    Icon, 
    Flex
} from "@chakra-ui/react";
import { MdInsertPhoto } from "react-icons/md";

function CharacterCard({ character }) {

    const PlaceholderIcon = () => {
        <Flex align="center"
        justify="center"
        w="170px"
        h="240px"
        bg="gray.200" >
            <Icon as={MdInsertPhoto} w={8} h={8} color="gray.400"/>
        </Flex>
    }

    return (
        <Card mx={2} >
            <CardBody>
                <Image w="170px" h="240px" src={character.character.image?.medium} fallbackSrc={PlaceholderIcon()} alt={`Headshot of ${character.name}`} />
                <Heading as="h3" fontSize="xl">{character.character.name}</Heading>
                <Text>{character.person.name}</Text>
            </CardBody>
        </Card>
    );
}

export default CharacterCard;
