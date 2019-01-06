import * as React from 'react'
import "../styles/app.css"
import IconLoveBorderGrey from '../images/icons/love-border-grey'
import IconLoveFullRed from '../images/icons/love-full-red'
// import IconCrossGrey from '../images/icons/cross-black'

interface IArticle {
    id: number,
    name: string,
    price: string,
    liked: boolean,
    source: string,
    shop: string,
    imageUrl: string
}

interface IProps {
    article: IArticle,
    id: number,
    toggleLike: (id) => void;
}


class ArticleItem extends React.PureComponent<IProps, any> {

    handleButton = () => {
        this.props.toggleLike(this.props.article);
    }

    render() {

        let likeButton = <button 
                onClick={ this.handleButton }
                className="KPTAPP-article-item__like">
                {this.props.article.liked ? 
                    <IconLoveFullRed /> 
                : <IconLoveBorderGrey /> }
            </button>;

        const article = this.props.article;

        return(
            <div className="KPTAPP-article-item">
                <div className="KPTAPP-article-item__picture">
                    <img src={article.imageUrl}></img>
                </div>
                <div className="KPTAPP-article-item__body">
                    <a className="KPTAPP-article-item__body__title" href={"google.com"}>{article.name}</a>
                    <span className="KPTAPP-article-item__body__price">{article.price}</span>
                    <div className="KPTAPP-article-item__body__action">
                        { likeButton }
                        <a href={article.source} className="KPTAPP-article-item__body__action__link">{ article.shop}</a>
                    </div>
                </div>
            </div>
        )
    }
}

// <a className="KPTAPP-article-item__close">
//    <IconCrossGrey />
// </a>

export default ArticleItem;