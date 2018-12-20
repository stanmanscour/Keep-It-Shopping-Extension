import * as React from 'react'
import "../styles/app.css"

interface IArticle {
    name: String,
    source: String,
    price: String,
    liked: Boolean
}

interface IProps {
    article: IArticle,
    toggleLike: () => void;
}


class ArticleItem extends React.Component<IProps, any> {

    constructor(props){
        super(props);
    }

    render() {
        let likeButton = <button onClick={ this.props.toggleLike }>{ 
            this.props.article.liked ? 'Article aimé' : 'Aimer cet article' }
            </button>;

        return(
            <div className="KPTAPP-articles-container__item">
                <p>{this.props.article.name} - {this.props.article.price}</p>
                { likeButton }
            </div>
        )
    }
}

export default ArticleItem;