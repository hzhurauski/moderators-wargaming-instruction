import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { Action, createStore, applyMiddleware, combineReducers, compose } from 'redux';
import authReducer from './authReducer';
import commentReducer from './commentReducer';
import appReducer from './appReducer';


type RootReducersType = typeof rootReducers
export type AppStateType = ReturnType<RootReducersType>
export type InferActionsType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>



let rootReducers = combineReducers({
    authPage: authReducer,
    comment: commentReducer,
    app: appReducer
})


/* const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose */
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware))


export default store