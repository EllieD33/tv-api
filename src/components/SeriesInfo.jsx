import { useEffect, useState } from "react";
import { fetchSeries } from "../utils/api";
import { stripHtmlTags } from "../utils/helpers";

function SeriesInfo() {
    const [seriesData, setSeriesData] = useState(null);

    useEffect(() => {
        fetchSeries().then((greysData) => setSeriesData(greysData));
    }, []);

    console.log(seriesData);

    return (
        <section className="border flex-container column">
            <h2>About Grey's Anatomy</h2>
            <div className="flex-container">
                {seriesData ? (
                    <>
                        <div className="flex-container column">
                            <p>{stripHtmlTags(seriesData.summary)}</p>
                            <p><strong>Genres:</strong> {seriesData.genres.join(' | ')}</p>
                            <p><strong>Rating: </strong>{seriesData.rating.average}</p>
                            <p><strong>Running since:</strong> {seriesData.premiered}</p>
                        </div>
                        <img
                            src={seriesData.image.medium}
                            alt="Head and shoulders images of Grey's Anatomy characters arranged inside the number 20, celebrating the show's 20th season."
                        />
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </section>
    );
}

export default SeriesInfo;
