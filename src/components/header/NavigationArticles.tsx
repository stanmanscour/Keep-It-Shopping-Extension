import * as React from 'react'
import { connect } from 'react-redux'
import IconLoveWhite from '../../images/icons/love-white'
import IconEyeWhite from '../../images/icons/eye-white'


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
                <button 
                    className={this.props.filter === 'all' ? 'active' : ''} 
                    onClick={() => this.filterArticles('all')}>
                    <IconEyeWhite />
                </button>
                <button 
                    className={this.props.filter === 'liked' ? 'active' : ''} 
                    onClick={() => this.filterArticles('liked')}>
                        <IconLoveWhite />
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    filter: state.articles.filterText
    // articlesLength: state.articles.list.length,
    // articlesLikedLength: state.articles.list.filter((article) => article.liked === true).length
})

export default connect(mapStateToProps)(NavigationArticles)