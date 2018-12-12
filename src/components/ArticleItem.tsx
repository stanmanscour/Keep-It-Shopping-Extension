import * as React from 'react'

interface IArticle {
    name: String,
    source: String,
    price: String
}

interface IProps {
    article: IArticle
}

class ArticleItem extends React.Component<IProps> {
    render() {
        return(
            <div>{this.props.article.name} - {this.props.article.price}</div>
        )
    }
}

export default ArticleItem;