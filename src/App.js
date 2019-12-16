import React from 'react';
import './App.css';
import KeyPad from './components/KeyPad'

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            display: 0,
            previous: null,
            operator: null
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
    }

    resetCalculator = (event) =>{
        // restart.innerText = 'C' 
        this.setState ({
            display: 0,
            previous: null,
            operator: null
        })
    }

    buttonChange = (event) => {
        // console.log('event.target.value', event.target.value)
        this.setState({
            display: event.target.value
        })
    }

    operatorValue = (event) => {
        this.setState({
            operator: event.target.value,
            previous: this.state.display
        })
        console.log('previous', this.state.previous)
    }

    solveEquation = () => {
        console.log('WE ARE IN THE solveEquation FUNCTION')
        const { previous, display, operator } = this.state

        if (previous && operator && display) {
            if (operator === '+') {
                this.setState({
                    display: Number(previous) + Number(display)
                })
            } else if (operator === '-'){
                this.setState({
                    display: Number(previous) - Number(display)
                })
            } else if (operator === 'x'){
                this.setState({
                    display: Number(previous) * Number(display)
                })
            } else if(operator === '/'){
                this.setState({
                    display: Number(previous) / Number(display)
                })
            }
        }
    }

    handlePercent = () => {
        const { display } = this.state
        const result = Number(display) / 100
        console.log('handlePercent is being called', result,)

            this.setState({
                display: result
            })
    }

    // doubleDigits = () =>{
    //     const { previous, display, operator} = this.state
    //     if(!operator) {
    //         this.setState({
    //             display: 
    //         })
    //     }
    // }

    render() {
        return (
            <div className="App">
                <KeyPad
                    display={this.state.display}
                    handleFormSubmit={this.handleFormSubmit}
                    buttonChange={this.buttonChange}
                    operatorValue={this.operatorValue}
                    solveEquation ={this.solveEquation}
                    resetCalculator ={this.resetCalculator}
                    handlePercent = {this.handlePercent}
                />
            </div>
        );
    }
}

export default App;
