import axios from "axios";


export const createCreator =(formData, id) =>{
    
    return async(dispatch) =>{
        try {
            const response = await axios.post(`http://localhost:3997/api/creator/${id}`, formData)
            console.log(response.data)
        } catch(e) {
            console.log(e.message)
        }
    }
}

export const newCreator =(data)=>{
    return {
        type:'NEW_CREATOR',
        payload: data
    }
}

