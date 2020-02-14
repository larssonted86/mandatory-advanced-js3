import React, { Component } from 'react'
import Header from './Header'
import Todos from './Todos'
import AddTodos from './AddTodos'
import axios from 'axios'


export class TodoContainer extends Component {

    state = {
        todos: [],
        content: ''
    }

    componentDidMount(){
        
        const token=localStorage.getItem('token');
         axios.get('http://3.120.96.16:3002/todos',{ 
             headers: {Authorization: `Bearer ${token}`
            }})
         .then( result => {
             this.setState({
                 todos: result.data.todos
             })
         })
         .catch(error => {
             alert(error)
         })
        }

        handleDeleteTodo = (id) =>{
            const token=localStorage.getItem('token');
            axios.delete('http://3.120.96.16:3002/todos/'+ id, { 
                headers: {Authorization: `Bearer ${token}`
               }})
                .then(() => {
                    this.setState({ todos: this.state.todos.filter(x => x.id !== id)})
                })
        }

        handleAddTodo = (e) => {
            e.preventDefault()    
           const  todo = {
               content: this.state.content
           }    
            const token=localStorage.getItem('token');
             axios.post('http://3.120.96.16:3002/todos',todo, { 
                 headers: {Authorization: `Bearer ${token}`
                }})
             .then( result => {
                 this.setState(prevState => ({
                    todos: [...prevState.todos, result.data.todo]
                  }))
                 
             })
             .catch(error => {
                 alert('you fucked up')
             })
        }

        handleOnChange = (e) => {
            this.setState({
                ...this.state,
              [e.target.name]:e.target.value 
            })
        }

    render() {
        return (
            <div style = {styles.containerStyle} name = 'todosContainer'>
                <Header headerStyles = {headerStyles} />
                <div name = 'manageTodos' style = {styles.manageTodoStyles}>
                    <Todos  todos = {this.state.todos} deleteTodo = {this.handleDeleteTodo}/>
                    <AddTodos  addTodo = {this.handleAddTodo} onChange = {this.handleOnChange} />
                </div>                
            </div>
        )
    }
}

const styles = {

    containerStyle:{
    backgroundColor: '#F6956B',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
},

manageTodoStyles:{
    height: '100%',
    width: '100vw',
    display: 'flex',
}
}

const headerStyles = {
    headerContainer:{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100vw',
        height: '5rem',
        backgroundColor: '#F7B297',

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

export default TodoContainer
