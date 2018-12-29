import * as React from 'react'
import { connect } from 'react-redux'

class Search extends React.PureComponent<any, any> {

    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
    }

    handleFocusSearch = () => {
        console.log('focus');
        this.props.focusSearch();
    }

    handleBlurSearch = () => {
        console.log('blur');
        this.props.blurSearch();
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
                <span>{this.props.searchActive ? 'active' : 'not-active'}</span>
                <input 
                    onFocus={this.handleFocusSearch}
                    onBlur={this.handleBlurSearch}
                    value={this.state.search} 
                    onChange={this.updateSearch.bind(this)}
                    placeholder="Rechercher par nom ou par marque" type="text"/>
             </div>
        )
    }
}

const mapStateToProps = state => ({
    searchActive: state.container.searchActive
})

const mapDispatchToProps = dispatch => ({
    focusSearch: () => dispatch({type: "FOCUS_SEARCH"}),
    blurSearch: () => dispatch({type: 'BLUR_SEARCH'}),
    filterArticle: value => dispatch({type: 'FILTER_ARTICLE_BY', value})
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)