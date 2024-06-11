import { useEffect, useState } from "react";
import { Flex, Heading, useTab } from "@chakra-ui/react";
import { theme } from "@chakra-ui/react";
import EpisodeSelector from "./EpisodeSelector";
import EpisodeInfo from "./EpisodeInfo";
import { fetchAllEpisodes } from "../utils/api";
import { useTheme } from "@emotion/react";

function EpisodeDisplay() {
    const [episodeData, setEpisodeData] = useState();
    const [episodeList, setEpisodeList] = useState();
    const [selectedSeason, setSelectedSeason] = useState();
    const [selectedEpisode, setSelectedEpisode] = useState();

    useEffect(() => {
        fetchAllEpisodes().then((episodeListData) => {
            setEpisodeList(episodeListData);
            const lastestEpisode = episodeListData[episodeListData.length - 1];
            setEpisodeData(lastestEpisode);
            setSelectedSeason(lastestEpisode.season);
            setSelectedEpisode(lastestEpisode.number);
        });
    }, []);

    const theme = useTheme()

    const handleSeasonSelection = (e) => {
        setSelectedSeason(parseInt(e.target.value));
        setSelectedEpisode(null);
    };

    const handleEpisodeSelection = (e) => {
        setSelectedEpisode(parseInt(e.target.value));
    };

    useEffect(() => {
        if (episodeList && selectedEpisode) {
            const selectedEpisodeData = episodeList.find(
                (episode) =>
                    episode.season === selectedSeason &&
                    episode.number === selectedEpisode
            );
            if (selectedEpisodeData) {
                setEpisodeData(selectedEpisodeData);
            }
        }
    }, [episodeList, selectedEpisode]);

    return (
        <article>
            <Flex
                direction="column"
                p={4}
                mx={2}
                my={4}
                border="2px"
                borderColor={theme.colors.custom.dark}
            >
                <Heading as="h2" size="xl">
                    Episodes
                </Heading>
                {episodeList && episodeData && (
                    <>
                        <EpisodeSelector
                            episodeList={episodeList}
                            selectedSeason={selectedSeason}
                            selectedEpisode={selectedEpisode}
                            handleSeasonSelection={handleSeasonSelection}
                            handleEpisodeSelection={handleEpisodeSelection}
                        />
                        <EpisodeInfo episodeData={episodeData} />
                    </>
                )}
                {!episodeList && <p>Loading...</p>}
            </Flex>
        </article>
    );
}

export default EpisodeDisplay;
