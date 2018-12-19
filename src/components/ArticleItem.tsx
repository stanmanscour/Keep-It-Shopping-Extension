import * as React from 'react'
import "../styles/app.css"

interface IArticle {
    name: String,
    source: String,
    price: String,
    liked: Boolean
}

interface IProps {
    article: IArticle
}


class ArticleItem extends React.Component<IProps, any> {

    constructor(props){
        super(props);
        this.state = {
            liked: this.props.article.liked
        };

        this.handleLike = this.handleLike.bind(this);
    }

    handleLike(){
        this.setState(state => ({
            liked: !state.liked
        }))
    }

    render() {
        let likeButton = <button onClick={this.handleLike}>{ 
            this.state.liked ? 'Article aimé' : 'Aimer cet article' }
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