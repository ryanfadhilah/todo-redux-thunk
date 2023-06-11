import React from 'react';
import './App.css';
import TodoPage from "./pages/TodoPage"
import Navbar from "./components/Navbar"
// import Items from './components/Items';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <TodoPage></TodoPage>
      </>
    )
  }
}

export default App;

// {/* <TodoItem todoData={{ activity: "Eat", id: 1 }}></TodoItem>
// <TodoItem todoData={{ activity: "Sleep", id: 2 }}></TodoItem>
// <TodoItem todoData={{ activity: "Code", id: 3 }}></TodoItem>

// <Items todoData={{ activity: "Eat", id: 1 }}></Items>
// <Items todoData={{ activity: "Sleep", id: 2 }}></Items>
// <Items todoData={{ activity: "Code", id: 3 }}></Items> */}