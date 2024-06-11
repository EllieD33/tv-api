import { useEffect, useState } from "react"
import EpisodeSelector from "./EpisodeSelector"
import EpisodeInfo from "./EpisodeInfo"


function EpisodeDisplay() {
    return <section className="border">
        <h2>Episode</h2>
        <EpisodeSelector />
        <EpisodeInfo />
    </section>
}

export default EpisodeDisplay