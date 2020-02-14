import React, { Component } from 'react'
import Header from './Header'
import { Redirect } from 'react-router-dom'
import axios from 'axios'


export class Login extends Component {
    
        state = {
            email: '',
            password: '',
            loggedin: false,
       }

       onChange = (e) => {
           this.setState({
               ...this.state,
             [e.target.name]:e.target.value 
           })
       }

       onSubmit = (e) => {
        e.preventDefault()
       const email = this.state.email
       const password = this.state.password       
       axios.post('http://3.120.96.16:3002/auth', {email, password})
       .then(result => {
           const token = result.data.token
           localStorage.setItem('token',token)
           this.setState({
               loggedin: true
           })
       })
       .catch( res => {
           alert('user not found, please check your email and password')
       })
   }
    
    render() {
        if(this.state.loggedin){return <Redirect to = '/todos' />}
        return (
            <div name = 'loginContainer' style = {styles.containerStyle}>
                <Header headerStyles = {headerStyles} />
                <div name = 'cardContainer' style = {styles.cardContainerStyle}>
                    <div name = 'logincard' style = {styles.cardStyle}>
                        <h1 style = {{marginTop: '5.5rem', color: '#F4B9B9'}}>LOGIN</h1>
                        <form 
                        name= 'login' 
                        style = {formStyles.formStyle}
                        onSubmit = {this.onSubmit}>
                            <input 
                            type = 'email'
                            name = 'email'
                            placeholder = 'Enter email'
                            style = {formStyles.inputStyle}
                            onChange = {this.onChange}
                            required
                            />
                            <input 
                            type = 'password'
                            name = 'password'
                            placeholder = 'Enter Password'
                            style = {formStyles.inputStyle}
                            onChange = {this.onChange}
                            required
                            />
                            <button
                            type = 'submit'
                            style = {formStyles.buttonStyle}
                            >Login</button>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

const styles = {

    containerStyle: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#FF9B9C',
        display: 'flex',
        flexDirection: 'column',
    },

    cardContainerStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: '1'
    },

    cardStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '45px',
        width: '50vw',
        height: '50vh'
    }
}

const headerStyles = {
    headerContainer:{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100vw',
        height: '5rem',
        backgroundColor: '#FCC4C7',

    },

    nameContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        color: 'white',
        paddingLeft: '2rem',
    
    },

    linkContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: 'white',

    }, 

    linkStyle: {
        textDecoration: 'none',
        fontSize: '1.5rem',
        color: 'white',
    },

    logoutContainer: {
        display: 'flex',
        alignItems: 'center',
        paddingRight: '2rem'
    },   
}

const formStyles = {
    formStyle: {
        height: ' 10rem',
        width: ' 100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    inputStyle: {
        border: '1px solid black',
        borderRadius: '45px',
        width: '80%',
        height: '2rem',
        fontSize: '1.5rem',
        paddingLeft: '2rem',
        backgroundColor: '#FBE3E4'
    },

    buttonStyle: {
        textDecoration: 'none',
        fontSize: '1.5rem',
        color: '#F4B9B9',
        backgroundColor: 'white',
        border: 'none'
    },
}
export default Login
