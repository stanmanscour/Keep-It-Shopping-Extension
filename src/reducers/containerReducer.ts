const initialState = {
    open: false
}

export default function containerReducer(state = initialState, action){
    switch(action.type){
        case 'TOGGLE_CONTAINER':
            state.open = !state.open;
            return { ...state }
        default:
        return state
    }
}