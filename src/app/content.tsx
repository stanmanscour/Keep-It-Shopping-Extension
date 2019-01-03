import * as React from "react"
import * as ReactDOM from "react-dom"
import { createStore, applyMiddleware } from 'redux'
import Container from '../components/Container';
import { Provider } from 'react-redux'
import reducers from '../reducers'
import thunk from 'redux-thunk';
import { loadArticles } from '../actions/actions'
import db from '../API/firebase'

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);
store.dispatch(loadArticles() as any);

db.connect();
//db.writeUserData('perriot', {nom: 'escobar', prenom: 'pierre'})


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

