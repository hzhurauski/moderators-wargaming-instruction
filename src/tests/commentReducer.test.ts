import commentReducer, {
  actions,
  InitialStateType,
  TextareaRequestThunk,
} from './../redux/commentReducer'
import { commentAPI } from '../DAL/API'
import { ResultCodesEnum } from '../DAL/API'
import { CommentType, ResponseType } from '../types/Types'

jest.mock('../DAL/API')
const commentAPIMock = commentAPI as jest.Mocked<typeof commentAPI>

const response: ResponseType<Array<CommentType>> = {
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
  commentAPIMock.setComments.mockClear()
})

commentAPIMock.setComments.mockReturnValue(Promise.resolve(response))

let state: InitialStateType

beforeEach(() => {
  state = {
    isSubmitting: false,
    message: '',
    comments: [] as Array<CommentType>,
  }
})

test('get comments', async () => {
  const thunk = TextareaRequestThunk()

  await thunk(dispatchMock, getStateMock, {})

  expect(state.comments.length).toBe(2)
})

test('change message', () => {
  const NewState = commentReducer(state, actions.changeMessage('Success'))

  expect(NewState.message).toBe('Success')
})

test('is submitting', () => {
  const NewState = commentReducer(state, actions.commentSubmitting(true))

  expect(NewState.isSubmitting).toBeTruthy()
})
