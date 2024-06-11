import { useEffect, useState } from "react";
import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import { fetchSeries } from "../utils/api";
import { stripHtmlTags } from "../utils/helpers";

function SeriesInfo() {
    const [seriesData, setSeriesData] = useState(null);

    useEffect(() => {
        fetchSeries().then((greysData) => setSeriesData(greysData));
    }, []);

    return (
        <article>
            <Flex
                direction="column"
                p={4}
                mx={2}
                border="2px"
                borderColor="gray.400"
            >
                <Heading as="h2" size="xl" p={4}>
                    About Grey's Anatomy
                </Heading>
                <Flex>
                    {seriesData ? (
                        <>
                            <Flex direction="column" px={4}>
                                <Text fontSize="lg" py={4}>
                                    {stripHtmlTags(seriesData.summary)}
                                </Text>
                                <Text fontSize="md" py={2}>
                                    <Text as="span" fontWeight="bold">
                                        Genres:{" "}
                                    </Text>
                                    {seriesData.genres.join(" | ")}
                                </Text>
                                <Text fontSize="md" py={2}>
                                    <Text as="span" fontWeight="bold">
                                        Rating:{" "}
                                    </Text>
                                    {seriesData.rating.average}
                                </Text>
                                <Text fontSize="md" py={2}>
                                    <Text as="span" fontWeight="bold">
                                        Running since:
                                    </Text>{" "}
                                    {seriesData.premiered}
                                </Text>
                            </Flex>
                            <Image
                                src={seriesData.image.medium}
                                alt="Head and shoulders images of Grey's Anatomy characters arranged inside the number 20, celebrating the show's 20th season."
                                boxSize="100%"
                                maxW="10%"
                                minW="200px"
                                aspectRatio={3 / 4}
                            />
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </Flex>
            </Flex>
        </article>
    );
}

export default SeriesInfo;
