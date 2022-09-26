import React from "react";

class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    increment(){
        console.log('increment')
        this.setState({count: this.state.count + 1})
        console.log(this.count)
    }
    decrement(){
        console.log('decrement')
        this.setState({count: this.state.count - 1})
    }
    render() {
        return (
            <div>
                <h1>Class Counter {this.state.count}</h1>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
            </div>
        )
    }
}

export default ClassCounter