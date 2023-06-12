import React from "react";
import { connect } from "react-redux"
import './Navbar.css'

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <h1>React : Redux : Redux-Thunk</h1>
                <h1>You have <span>{this.props.todoGlobalState.todoCount}</span> todo Item</h1>
            </div>
        )
    }
}

// Global State
// Generate all data from Global State to props
const mapStateToProps = (state) => {
    return {
        // REQUEST all data from (index reducer)
        // Since (inndex reducer) manage all Global State data
        // Tell the (index reducer) to get it from (todo reducer) which he calls (todo)
        todoGlobalState: state.todo
    }
}

export default connect(mapStateToProps)(Navbar)