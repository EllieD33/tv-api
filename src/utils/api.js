import axios from 'axios';

export const fetchSeries= () => {
    return axios.get(` https://api.tvmaze.com/lookup/shows?thetvdb=73762`).then(({ data }) => data);
}