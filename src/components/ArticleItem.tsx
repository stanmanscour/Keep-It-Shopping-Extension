import * as React from 'react'
import "../styles/app.css"

interface IArticle {
    name: string,
    source: string,
    price: string,
    liked: boolean,
    id: number
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
        console.log('render');

        let likeButton = <button 
            onClick={ this.handleButton }
            className={this.props.article.liked ? 'KPTAPP-article-item__like--active' : 'KPTAPP-article-item__like' }>
            </button>;


        return(
            <div className="KPTAPP-article-item">
                <div className="KPTAPP-article-item__picture">
                    <img src={this.props.article.name}></img>
                </div>
                <div className="KPTAPP-article-item__body">
                    <p>{this.props.article.name}</p>
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