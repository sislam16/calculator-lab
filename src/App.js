import React from 'react';
import './App.css';
import KeyPad from './components/KeyPad'

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            display: 0,
            previous: null,
            operator: null,
            negative: false
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
    }

    resetCalculator = (event) =>{
        // restart.innerText = 'C' 
        this.setState ({
            display: "0",
            previous: null,
            operator: null
        })
    }

    buttonChange = (event) => {
        let {display, operator} = this.state
        if(!operator){
            this.setState({
                display: Number(display += event.target.value)
            })
        } else{
            this.setState({
                display: event.target.value
            })
        }
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

    toggleNegative = () =>{
        const { display, negative, operator } = this.state
        if(display){
            this.setState({
                display: - display,
                negative: true
            })
        }
    }

    render() {
        console.log(this.state)
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
                    toggleNegative = {this.toggleNegative}
                />
            </div>
        );
    }
}

export default App;
