import React, { Component } from 'react'
import Button from '@material-ui/core/Button'



export default class itemCount extends Component {
    constructor(){
        super();

        this.state = {
            Contador: 0,
        };
    }

    handleIncrement = () => {
        this.setState({Contador: this.state.Contador + 1});
    };
    handleDecrement = () => {
        this.setState({Contador: this.state.Contador - 1});
    };

    

    render() { 
        
        return (
            <div>
                <p>{this.state.Contador}</p>
               <Button onClick={this.handleIncrement} color="secondary" variant="contained"
      size="large">+</Button> 
               <Button onClick={this.handleDecrement} color="secondary" variant="contained"
      size="large">-</Button>
            </div>
        )
    }
}
 