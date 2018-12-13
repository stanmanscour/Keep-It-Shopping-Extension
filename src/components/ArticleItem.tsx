import * as React from 'react'

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
            liked: false
        };

        this.handleLike = this.handleLike.bind(this);
    }

    handleLike(){
        this.setState(state => ({
            liked: !state.liked
        }))
    }

    render() {
        let likeButton;

        if (this.state.liked){
            likeButton = <button onClick={this.handleLike}>Article aimé</button>;
        } else {
            likeButton = <button onClick={this.handleLike}>Aimer cet article</button>;
        }

        return(
            <div>
                <p>{this.props.article.name} - {this.props.article.price}</p>
                { likeButton }
            </div>
        )
    }
}

export default ArticleItem;