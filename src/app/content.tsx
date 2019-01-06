import * as React from "react"
import * as ReactDOM from "react-dom"
import { createStore, applyMiddleware } from 'redux'
import Container from '../components/Container';
import { Provider } from 'react-redux'
import reducers from '../reducers'
import thunk from 'redux-thunk';
import { loadArticles, storeNewArticle } from '../actions/actions'
import db from '../API/firebase'
import domFinder from '../util/domFinder'

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);



db.connect()

// window.setTimeout(() => {
//     domFinder.findElement();
// }, 4000)

window.setTimeout(() => {
    store.dispatch(loadArticles() as any);
}, 4000)

window.setTimeout(() => {
    let newArray = domFinder.findElement();
    if (typeof newArray === 'object'){
        store.dispatch(storeNewArticle(newArray) as any);
    }
}, 6000)

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
                <Container />
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

