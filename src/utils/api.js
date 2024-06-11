import axios from 'axios';

const greysApi = axios.create({ baseURL: "https://api.tvmaze.com/shows/67"})

export const fetchSeries= () => {
    return greysApi.get("").then(({ data }) => data);
}

export const fetchAllEpisodes = () => {
    return greysApi.get("/episodes").then(({ data }) => data);
}