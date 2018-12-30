import * as React from 'react'
import "../styles/app.css"

interface IArticle {
    name: string,
    source: string,
    price: string,
    liked: boolean,
    id: number,
    imageUrl: string
}

interface IProps {
    article: IArticle,
    id: number,
    toggleLike: (id) => void;
}


class ArticleItem extends React.PureComponent<IProps, any> {

    handleButton = () => {
        this.props.toggleLike(this.props.id);
    }

    render() {

        let likeButton = <button 
            onClick={ this.handleButton }
            className={this.props.article.liked ? 'KPTAPP-article-item__like--active' : 'KPTAPP-article-item__like' }>
            </button>;


        return(
            <div className="KPTAPP-article-item">
                <div className="KPTAPP-article-item__picture">
                    <img src={this.props.article.imageUrl}></img>
                </div>
                <div className="KPTAPP-article-item__body">
                    <a className="KPTAPP-article-item__body__title" href={"google.com"}>{this.props.article.name}</a>
                    <span className="KPTAPP-article-item__body__price">{this.props.article.price}</span>
                    <div className="KPTAPP-article-item__body__action">
                        { likeButton }
                        <span>{ this.props.article.source}</span>
                    </div>
                </div>
               <a className="KPTAPP-article-item__close">x</a>
            </div>
        )
    }
}

export default ArticleItem;