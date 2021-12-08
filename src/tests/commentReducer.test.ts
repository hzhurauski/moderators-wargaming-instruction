import commentReducer, {
  actions,
  InitialStateType,
  getCommentsThunk,
} from 'store/commentReducer'
import { commentAPI } from 'service'
import { ResultCodesEnum } from 'service'
import { CommentType } from 'types/comment/CommentType'
import { ResponseType } from 'types/service/ServiceType'

jest.mock('DAL/API')
const commentAPIMock = commentAPI as jest.Mocked<typeof commentAPI>

const response: ResponseType<CommentType[]> = {
  comments: [
    {
      name: 'Пользователь',
      message: 'Когда будут добавлены новые сети?',
      isAdmin: false,
      id: 1,
      date: '18.07.2021',
    },
    {
      name: 'Ответ администратора сайта:',
      message: 'Совсем скоро, работаем над этим!',
      isAdmin: true,
      id: 2,
      date: '18.07.2021',
    },
  ],
  resultCode: ResultCodesEnum.Success,
}

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
  dispatchMock.mockClear()
  getStateMock.mockClear()
  commentAPIMock.getCommentsThunk.mockClear()
})

commentAPIMock.getCommentsThunk.mockReturnValue(Promise.resolve(response))

let state: InitialStateType

beforeEach(() => {
  state = {
    isSubmitting: false,
    message: '',
    comments: [] as CommentType[],
  }
})

test('get comments', async () => {
  const thunk = getCommentsThunk()

  await thunk(dispatchMock, getStateMock, {})

  expect(state.comments.length).toBe(2)
})

test('change message', () => {
  const NewState = commentReducer(state, actions.changeMessage('Success'))

  expect(NewState.message).toBe('Success')
})

test('is submitting', () => {
  const NewState = commentReducer(state, actions.setIsSubmitting(true))

  expect(NewState.isSubmitting).toBeTruthy()
})
