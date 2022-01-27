import { getList } from "../redux/actions";
import axios from 'axios';

function getPosts() {
    return async (dispatch, store) => {
        let getData = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch(getList(getData.data))
    };
}

export default getPosts;