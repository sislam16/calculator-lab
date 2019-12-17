import React from 'react';

class KeyPad extends React.Component {




    render() {
        return (
            <div className='calculator'>
                <form onSubmit={this.props.handleFormSubmit}>
                    <div className='display'>
                        <p className='showValue'>{this.props.display}</p>
                    </div>
                    <div className='row1'>
                        <button onClick={this.props.resetCalculator} className='row1' id="clear">AC</button>
                        <button onClick={this.props.toggleNegative} className='row1' value = '+/-'>+/-</button>
                        <button onClick={this.props.handlePercent} className='row1' value = '%'>%</button>
                        <button onClick={this.props.operatorValue} className='orange' value = '/'>/</button>
                    </div>

                    <div className='row2'>
                        <button onClick={this.props.buttonChange} className='row2' value='7'>7</button>
                        <button onClick={this.props.buttonChange} className='row2' value='8'>8</button>
                        <button onClick={this.props.buttonChange} className='row2' value='9'>9</button>
                        <button onClick={this.props.operatorValue} className='orange' value = 'x'>x</button>
                    </div>

                    <div className='row3'>
                        <button onClick={this.props.buttonChange} className='row3' value='4'>4</button>
                        <button onClick={this.props.buttonChange} className='row3' value='5'>5</button>
                        <button onClick={this.props.buttonChange} className='row3' value='6'>6</button>
                        <button onClick={this.props.operatorValue} className='orange' value = '-'>-</button>
                    </div>

                    <div className='row4'>
                        <button onClick={this.props.buttonChange} className='row4' value='1'>1</button>
                        <button onClick={this.props.buttonChange} className='row4' value='2'>2</button>
                        <button onClick={this.props.buttonChange} className='row4' value='3'>3</button>
                        <button onClick={this.props.operatorValue} className='orange' value = '+'>+</button>
                    </div>

                    <div className='row5'>
                        <button onClick={this.props.buttonChange} className='zero' value='0'>0</button>
                        <button onClick={this.props.buttonChange} className='row5'value = '.'>.</button>
                        <button onClick={this.props.solveEquation} className='orange'>=</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default KeyPad;