import * as React from "react"
import * as ReactDOM from "react-dom"
import { createStore } from 'redux'
import ArticlesContainer from '../components/ArticlesContainer'
import Header from '../components/Header'
import { Provider } from 'react-redux'

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

function reducer(state = initialState, action){
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



const store = createStore(
    reducer
);

chrome.runtime.sendMessage({}, (response) => {
    var checkReady = setInterval(() => {
        if (document.readyState === "complete") {
            clearInterval(checkReady)
            console.log("We're in the injected content script!")
        }
    })
})

class App extends React.Component {

    

    render() {
        return (
            <Provider store={store}>
                <div className="KPTAPP-container">
                    <Header />
                    <ArticlesContainer/>
                </div>
            </Provider>
        )
    }
}

const div = document.createElement('div');
div.classList.add('KPTAPP');
document.body.appendChild(div);

ReactDOM.render(
    <App />,
    div
)
//console.log()

