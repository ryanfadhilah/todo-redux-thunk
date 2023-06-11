import React from "react";
import { connect } from "react-redux"

class Navbar extends React.Component {
    render() {
        return (
            <>
                <h1>React Todo List</h1>
                <h1>You have {this.props.todoGlobalState.todoCount} todo Item</h1>
            </>)
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