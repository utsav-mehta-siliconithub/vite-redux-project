import axios from 'axios';
export const FETCH_TODOS = 'FETCH_TODOS';

export const getAllFlights = () => {

    const request = axios.get('https://jsonplaceholder.typicode.com/posts');
    return {
        type: FETCH_TODOS,
        payload: { data: request.then((data) => { return data.data }) }
    };
}