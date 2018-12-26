import * as React from 'react'
import ArticleItem from './ArticleItem'
import NavigationArticles from './NavigationArticles'
import { connect } from 'react-redux'

interface IProps {
    articles: Array<any>,
    filter: String,
    dispatch: (any) => void,
    toggleArticleLike: (number) => void
}

class ArticlesContainer extends React.Component<IProps> {

    toggleLike = (id) => {
        this.props.toggleArticleLike(id);
    }

    filteredArticles = (filter) => {
        switch (filter){
            case 'all': 
                return this.props.articles;
            case 'liked': 
                return this.props.articles.filter((article) => article.liked === true)
        }
    }

    render() {
        return(
            <div className="KPTAPP-body">
                <div className="KPTAPP-articles-list">
                    {this.filteredArticles(this.props.filter).map((item, key) => {
                        return <ArticleItem toggleLike={this.toggleLike}  id={key} key={key} article={item} />
                    })}
                </div>
                <NavigationArticles />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    articles: state.articles,
    filter: state.filterText
})

const mapDispatchToProps = dispatch => ({
    toggleArticleLike: id => dispatch({type: 'TOGGLE_ARTICLE_LIKE', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);