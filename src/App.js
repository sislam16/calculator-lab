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
            negative: false, 
            clear: 'AC'
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
            previous: this.state.display, 
            clear: 'C'
        })
        console.log('previous', this.state.previous)
    }

    solveEquation = () => {
        console.log('WE ARE IN THE solveEquation FUNCTION')
        const { previous, display, operator } = this.state

        if (previous && operator && display) {
            if (operator === '+') {
                this.setState({
                    display: Number(previous) + Number(display),
                    clear: 'AC'
                })
            } else if (operator === '-'){
                this.setState({
                    display: Number(previous) - Number(display),
                    clear: 'AC'
                })
            } else if (operator === 'x'){
                this.setState({
                    display: Number(previous) * Number(display),
                    clear: 'AC'
                })
            } else if(operator === '/'){
                this.setState({
                    display: Number(previous) / Number(display),
                    clear: 'AC'
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
        const { display } = this.state
        if(display){
            this.setState({
                display: - display,
                negative: true
            })
        }
    }

    handleDecimal = () =>{
        const {display } = this.state
        if(display.toString().includes('.')){
            this.setState({
                display: display 
            })
        } else{
            this.setState({
                display: display + '.'
            })
        }
    }

    render() {
        console.log(this.state)
        return (
            <div className="App">
                <KeyPad
                    display={this.state.display}
                    clear = {this.state.clear}
                    handleFormSubmit={this.handleFormSubmit}
                    buttonChange={this.buttonChange}
                    operatorValue={this.operatorValue}
                    solveEquation ={this.solveEquation}
                    resetCalculator ={this.resetCalculator}
                    handlePercent = {this.handlePercent}
                    toggleNegative = {this.toggleNegative}
                    handleDecimal = {this.handleDecimal}
                />
            </div>
        );
    }
}

export default App;
