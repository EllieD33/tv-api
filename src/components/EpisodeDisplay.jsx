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
        <h2>Episode</h2>
        <EpisodeSelector />
        <EpisodeInfo episodeData={episodeData} />
    </section>
}

export default EpisodeDisplay