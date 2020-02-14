import React, { Component } from 'react'
import {Link}from "react-router-dom"
import jwt from 'jsonwebtoken';


export class Header extends Component {
    state = {
        loggedOut: false
    }
    
    //sets state.loggedOut to true and removes the stored token from local storage
    handleLogOut = (e) => {
        this.setState({
            loggedOut: true
        })
        localStorage.removeItem('token');

    }
    

    
    render() {
        const token=localStorage.getItem('token');
        const decoded = jwt.decode(token);
        const styles = this.props.headerStyles 
        let user = ''

        //checks if there is a token in the locas storage, if so it takes the decoded email and shows it in the header so the user knows it is logged in.
        if(token){
            user = 'logged in as: ' + decoded.email
        }else{user = null}
        return (
            <div style = {styles.headerContainer} name = 'headerContainer'>
               <div name = 'nameContainer' style = {styles.nameContainer}>
                    <h3>TodoerApp</h3>
                    <p>{user}</p>
               </div>
               <div name = 'linkContainer' style = {styles.linkContainer}>
                    <Link to ='/' style = {styles.linkStyle}>
                        Login
                    </Link>
                    <h2> || </h2>
                    <Link to ='/register' style = {styles.linkStyle}>
                        Register
                    </Link>
               </div>
               <div name = 'logoutContainer' style = {styles.logoutContainer}>
                   <Link to='/' 
                   style = {styles.linkStyle}
                   onClick = {this.handleLogOut}>
                       Log out
                    </Link>
               </div>
            </div>
        )
    }


    
}



export default Header
