import './TodoPage.css'
import React from 'react';
import TodoItem from "../components/TodoItem"
import Axios from 'axios'

// connect TodoPage to -> Store
import { connect } from 'react-redux'

// connect Components to -> Action Object
import { changeTodoCount, incrementTodoCount, fetchTodoGlobal } from '../redux/action/actionTodo'

class TodoPage extends React.Component {
    state = {
        todoList: [
        ],
        inputTodo: ""
    }

    completeTodo = (id) => {
        Axios.patch(`http://localhost:2000/todo/${id}`, {
            done: true
        })
            .then(() => {
                // alert('completed')
                this.fetchTodoGlobal()
            })
            .catch(() => {
                alert(`error: completeTodo`)
            })
    }

    deleteTodo = (id) => {
        Axios.delete(`http://localhost:2000/todo/${id}`)
            .then(() => {
                this.fetchTodoGlobal()
            })
            .catch(() => {
                alert(`error: delete todo`)
            })
    }

    addTodo = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:2000/todo', {
            activity: this.state.inputTodo,
            done: false,
        })
            .then(() => {
                this.props.fetchTodoGlobal()
            })
        // this.setState(
        //   {
        //     todoList: [
        //       ...this.state.todoList,
        //       { activity: this.state.inputTodo, id: this.state.todoList.length + 1 }
        //     ]
        //   }
        // )
    }

    inputEvent = (e) => {
        this.setState({ inputTodo: e.target.value })
    }

    renderTodoList = () => {

        return this.props.todoGlobalState.todoList.map((v, i, a) => {
            return <TodoItem completeTodoHandler={this.completeTodo} deleteTodoHandler={this.deleteTodo} todoData={v} key={i}></TodoItem>
        })
    }

    fetchTodo = (e) => {
        // e.preventDefault()
        Axios.get('http://localhost:2000/todo')
            .then((response) => {
                this.setState({ todoList: response.data })
                // Create Change
                this.props.changeTodo(response.data.length)
            })
            .catch((error) => {
                alert(`error : fetchTodo`)
            })
    }

    componentDidMount() {
        this.props.fetchTodoGlobal()
    }

    // componentDidUpdate() {
    //     this.renderTodoList()
    // }

    render() {

        return (
            < >
                <div className='todo-page'>
                    {/* title */}
                    <h1>Things to do : {this.props.todoGlobalState.todoCount}</h1>

                    {/* input */}
                    <form action="">
                        <input type="text" onChange={this.inputEvent} placeholder='' />
                        <input className='submit' type="submit" onClick={this.addTodo} value="Submit" />
                        {/* <input type="button" onClick={this.fetchTodo} value='refresh' /> */}
                        {/* <span onClick={this.props.incrementTodo}>click me to increment</span> */}
                    </form>
                </div>

                {/* output */}
                <ul>
                    {this.renderTodoList()}
                </ul>

            </>
        );
    }
}


// Components -> Action Object

//  Global Store REDUX!! 🦆🦆🦆🦆🦆🦆


// Components <- from Store ( index reducer <- todo reducer)
// Store data to => Generate/Request all the data from Global state to props
// "make our Global State Become Props"
const mapStateToProps = (state) => {
    return {
        todoGlobalState: state.todo,
    }
}

// Component -> send Respond to Request Action Object do the JOB!!
// "Make our Dispatch/IncrementTodo Became Props"
const mapDispatchToProps = {
    incrementTodo: incrementTodoCount, //no short hand for learning purpose
    changeTodo: changeTodoCount,
    fetchTodoGlobal: fetchTodoGlobal
}

// (Request, Respond)(also,, send this Component)
// (Request to Store, 
//  Respond to Action Object, to request change in GLOBAL STATE)
// 
export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
















// {/* <TodoItem todoData={{ activity: "Eat", id: 1 }}></TodoItem>
// <TodoItem todoData={{ activity: "Sleep", id: 2 }}></TodoItem>
// <TodoItem todoData={{ activity: "Code", id: 3 }}></TodoItem>

// <Items todoData={{ activity: "Eat", id: 1 }}></Items>
// <Items todoData={{ activity: "Sleep", id: 2 }}></Items>
// <Items todoData={{ activity: "Code", id: 3 }}></Items> */}