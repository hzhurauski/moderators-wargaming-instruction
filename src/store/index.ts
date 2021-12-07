import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers, AnyAction } from 'redux'
import authReducer from 'store/authReducer'
import commentReducer from 'store/commentReducer'
import appReducer from 'store/appReducer'

export type AppStateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch
export type InferActionsType<T> = T extends {
  [key: string]: (...args: never[]) => infer U
}
  ? U
  : never
export type BaseThunkType<A extends AnyAction, R = Promise<void>> = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
>

const rootReducers = combineReducers({
  authPage: authReducer,
  comment: commentReducer,
  app: appReducer,
})

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware))

export default store
