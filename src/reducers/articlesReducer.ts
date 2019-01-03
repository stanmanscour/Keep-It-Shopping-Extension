const initialState = {
    list: [],
    filterText: 'all',
    filterValue: '',
    presentation: 'row'
}

export default function articlesReducer(state = initialState, action){
    switch(action.type){
        case 'STORE_ARTICLES':
            state.list = action.articles;
            return { ...state };
        case 'TOGGLE_ARTICLE_LIKE':
            state.list = [...state.list];
            state.list[action.id] = { ...state.list[action.id]};
            state.list[action.id].liked = !state.list[action.id].liked;
            return { ...state };
        case 'FILTER_ARTICLE':
            state.filterText = action.text;
            return { ...state };
        case 'FILTER_ARTICLE_BY':
            state.filterValue = action.value; 
            return { ...state };
        case 'CHANGE_ARTICLE_PRESENTATION':
            state.presentation = action.presentation;
            return { ...state };
        default: 
        return state
    }
}