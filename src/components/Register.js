import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import { Redirect } from 'react-router-dom'



export class Register extends Component {

    state = {
        email: '',
        password: '',
        registered: false,
   }

       //copies then edits the state depending on the name the of the used input has been given
   onChange = (e) => {
       this.setState({
           ...this.state,
         [e.target.name]:e.target.value 
       })   
   }

   //gets the email and password from the state then makes a post request to the server, if successfull the user is alerted then redirected to the login Page
   onSubmit = (e) => {
        e.preventDefault()
       const email = this.state.email
       const password = this.state.password       
       axios.post('http://3.120.96.16:3002/register', {email, password})
       .then(result => {
           this.setState({
               registered: true
           })
           alert('Registration Sucsessfull! you can now login to your new account!')
       }).catch( res => {
           alert('something went wrong please try again!')
       })
   }

    render() {
        if(this.state.registered){return <Redirect to = '/' />}

        return (
            <div name = 'loginContainer' style = {styles.containerStyle}>
                <Header headerStyles = {headerStyles} />
                <div name = 'cardContainer' style = {styles.cardContainerStyle}>
                    <div name = 'logincard' style = {styles.cardStyle}>
                        <h1 style = {{marginTop: '5.5rem', color: '#4DC1F3'}}>REGISTER</h1>
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
                            >Register</button>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}


////////////////////////////////////////////////STYLES/////////////////////////////////////////////////////////////

const styles = {

    containerStyle: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#4DC1F3',
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
        backgroundColor: '#81D3F6',

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
        width: ' 15rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    inputStyle: {
        border: '1px solid black',
        borderRadius: '45px',
        width: '20rem',
        height: '2rem',
        fontSize: '1.5rem',
        paddingLeft: '2rem',
        backgroundColor: '#81D3F6'
    },

    buttonStyle: {
        textDecoration: 'none',
        fontSize: '1.5rem',
        color: '#4DC1F3',
        backgroundColor: 'white',
        border: 'none'
    },

}
export default Register
