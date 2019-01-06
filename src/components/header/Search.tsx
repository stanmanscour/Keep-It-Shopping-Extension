import * as React from 'react'
import { connect } from 'react-redux'
import IconLoupe from '../../images/icons/loupe-grey'
import * as ActionCreator from '../../actions/actions'

class Search extends React.PureComponent<any, any> {

    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
    }

    handleFocusSearch = () => {
        this.props.focusSearch();
    }

    handleBlurSearch = () => {
        if (this.state.search === ''){
            this.props.blurSearch();
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
            <div className={`KPTAPP-headerSearch ${this.props.searchActive ? 'active': ''}`}>
                <label htmlFor="search">
                    <IconLoupe />
                </label>
                <input 
                    id="search"
                    className="KPTAPP-headerSearch__search"
                    onFocus={this.handleFocusSearch}
                    onBlur={this.handleBlurSearch}
                    value={this.state.search} 
                    onChange={this.updateSearch.bind(this)}
                    placeholder="ex: Ceinture, Asos..." type="text"/>
             </div>
        )
    }
}

const mapStateToProps = state => ({
    searchActive: state.container.researchActive
})

const mapDispatchToProps = dispatch => ({
    focusSearch: () => dispatch(ActionCreator.focusSearch()),
    blurSearch: () => dispatch(ActionCreator.blurSearch()),
    filterArticle: value => dispatch(ActionCreator.filterArticleBy(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)