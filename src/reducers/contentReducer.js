const initialState = {
  content: [],
}

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CONTENT_SUCCESS': {
      return {
        ...state,
        content: action.payload,
      }
    }
    case 'FETCH_CONTENT_FAILURE': {
      return {
        ...state,
      }
    }
    default: {
      return state
    }
  }
}

export default contentReducer
