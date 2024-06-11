import { useEffect, useState } from "react"
import EpisodeSelector from "./EpisodeSelector"
import EpisodeInfo from "./EpisodeInfo"
import { fetchAllEpisodes } from "../utils/api";


function EpisodeDisplay() {
    const [episodeData, setEpisodeData] = useState()
    const [episodeList, setEpisodeList] = useState()
    useEffect(() => {
        fetchAllEpisodes().then((episodeListData) => {
            setEpisodeList(episodeListData)
            setEpisodeData(episodeListData[episodeListData.length - 1])
        })
    }, []);

    return <section className="border">
        <h2>Episodes</h2>
        {episodeList && episodeData && (
                <>
                    <EpisodeSelector episodeList={episodeList} episodeData={episodeData} />
                    <EpisodeInfo episodeData={episodeData} />
                </>
            )}
            {!episodeList && <p>Loading...</p>}
    </section>
}

export default EpisodeDisplay