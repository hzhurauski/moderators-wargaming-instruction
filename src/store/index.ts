import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { Action, createStore, applyMiddleware, combineReducers } from 'redux'
import authReducer from 'store/authReducer'
import commentReducer from 'store/commentReducer'
import appReducer from 'store/appReducer'

type RootReducersType = typeof rootReducers
export type AppStateType = ReturnType<RootReducersType>
export type DispatchType = typeof store.dispatch
export type InferActionsType<T> = T extends {
  [key: string]: (...args: any[]) => infer U
}
  ? U
  : never
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
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
