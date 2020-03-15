import React, { Component } from 'react'

class Practice extends Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }
    submitvalue = () => {
        this.setState( prevState => {
           return { count: prevState.count +1 }
        })
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <p>Count {count}</p>
                <button onClick={this.submitvalue}>increment</button>
            </div>
        )
    }
}

export default Practice
