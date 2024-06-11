import { useEffect, useState } from "react"
import EpisodeSelector from "./EpisodeSelector"
import EpisodeInfo from "./EpisodeInfo"
import { fetchAllEpisodes } from "../utils/api";


function EpisodeDisplay() {
    const [episodeData, setEpisodeData] = useState();
    const [episodeList, setEpisodeList] = useState();
    const [selectedSeason, setSelectedSeason] = useState();
    const [selectedEpisode, setSelectedEpisode] = useState();

    useEffect(() => {
        fetchAllEpisodes().then((episodeListData) => {
            setEpisodeList(episodeListData);
            const lastestEpisode = episodeListData[episodeListData.length - 1]
            setEpisodeData(lastestEpisode);
            setSelectedSeason(lastestEpisode.season);
            setSelectedEpisode(lastestEpisode.number);
        })
    }, []);

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
                (episode) => episode.season === selectedSeason && episode.number === selectedEpisode
            );
            if (selectedEpisodeData) {
                setEpisodeData(selectedEpisodeData);
            }
        }
    }, [episodeList, selectedEpisode]);

    return <section className="border">
        <h2>Episodes</h2>
        {episodeList && episodeData && (
                <>
                    <EpisodeSelector 
                        episodeList={episodeList}
                        selectedSeason={selectedSeason}
                        selectedEpisode={selectedEpisode}
                        handleSeasonSelection={handleSeasonSelection}
                        handleEpisodeSelection={handleEpisodeSelection} />
                    <EpisodeInfo episodeData={episodeData} />
                </>
            )}
            {!episodeList && <p>Loading...</p>}
    </section>
}

export default EpisodeDisplay