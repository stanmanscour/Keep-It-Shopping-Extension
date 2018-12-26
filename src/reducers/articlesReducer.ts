const initialState = {
    articles: [
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
    filterText: 'all'
}

export default function articlesReducer(state = initialState, action){
    switch(action.type){
        case 'TOGGLE_ARTICLE_LIKE':
            state.articles = [...state.articles];
            state.articles[action.id] = { ...state.articles[action.id]};
            state.articles[action.id].liked = !state.articles[action.id].liked;
            return { ...state };
        case 'FILTER_ARTICLE':
            state.filterText = action.text;
            return { ...state };
        default: 
        return state
    }
}