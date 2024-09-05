import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        // Initialize state with a 'date' property
        this.state = { date: new Date() };
    }
    
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return <h2>It is {this.state.date.toLocaleTimeString()}.</h2>;
    }
}

export default Lifecycle;