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

const articleRandom = {
    id: "399xD534534545",
    articleSource: 'google.com',
    name: 'Manteau pour toi', 
    price: '99,99 €', 
    source: 'Mango', 
    liked: false,
    imageUrl: 'https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/41040888_91.jpg?ts=1541515601557&imwidth=480&imdensity=2'
  }

db.connect();

window.setTimeout(() => {
    
    db.storeNewItem(articleRandom)
}, 4000)
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

