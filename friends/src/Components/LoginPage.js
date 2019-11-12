import React from 'react'
import { axiosWithAuth } from '../Utils/axiosWithAuth'





class LoginPage extends React.Component{

    state = {
        credentials: {
            username: '',
            password: ''
        }


    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }


login = e => {
    e.preventDefault();
    axiosWithAuth() 
    .post('/login', this.state.credentials)
    TouchEvent(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/friends')
    })
    .catch(err=> console.log(err));

}
render() {
    return (
        <div>
            <input 
                type ="text"
                name="username"
                value ={this.state.credentials.username}
                onChange ={this.handleChange}
                placeholder= "Username Here"
            
            />
            <input 
                type ="password"
                nane= "password"
                value = {this.state.credentials.password}
                onChange= {this.handleChange}
                placeholder= "password"
            
            />

            <button >Login</button>
        </div>

    )

}
}
export default LoginPage