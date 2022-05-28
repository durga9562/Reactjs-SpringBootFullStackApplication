import './App.css';
import React from 'react';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {
  BrowserRouter as Router,Switch,
  Route,
} from "react-router-dom";
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';


function App() {
  return (
    <div>
      <Router>
       
      <HeaderComponent/>
    <div className="container">
      <Switch> http://localhost:3000/update-employee/
        <Route path="/" exact component={ListEmployeeComponent}></Route>
    <Route path='/employees' component={ListEmployeeComponent}></Route>
    <Route path='/add-employees' component={CreateEmployeeComponent}></Route>
    <Route path='/update-employee/:id' component={UpdateEmployeeComponent}></Route>
    <Route path='/view-employee/:id' component={ViewEmployeeComponent}></Route>
     <ListEmployeeComponent/>
     </Switch>
    </div>
    <FooterComponent/>
    
    </Router>
    </div>
  );
}

export default App;
