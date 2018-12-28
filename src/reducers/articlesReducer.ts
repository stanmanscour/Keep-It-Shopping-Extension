const initialState = {
    list: [
        {
            name: 'asos DESIGN - Socquettes invisibles - Ton chair moyen', 
            price: '5,45 €', 
            source: 'mango', 
            liked: false
        },
        {
            name: 'Sixth June - Pantalon de jogging - Noir', 
            price: '58,99 €', 
            source: 'asos', 
            liked: true
        },
        {
            name: 'asos DESIGN - Socquettes invisibles - Ton chair moyen', 
            price: '5,45 €', 
            source: 'zara', 
            liked: false
        },
        {
            name: 'Sixth June - Pantalon de jogging - Noir', 
            price: '58,99 €', 
            source: 'asos', 
            liked: true
        },
        {
            name: 'asos DESIGN - Socquettes invisibles - Ton chair moyen', 
            price: '5,45 €', 
            source: 'zara', 
            liked: false
        },
        {
            name: 'Sixth June - Pantalon de jogging - Noir', 
            price: '58,99 €', 
            source: 'mango', 
            liked: true
        },
        {
            name: 'asos DESIGN - Socquettes invisibles - Ton chair moyen', 
            price: '5,45 €', 
            source: 'zara', 
            liked: false
        },
        {
            name: 'Sixth June - Pantalon de jogging - Noir', 
            price: '58,99 €', 
            source: 'asos', 
            liked: true
        }
    ],
    filterText: 'all',
    filterValue: ''
}

export default function articlesReducer(state = initialState, action){
    switch(action.type){
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
        default: 
        return state
    }
}