import React, { Component } from 'react'

export class Todos extends Component { 
    
    render() {

       //takes the todos from props then for each todo puts this information in the todoDiv then adds the todoDiv to the todosCard div. 
       const addItems = this.props.todos.map( todoArray => {
        return(<div key = {todoArray.id} name = 'todoDiv'>
            <p >{todoArray.content}</p>
            <button name = 'delete' onClick = {() => this.props.deleteTodo(todoArray.id)}> delete Todo</button>
            </div>) 
        })

        return (
            <div name = 'todos' style = {styles.todos}>
                <div name = 'todosCard' style = {styles.todosCard}> 
                {addItems}
                </div>                
            </div>
        )
    }
}

const styles = {
    todos: {
        width: '70vw',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },


////////////////////////////////////////////////STYLES/////////////////////////////////////////////////////////////

    todosCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '45px',
        width: '65vw',
        height: '65vh'
        
    },
}

export default Todos
