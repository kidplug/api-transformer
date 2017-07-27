import axios from "axios";

export function search(type) {
    return dispatch => {
        return axios.get('http://localhost:3000/api/search/' + type);
    }
}