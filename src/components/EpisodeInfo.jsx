import { stripHtmlTags } from "../utils/helpers";

function EpisodeInfo({ episodeData }) {
    return (
        <article className="border flex-container">
            {episodeData ? (
                <>
                    <div className="flex-container column">
                        <h3>{episodeData.name}</h3>
                        <p>
                            Season {episodeData.season}, Episode{" "}
                            {episodeData.number}
                        </p>
                        <p>{stripHtmlTags(episodeData.summary)}</p>
                        <p>
                            <strong>Aired:</strong> {episodeData.airdate}
                        </p>
                    </div>
                    <img
                        src={episodeData.image.medium}
                        alt={`Still from episode ${episodeData.number} of season ${episodeData.season}`}
                    />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </article>
    );
}

export default EpisodeInfo;
