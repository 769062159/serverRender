import { CHANGE_LOGIN } from './actiontypes'

const defaultState={
    login: false
}
export default (state = defaultState, action)=>{
    switch (action.type){
        case CHANGE_LOGIN:
            return {
                ...state,
                login: action.value
            }

        default:
            return state
    }
}