import { combineReducers } from 'redux';
import articlesReducer from './ArticlesReducer'
import containerReducer from './containerReducer'

const rootReducer = combineReducers({
    articles: articlesReducer,
    container: containerReducer
})

export default rootReducer