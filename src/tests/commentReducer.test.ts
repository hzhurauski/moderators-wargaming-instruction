import commentReducer, { actions, InitialStateType } from 'store/commentReducer'
import { CommentType } from 'types/comment/CommentType'

let state: InitialStateType

beforeEach(() => {
  state = {
    isSubmitting: false,
    message: '',
    comments: [] as CommentType[],
  }
})

test('COMMENTS', async () => {
  const response = [
    {
      name: 'Пользователь',
      message: 'Когда будут добавлены новые сети?',
      isAdmin: false,
      id: 0,
      date: '12.08.2021',
    },
    {
      name: 'Ответ администратора сайта:',
      message: 'Совсем скоро, работаем над этим!',
      isAdmin: true,
      id: 1,
      date: '12.08.2021',
    },
  ] as CommentType[]

  const newState = commentReducer(state, actions.setComments(response))

  expect(newState.comments.length).toBe(2)
})

test('COMMENT', () => {
  const instance = {
    name: 'name',
    message: 'message',
    isAdmin: true,
    id: 0,
    date: '12.08.2021',
  }

  const newState = commentReducer(state, actions.setComment(instance))

  expect(newState.comments[0]).toStrictEqual(instance)
})

test('IS_SUBMITTING', () => {
  const newState = commentReducer(state, actions.setIsSubmitting(true))

  expect(newState.isSubmitting).toBeTruthy()
})
