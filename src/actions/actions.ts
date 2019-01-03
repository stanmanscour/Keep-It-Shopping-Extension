import ArticleAPI from '../API/mockContentApi'

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

export const storeArticles = (articles) => {
    return {type: "STORE_ARTICLES", articles}
}

export const loadArticles = () => {
    return function(dispatch) {
        return ArticleAPI.getAllCourses().then(courses => {
            console.log(courses);
            dispatch(storeArticles(courses));
        }).catch(error => {
            console.log(error); 
        })
    }
}