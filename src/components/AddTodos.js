import React, { Component } from 'react'

export class AddTodos extends Component {

    render() {
        
        return (
            <div name = 'addTodoContainer'  style = {styles.addTodoContainer}>
                <div style = {styles.addTodoCard}>
               <h1 style = {{color: '#F6956B', fontSize: '3rem'}}>Add Todos</h1>
               <form 
               style = {styles.formStyle}
               onSubmit = {this.props.addTodo}>               
                   <input 
                   name = 'content' 
                   placeholder = 'Enter Todo' 
                   value = {this.props.value}
                   style = {styles.inputStyle}
                   onChange = {this.props.onChange}
                   />                   
                   <button 
                   style = {styles.buttonStyle}
                   onSubmit = {this.props.handleAddTodo}>
                       Add Todo
                    </button>
               </form>     
            </div>
            </div>
            
        )
    }
}


////////////////////////////////////////////////STYLES/////////////////////////////////////////////////////////////


const styles = {

    addTodoContainer:{
        width: '30vw',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    addTodoCard:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '45px',
        width: '30vw',
        height: '65vh'
    },

    formStyle:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '15rem',
        width: '15rem',
        marginBottom: '1.5rem',
        padding: '1rem'
    },

    inputStyle:{
        width: '14rem',
        height: '4rem',
        borderRadius: '45px',
        border: '1px solid black',
        paddingLeft: '1rem',
        backgroundColor: '#F7B297',
        marginBottom: '1rem',
        fontSize: '2rem'
    },

    buttonStyle:{
        width: '15rem',
        height: '4rem',
        borderRadius: '45px',
        border: '1px solid black',
        backgroundColor: '#F7B297',
        fontSize: '2rem',
        color: 'white'
    }

}

export default AddTodos
