import {combineReducers, applyMiddleware, createStore, compose} from "redux"
import thunk from "redux-thunk"
import chaptersReducer from "./reducers/chaptersReducer"

const rootReducer = combineReducers({
    chapterState: chaptersReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk)))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(applyMiddleware(thunk)))

export default store