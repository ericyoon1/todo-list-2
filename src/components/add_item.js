import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Field} from 'redux-form';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {addItem} from '../actions';    //from './/actions/index';

class AddItem extends Component {
    renderInput(props){
        return (
            <div>
                <label>{props.label}</label>
                <input {...props.input} type={props.type}/>
                <p className="red-text text-darken-1">{props.meta.touched && props.meta.error}</p>
            </div>
        );
    }

    // renderInput({input, label, type, meta: {touched, error}}){
    //     return (
    //         <div>                                              //*ES6 VERSION OF FUNCTION ABOVE*//
    //             <label>{label}</label>
    //             <input {...input} type={type}/>
    //             <p className="red-text text-darken-1">{touched && error}</p>
    //         </div>
    //     );
    // }

    submitItem(values){
        console.log('Form Values: ', values);

        this.props.addItem(values).then(() => {
            this.props.history.push('/');
        })
    }

    render(){
        const {handleSubmit, reset} = this.props;

        return (
            <div>
                <h1 className="center-align">Add New To Do Item</h1>
                <div className="right-align">
                    <Link to="/" className="btn red darken-1">Go Back</Link>
                </div>
                <form onSubmit={handleSubmit((vals) => this.submitItem(vals))}>
                    <Field name="title" component={this.renderInput} type="text" label="Title"/>
                    <Field name="details" component={this.renderInput} type="text" label="Details"/>
                    <div className="right-align">
                        <button className="btn green lighten-1">Add Item</button>
                        <button onClick={reset} type="button" className="btn orange lighten-1">Reset</button>
                    </div>
                </form>
            </div>
        );
    }
}

function validation(values){
    const error = {};

    if(!values.title){
        error.title = 'Please enter a title';
    }

    if(!values.details){
        error.details = 'Please enter details';
    }

    return error;
}

AddItem = reduxForm({
   form: 'add-item',
    validate: validation
})(AddItem);

export default connect(null, {addItem})(AddItem);
