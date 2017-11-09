import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAll} from '../actions';  //from '../actions/index';
import {Link} from 'react-router-dom';

class TodoList extends Component {
    componentDidMount(){
        this.props.getAll();
    }

    renderList(){
        return this.props.todos.map((item, index) => {
            return (
                <li key={index} className="collection-item"> {item.title} </li>
            );
        })
    }

    render(){
        return (
            <div>
                <h1 className="center-align">To Do List 2.0</h1>
                <Link to="/add-item" className="btn cyan lighten-1">Add Item</Link>
                <ul className="collection">
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return (
        {
            todos: state.todo.all
        }
    );
}

export default connect(mapStateToProps, {getAll})(TodoList);
