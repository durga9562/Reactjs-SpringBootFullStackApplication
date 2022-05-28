import React,{Component} from "react";
import EmployeeService from "../services/EmployeeService";

class UpdateEmployeeComponent extends Component{
    constructor(props) {
        super(props)

        this.state = {
            id:this.props.match.params.id,
            firstname: '',
            lastname: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.UpdateEmployee = this.UpdateEmployee.bind(this);
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res)=>{
          let employee=res.data;
          this.setState({
              firstname:employee.firstname,
              lastname:employee.lastname,
              emailId:employee.emailId
          })  ;
        });
    }

    UpdateEmployee = (e) => {
        e.preventDefault();
        let employee = { firstname: this.state.firstname, lastname: this.state.lastname, emailId: this.state.emailId };
        console.log('employee => ' + JSON.stringify(employee));
EmployeeService.UpdateEmployee(employee, this.state.id).then(res=>{
this.props.history.push('/employees');
});
        

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
                            <h3 className='text-center'>Update Employee</h3>
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
                                    <button className='btn btn-success' onClick={this.UpdateEmployee}>Save</button>
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
export default UpdateEmployeeComponent;