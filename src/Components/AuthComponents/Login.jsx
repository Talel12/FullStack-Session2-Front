import React from 'react'
import getFormData from '../../utils/getFormData'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        const data = getFormData(event)
        axios.post('http://localhost:5000/api/auth/login', data)
        .then((response) => {
            console.log(response.data.token)
            localStorage.setItem('token', response.data.token)
            navigate('/')
        })
        .catch((err) => {console.error(err)})
    }

  return (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" name='username'/>
          <input type="password" placeholder="Password" name='password'/>
          <input type="submit" value="Login" />
        </form>
  )
}

export default Login