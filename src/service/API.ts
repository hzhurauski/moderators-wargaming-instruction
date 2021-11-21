import axios from 'axios'
import { REACT_APP_API } from 'config'
import { CommentType, ResponseType } from 'types/Types'

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}

export const instance = axios.create({
  baseURL: REACT_APP_API,
})

export const commentAPI = {
  getComments() {
    return instance
      .get<ResponseType<Array<CommentType>>>('comments')
      .then((res) => res.data)
  },
}
