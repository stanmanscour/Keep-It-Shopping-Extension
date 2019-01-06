import db from '../API/firebase'

export const changeArticlePresentation = (presentation) => {
    return {type: 'CHANGE_ARTICLE_PRESENTATION', presentation}
}

export const focusSearch = () => {
    return {type: "FOCUS_SEARCH"};
}

export const blurSearch = () => {
    return {type: 'BLUR_SEARCH'};
}

export const filterArticleBy = value => {
    return {type: 'FILTER_ARTICLE_BY', value}
}

export const toggleArticleLike = id => {
    return {type: 'TOGGLE_ARTICLE_LIKE', id}
}

export const toggleContainer = () => {
    return {type: "TOGGLE_CONTAINER"}
}

export const storeArticles = (articles: Array<{}>) => {
    return {type: "STORE_ARTICLES", articles}
}

export const toggleLikeArticle = item => {
    return function(dispatch) {
        item.liked = !item.liked;
        return db.editItem(item)
            .then(() => {
                dispatch(loadArticles());
            })
    }
}

export const storeNewArticle = newArticle => {
    return function(dispatch){
        db.storeNewItem(newArticle)
            .then((data) => {
                dispatch(loadArticles())
            })
    }
}

export const loadArticles = () => {
    return function(dispatch) {
        return db.fetchItems()
            .then(articles => {
                const arrayOfArticles = Object.keys(articles).map(key => {
                    const newItem = articles[key];
                    newItem.id = key;
                    return newItem
                });
                dispatch(storeArticles(arrayOfArticles))
            })
        .catch(error => {
            console.log(error); 
        })
    }
}