import React, { Component } from 'react'
import {Link}from "react-router-dom"


export class Form extends Component {   
    onSubmit = (e) => {
        e.preventDefault();        
    }

    render() {
        
        const styles = this.props.formStyles
        return (
            <div>
                <form onSubmit = {this.onSubmit} style = {styles.formStyle}>
                    <input 
                        name = 'email' 
                        placeholder = 'Email' 
                        style = {styles.inputStyle} 
                        onChange = {this.props.onChange}>
                    </input>
                    <input 
                    name = 'password' 
                    placeholder = 'Password' 
                    style = {styles.inputStyle} 
                    onChange = {this.props.onChange}></input>
                    <Link to = {this.props.route} style = {styles.linkStyle} onClick = {this.onSubmit}>
                        {this.props.message}</Link>
                </form>
            </div>
        )
    }
}

export default Form
