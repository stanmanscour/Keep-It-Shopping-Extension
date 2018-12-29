const initialState = {
    open: false,
    researchActive: false
}

export default function containerReducer(state = initialState, action){
    switch(action.type){
        case 'TOGGLE_CONTAINER':
            state.open = !state.open;
            return { ...state }
        case 'FOCUS_SEARCH':
            console.log('focus');
            state.researchActive = true;
            return { ...state};
        case 'BLUR_SEARCH': 
            console.log('blur');
            state.researchActive = false;
            return { ...state}
        default:
        return state
    }
}