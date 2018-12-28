import * as React from 'react'
import { connect } from 'react-redux'

class NavigationArticles extends React.Component<any> {

    constructor(props){
        super(props);
        this.filterArticles = this.filterArticles.bind(this);
    }

    filterArticles = (filter) => {
        this.props.dispatch({type: 'FILTER_ARTICLE', text: filter});
    }

    render(){
        return(
            <div className="KPTAPP-navigation-articles">
                <button className={this.props.filter === 'all' ? 'active' : ''} onClick={() => this.filterArticles('all')}>v ({this.props.articlesLength})</button>
                <button className={this.props.filter === 'liked' ? 'active' : ''} onClick={() => this.filterArticles('liked')}>l ({this.props.articlesLikedLength})</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    filter: state.articles.filterText,
    articlesLength: state.articles.list.length,
    articlesLikedLength: state.articles.list.filter((article) => article.liked === true).length
})

export default connect(mapStateToProps)(NavigationArticles)