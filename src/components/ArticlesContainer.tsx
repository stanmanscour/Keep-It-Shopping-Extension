import * as React from 'react'
import ArticleItem from './ArticleItem'

interface IProps {
    articles: Array<any>
}

class ArticlesContainer extends React.Component<IProps> {


    render() {
        return(
            <div className="KPTAPP-articles-container">{this.props.articles.map((item, key) => {
                return <ArticleItem key={key} article={item} />
            })}</div>
        )
    }
}

export default ArticlesContainer;