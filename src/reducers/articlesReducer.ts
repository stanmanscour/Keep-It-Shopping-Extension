const initialState = {
    list: [],
    // list: [
    //     {
    //         name: 'Puma - Football NXT - Survêtement - Rouge 65558002', 
    //         price: '42,99 € €', 
    //         source: 'Asos', 
    //         liked: false,
    //         imageUrl: 'https://images.asos-media.com/products/puma-football-nxt-survetement-rouge-65558002/9260601-1-red?$XXL$&wid=513&fit=constrain'
    //     },
    //     {
    //         name: 'Trench double boutonnage', 
    //         price: '69,99 €', 
    //         source: 'Mango', 
    //         liked: true,
    //         imageUrl: 'https://st.mngbcn.com/rcs/pics/static/T4/fotos/outfit/S20/41083705_09-99999999_01.jpg?ts=1543401204634&imwidth=480&imdensity=2'
    //     },
    //     {
    //         name: 'Manteau en laine avec ceinture', 
    //         price: '99,99 €', 
    //         source: 'Mango', 
    //         liked: false,
    //         imageUrl: 'https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/41040888_91.jpg?ts=1541515601557&imwidth=480&imdensity=2'
    //     },
    //     {
    //         name: 'VESTE DE COSTUME À BOUTONNAGE CROISÉ EN CHINTZ CON...', 
    //         price: '69,95 €', 
    //         source: 'zara', 
    //         liked: true,
    //         imageUrl: "https://static.zara.net/photos///2018/I/0/2/p/1564/328/401/8/w/1920/1564328401_1_1_1.jpg?ts=1544802760137"
    //     },
    //     {
    //         name: 'SWEAT KANGOUROU DÉTAIL', 
    //         price: '25,95 EUR', 
    //         source: 'Zara', 
    //         liked: false,
    //         imageUrl: "https://static.zara.net/photos///2018/I/0/2/p/4087/405/301/2/w/1920/4087405301_1_1_1.jpg?ts=1542374039510"
    //     },
    //     {
    //         name: 'VESTE DE COSTUME TRAVELER DÉTAIL', 
    //         price: '69,95 €', 
    //         source: 'Zara', 
    //         liked: true,
    //         imageUrl: "https://static.zara.net/photos///2018/I/0/2/p/9621/314/401/2/w/1920/9621314401_1_1_1.jpg?ts=1534441948538"
    //     },
    //     {
    //         name: 'ASOS - Lot de 5 paires de chaussettes invisibles...', 
    //         price: '11,99 €', 
    //         source: 'Asos', 
    //         liked: false,
    //         imageUrl: "https://images.asos-media.com/products/asos-lot-de-5-paires-de-chaussettes-invisibles-a-petit-motif-gaufre/7466454-1-multi?$XXL$&wid=513&fit=constrain"
    //     },
    //     {
    //         name: 'Sixth June - Bomber à doublure imitation peau de...', 
    //         price: '109,90 €', 
    //         source: 'asos', 
    //         liked: true,
    //         imageUrl: "https://images.asos-media.com/products/sixth-june-bomber-a-doublure-imitation-peau-de-mouton-carreaux-rouges/10238432-1-red?$XXL$&wid=513&fit=constrain"
    //     }
    // ],
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