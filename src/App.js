import React, {useState, useEffect} from 'react'
import jwt_decode from 'jwt-decode'
import NavBar from './component/navBar'
import { useDispatch } from 'react-redux'
import { startGetUsers } from './action/usersActions'

const  App = (props) => {
    const dispatch = useDispatch()
    const [userLoggedIn, setUserLoggedIn] = useState(false)
    const handleAuth = () => {
        setUserLoggedIn(!userLoggedIn)
    }
    useEffect(()=>{
        if(userLoggedIn){
          const token = localStorage.getItem('token')
          console.log(token.split(' ')[1])
          const decoded = jwt_decode(token)
          console.log(decoded)
          // console.log(decoded.role)
          // setRole(decoded.role)  
        }
    }, [userLoggedIn])
    useEffect(() =>{
        dispatch(startGetUsers())
    })
   
    return(
        <div>
            <NavBar userLoggedIn = {userLoggedIn} handleAuth = {handleAuth}  />
            
        </div>
    )
}

export default App