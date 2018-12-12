import * as React from "react"
import * as ReactDOM from "react-dom"
import ArticlesContainer from '../components/ArticlesContainer'

chrome.runtime.sendMessage({}, (response) => {
    var checkReady = setInterval(() => {
        if (document.readyState === "complete") {
            clearInterval(checkReady)
            console.log("We're in the injected content script!")
        }
    })
})



class App extends React.Component {

    articles = [
        {name: 'ASOS DESIGN - Socquettes invisibles - Ton chair moyen', price: '4,99 €', source: 'Asos'},
        {name: 'Sixth June - Pantalon de jogging - Noir', price: '58,99 €', source: 'Asos'}
    ]

    render() {
        return (
            <div className="KPTAPP-container">
                <ArticlesContainer articles={this.articles}/>
            </div>
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

