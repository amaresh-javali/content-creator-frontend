import axios from "axios";
// import contentReducer from "../reducers/contentReducer";
export const LIKE_CONTENT = 'LIKE_CONTENT';
export const COMMENT_CONTENT = 'COMMENT_CONTENT';

export const showContent = () =>{
    return async(dispatch) =>{
        try{
            const response = await axios.get('http://localhost:3997/api/content')
            // console.log('data', response.data)
            dispatch(content(response.data))
            console.log('Dispatched FETCH_CONTENT_SUCCESS action');
        } catch (e) {
            alert(e.message)
        }
    }
}

export const content = (data) => {
    //  console.log('data', data)
    return{
        
        type:'FETCH_CONTENT_SUCCESS',
        payload : data
    }
}

// // Action to like content
// export const likeContent = (contentId) => async (dispatch) => {
//     try {
//       // Directly use the contentId if it's available within this file
//       await axios.put(`http://localhost:3997/api/post/like`);
//       dispatch({
//         type: LIKE_CONTENT,
//         payload: contentId,
//       });
//     } catch (error) {
//       // Handle error
//     }
//   };
  
//   // Action to comment on content
//   export const commentContent = (contentId, comment) => async (dispatch) => {
//     try {
//       const response = await axios.post(`http://localhost:3997/api/comment`, { comment });
//       const updatedComment = response.data; // Assuming the API returns the updated comment
//       dispatch({
//         type: COMMENT_CONTENT,
//         payload: { contentId, comment: updatedComment },
//       });
//     } catch (error) {
//       // Handle error
//     }
//   };



