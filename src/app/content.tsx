import * as React from "react"
import * as ReactDOM from "react-dom"
import { createStore } from 'redux'
import Container from '../components/Container';
import { Provider } from 'react-redux'
import reducers from '../reducers/index'

const store = createStore(
    reducers
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

