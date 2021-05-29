import axios from "axios";

// person api function
export const getPerson = (id) => {
    return axios.get(`https://swapi.dev/api/people/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return false
    })
}

// results api function
export const getResults = (search) => {
    return axios.get(`https://swapi.dev/api/people/?search=${search}`).then((res) => {
        return res.data.results[0];
    }).catch((err) => {
        return false;
    })
}

