import React from 'react'





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


// login = e => {
//     e.preventDefault();

// }
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