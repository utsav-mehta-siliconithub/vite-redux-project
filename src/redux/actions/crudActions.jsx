// import axios from 'axios';
import { FETCH_TODOS } from './types';

export const getList = (value) => {
    return {
        type: FETCH_TODOS,
        payload: { data: value }
    };
}