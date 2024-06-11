import {
    Card,
    CardBody,
    CardHeader,
    Text,
    Image,
    Heading,
} from "@chakra-ui/react";

function CharacterCard() {
    return (
        <Card mx={2} >
            <CardHeader>
                <Heading as="h3" fontSize="xl">
                    Character name
                </Heading>
            </CardHeader>
            <CardBody>
                <Image />
                <Text>info</Text>
            </CardBody>
        </Card>
    );
}

export default CharacterCard;
