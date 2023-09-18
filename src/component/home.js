import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { showContent } from "../action/contentAction"

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(showContent())
  }, [dispatch])

  const content = useSelector((state) => state.content.content)

  return (
    <div>
      <h2>Content</h2>
      {content.map((ele) => (
        <ul key={ele._id}>
          
          <img src={`http://localhost:3997/images/${ele.fileType}`}
          
           className="custom-image"
           style={{ width: '200px', height: '200px' }}
          />  
          <li>{ele.body}</li>
        </ul>
      ))}
    </div>
  )
}

export default Home
