import * as React from 'react'
import { connect } from 'react-redux'

class Search extends React.PureComponent<any, any> {

    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
    }

    updateSearch (event) {
        this.setState({
            search: event.target.value
        })
        this.props.filterArticle(event.target.value);
    }

    render(){
        return (
            <div className="KPTAPP-headerSearch">
                <input 
                    value={this.state.search} 
                    onChange={this.updateSearch.bind(this)}
                    placeholder="Rechercher par nom ou par marque" type="text"/>
             </div>
        )
    }
}

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => ({
    filterArticle: value => dispatch({type: 'FILTER_ARTICLE_BY', value})
})

export default connect(null, mapDispatchToProps)(Search)