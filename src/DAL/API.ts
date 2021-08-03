import axios from 'axios'
import { CommentType, ResponseType } from '../types/Types'



export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}


export const instance = axios.create({
    baseURL: '',
    headers: {
        'API-KEY': ''
    }
})


export const commentAPI = {
    setComments() {
        /* return instance.get<ResponseType<Array<CommentType>>>('comment').then(res => res.data) */
        return {
            comments: [],
            resultCode: 0
        }
    }
}