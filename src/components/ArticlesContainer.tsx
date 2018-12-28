import * as React from 'react'
import ArticleItem from './ArticleItem'
import { connect } from 'react-redux'

interface IProps {
    articles: Array<any>,
    filter: string,
    filterValue: string,
    dispatch: (any) => void,
    toggleArticleLike: (number) => void
}

class ArticlesContainer extends React.Component<IProps> {

    toggleLike = (id) => {
        this.props.toggleArticleLike(id);
    }

    filterByInput = () => {
        return this.props.articles.filter(article => {
            let articleName = article.name.toLowerCase();
            let articleSource = article.source.toLowerCase();
            let filter = this.props.filterValue.toLowerCase();

            if (articleName.indexOf(filter) !== -1 || articleSource.indexOf(filter) !== -1){
                return article
            } 
           // return article.name.toLowerCase().indexOf(this.props.filterValue.toLowerCase()) !== -1
        })
    }

    filteredArticles = (filter) => {
        switch (filter){
            case 'all': 
                return this.filterByInput();
                //return this.props.articles.filter(article => article.name.indexOf(this.props.filterValue) !== -1);
            case 'liked': 
                return this.filterByInput().filter(article => article.liked === true);
                //return this.props.articles.filter((article) => article.liked === true)
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
            </div>
        )
    }
}

const mapStateToProps = state => ({
    articles: state.articles.list,
    filter: state.articles.filterText,
    filterValue: state.articles.filterValue
})

const mapDispatchToProps = dispatch => ({
    toggleArticleLike: id => dispatch({type: 'TOGGLE_ARTICLE_LIKE', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);