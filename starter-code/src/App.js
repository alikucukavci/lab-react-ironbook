import React, { Component } from 'react';
import './App.css';
import Ironhackers from './components/Ironhackers';
import Users from './users';

class App extends Component {
    state = {
        user: Users,
        search: '',
        student: false,
        teacher: false,
        campus: ''
    };

    handleChange = event => {
        //når man bruger den samme event på flere, input fields, checkboxes eller dropdowns kan man blot skrive nedenstående og anvende en dynamisk state. [name] er en dynamisk navn, som kan både indeholde search og campus i dette tilfælde. 
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            // [name] is a dynamic way to refer to the actual value of the variable `name`
            // this function is now flexible as it works with all text inputs
            [name]: value
        });
    };

    handleCheckboxChange = event => {
        //name is student or teacher
        //Check is if it is checked false or true
        const { name, checked } = event.target;

        this.setState({
            [name]: checked
        });
    };

    render() {
        console.log(this.state.student);
        return (
            <div>
                <form>
                    <label>First Name: </label>
                    <input
                        type="text"
                        //The name must be the same as the state name
                        name="search"
                        id="JustBox"
                        value={this.state.search}
                        onChange={this.handleChange}
                    />

                    <select
                        //The name must be the same as the state name
                        name="campus"
                        id="campus"
                        value={this.state.campus}
                        onChange={this.handleChange}

                    >
                        <option value=""></option>
                        <option value="Paris">Paris</option>
                        <option value="Berlin">Berlin</option>
                        <option value="Lisbon">Lisbon</option>
                    </select>

                    <label>Student: </label>
                    <input
                        type="checkbox"
                        name="student"
                        id="student"
                        checked={this.state.student}
                        onChange={this.handleCheckboxChange}
                    />
                    <input
                        type="checkbox"
                        name="teacher"
                        id="teacher"
                        checked={this.state.teacher}
                        onChange={this.handleCheckboxChange}
                    />
                </form>

                <Ironhackers
                    data={this.state.user}
                    dataSearch={this.state.search}
                    studentCheck={this.state.student}
                    teacherCheck={this.state.teacher}
                    campusName={this.state.campus}
                />
            </div>
        );
    }
}

export default App;
