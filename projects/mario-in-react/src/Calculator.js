import React from 'react'

class Calculator extends React.Component{
    constructor(){
        super()
        this.state = {
            goombaValue: '',
            bobombValue: '',
            cheepValue: '',
            total: 0
        }
    }

    handleChange = (e) => {
        let { name, value } = e.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit = (e) => {
        let goomba = this.state.goombaValue * 5
        let bomb = this.state.bobombValue * 7
        let cheep = this.state.cheepValue * 9
        this.setState({
            total: goomba + bomb + cheep
        })
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({
            goombaValue: '',
            bobombValue: '',
            cheepValue: ''
        })
    }


    render(){
        return(
            <div>
                Goomba<input type="number" value={this.state.goombaValue} name='goombaValue' placeholder='Enter Number Caught' onChange={this.handleChange}/>
                Bo-bomb<input type="number" value={this.state.bobombValue} name='bobombValue' placeholder='Enter Number Caught' onChange={this.handleChange}/>
                Cheep-Cheep<input type="number" value={this.state.cheepValue} name='cheepValue' placeholder='Enter Number Caught' onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Calc Total</button>
                Total =  {this.state.total}
            </div>
        )
    }
}

export default Calculator