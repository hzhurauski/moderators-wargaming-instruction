import { AppStateType } from '../redux/redux'


export const changeTitleSelector = (state: AppStateType) => {
    return state.app.title
}