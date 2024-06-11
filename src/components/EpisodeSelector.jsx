import { Flex, Text, Select } from "@chakra-ui/react";

function EpisodeSelector({ episodeList, selectedSeason, selectedEpisode, handleSeasonSelection, handleEpisodeSelection }) {
    const numberOfSeasons = episodeList[episodeList.length -1].season

    const episodeCounts = {}
    for (let i = 1; i <= numberOfSeasons; i++) {
        episodeCounts[i] = 0;
    }
    episodeList.forEach((episode) => {
        episodeCounts[episode.season] += 1;
    })

    const episodesForSelectedSeason = Array.from({ length: episodeCounts[selectedSeason] }, (_, index) => (
        <option key={index + 1} value={index + 1}>Episode {index + 1}</option>
    ));

    return <Flex direction="column">
        <Text pl={1} >Select an episode:</Text>
        <form>
            <Flex >
                <Select mr={1} name="season-selector" id="season-selector" value={selectedSeason} onChange={handleSeasonSelection}>
                    {Array.from({ length: numberOfSeasons }, (_, index) => (
                        <option key={index + 1} value={index + 1}>Season {index + 1}</option>
                    ))
                    }
                </Select>
                <Select name="episode-selector" id="episode-selector" value={selectedEpisode || ""} onChange={handleEpisodeSelection}>
                <option value="">Select an episode</option>
                {episodesForSelectedSeason}
                </Select>
            </Flex>
        </form>
    </Flex>
}

export default EpisodeSelector