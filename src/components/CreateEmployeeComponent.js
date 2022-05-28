import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = { firstname: this.state.firstname, lastname: this.state.lastname, emailId: this.state.emailId };
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res => {
            this.props.history.push('/employees');
        })

    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstname: event.target.value });
    }
    changeLastNameHandler = (event) => {
        this.setState({ lastname: event.target.value });
    }
    changeEmailHandler = (event) => {
        this.setState({ emailId: event.target.value });
    }

    cancel() {
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add Employee</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>First Name</label>
                                        <input placeholder='first Name' name='firstname' className='form-control'
                                            value={this.state.firstname} onChange={this.changeFirstNameHandler}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label>Last Name</label>
                                        <input placeholder='last Name' name='lastname' className='form-control'
                                            value={this.state.lastname} onChange={this.changeLastNameHandler}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label>Email Adress</label>
                                        <input placeholder='Email Address' name='emailId' className='form-control'
                                            value={this.state.emailId} onChange={this.changeEmailHandler}
                                        />
                                    </div>
                                    <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
                                    <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

export default CreateEmployeeComponent