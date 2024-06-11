import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import { stripHtmlTags, formatDate } from "../utils/helpers";

function EpisodeInfo({ episodeData }) {
    return (
        <article >
            {episodeData ? (
                <Flex direction="row" p={2} mt={2} border="2px"
                borderColor="gray.200">
                    <Flex direction="column" >
                        <Heading as="h3" fontSize="xl" >{episodeData.name}</Heading>
                        <Text>
                            Season {episodeData.season}, Episode{" "}
                            {episodeData.number}
                        </Text>
                        <Text py={2}>{stripHtmlTags(episodeData.summary)}</Text>
                        <Text>
                            <Text as="span" fontWeight="bold">Aired:</Text> {formatDate(episodeData.airdate)}
                        </Text>
                    </Flex>
                    <Image
                        src={episodeData.image.medium}
                        alt={`Still from episode ${episodeData.number} of season ${episodeData.season}`}
                        pl={2}
                    />
                </Flex>
            ) : (
                <p>Loading...</p>
            )}
        </article>
    );
}

export default EpisodeInfo;
