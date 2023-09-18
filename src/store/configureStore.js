import { createStore , combineReducers , applyMiddleware} from "redux";
import thunk from "redux-thunk";
import usersReducer from "../reducers/usersReducers";
import contentReducer from "../reducers/contentReducer";
import creatorReducers from '../reducers/creatorReducers'
import newContentReducer from "../reducers/newContentReducer";

const configureStore = () => {
    const store = createStore(
        combineReducers({
          users: usersReducer,
          content: contentReducer,
          creators : creatorReducers,
          newContent : newContentReducer
        }),
        applyMiddleware(thunk)
      )
      return store
}

export default configureStore