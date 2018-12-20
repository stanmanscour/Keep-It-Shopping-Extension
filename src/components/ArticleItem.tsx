import * as React from 'react'
import "../styles/app.css"

interface IArticle {
    name: string,
    source: string,
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
        let likeButton = <button 
            onClick={ this.props.toggleLike }
            className={this.props.article.liked ? 'KPTAPP-article-item__like--active' : 'KPTAPP-article-item__like' }>
            </button>;

        return(
            <div className="KPTAPP-article-item">
                <div className={ `KPTAPP-article-source ${this.props.article.source} `}></div>
                <div className="KPTAPP-article-item__picture">
                    <img src={this.props.article.name}></img>
                </div>
                <div className="KPTAPP-article-item__body">
                    <p>{this.props.article.name}</p>
                    <span>{this.props.article.price}</span>
                    { likeButton }
                </div>
               <a className="KPTAPP-article-item__close">x</a>
            </div>
        )
    }
}

export default ArticleItem;