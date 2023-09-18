import axios from "axios";
import { useDispatch } from "react-redux";

export const createContent = (formData) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No token found in localStorage");
      }
      const config = {
        headers: {
          Authorization: ` ${token}`,
        },
      };
      console.log(config)

      const response = await axios.post(`http://localhost:3997/api/content/create`,formData,config );
      console.log(response.data)
      // Dispatch an action if needed (you might want to update your Redux state)
      // For example, dispatch an action to update the content list with the new content
    //   dispatch({ type: "CONTENT_CREATED", payload: response.data });

      console.log(response);
    } catch (e) {
      console.log(e.message);
    }
  };
};
