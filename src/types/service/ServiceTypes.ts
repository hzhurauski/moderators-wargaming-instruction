import { ResultCodesEnum } from 'service'

export type ResponseType<M = []> = {
  comments: M
  resultCode: ResultCodesEnum
}
