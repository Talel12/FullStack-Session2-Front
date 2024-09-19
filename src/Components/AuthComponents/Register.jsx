import axios from 'axios'
import getFormData from '../../utils/getFormData'

const Register = () => {

    const handleSubmit = async (event) => {
        const data = await getFormData(event)
        axios.post('http://localhost:5000/api/auth/register', data)
        .then((response) => {console.log(response)})
        .catch((err) => {console.error(err)})
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id="fullName" name='fullName' required placeholder='Your Full Name' />
            <input type="text" id="username" name="username" required placeholder='email, username or phone number' />
            <input type="password" id="password" name="password" required placeholder='password' minLength={8}/>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Register