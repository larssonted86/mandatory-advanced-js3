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

    // when the component is mounted there will be a sent a get request to the server to get the todos, along with a token to authorize the user to the server. if successfull the response data is set to the state
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

        //this function will be sent as a prop to another component.
        //sends a delete request to the server with the id of the todo to remove, along with the token for authorization. then the state is filtered to remove the todo with the id. 
        handleDeleteTodo = (id) =>{
            const token=localStorage.getItem('token');
            axios.delete('http://3.120.96.16:3002/todos/'+ id, { 
                headers: {Authorization: `Bearer ${token}`
               }})
                .then(() => {
                    this.setState({ todos: this.state.todos.filter(x => x.id !== id)})
                })
        }

        //this function will be sent as a prop to another component.
        //takes the value from state.content and puts it in a object, then makes a post request to the server along with the authorization token. then takes the previous todos array and adds the new todo and when the state is updated the component updates.
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
                    todos: [...prevState.todos, result.data.todo],
                    content: '',
                  }))
             })
             .catch(error => {
                 alert('you fucked up')
             })
        }
        
        //this function will be sent as a prop to another component.
        //copies then edits the state depending on the name the of the used input has been given
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
                    <AddTodos  
                    addTodo = {this.handleAddTodo} 
                    onChange = {this.handleOnChange}
                    value = {this.state.content} 
                    />
                </div>                
            </div>
        )
    }
}


////////////////////////////////////////////////STYLES/////////////////////////////////////////////////////////////

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
