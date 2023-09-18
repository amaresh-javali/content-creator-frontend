const initialState ={
    creators : []
}


const creatorReducers=(state=initialState , action) =>{
    switch(action.type) {
        case 'NEW_CREATOR' :{
            return {
                ...state,
                creators: [...state.creators,  action.payload]
            } 
        }
        default : {
            return state
        }
    }
} 
export default creatorReducers

