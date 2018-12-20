import * as React from 'react'
import ArticleItem from './ArticleItem'
import NavigationArticles from './NavigationArticles'
import { connect } from 'react-redux'

interface IProps {
    articles: Array<any>,
    filter: String,
    dispatch: (any) => void
}

class ArticlesContainer extends React.Component<IProps> {

    constructor(props){
        super(props)
        this.toggleLike = this.toggleLike.bind(this);
        this.filteredArticles = this.filteredArticles.bind(this);
    }

    toggleLike = (id) => {
        this.props.dispatch({type: 'TOGGLE_ARTICLE_LIKE', id});
        //this.props.dispatch({type: 'FILTER_ARTICLE', text: 'liked'});
        //console.log(this.props.articles[id].liked);
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
                        return <ArticleItem toggleLike={() => {this.toggleLike(key)}} key={key} article={item} />
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

export default connect(mapStateToProps)(ArticlesContainer);