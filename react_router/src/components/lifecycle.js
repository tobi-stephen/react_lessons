import React, { Component } from 'react';

class Lifecycle extends Component{
    //GET DEFAULT STATE
    constructor(props){
        super(props)

        //SET INITIAL STATE
        this.state = {
            title: 'Pulp fiction in cinemas',
            body: 'some dummy text'
        }
    }

    //BEFORE GETS CREATE
    componentWillMount(){
        console.log('Before component gets created');
    }

    //RENDER JSX
    render(){
        return (
            <div>
                <h4>{this.state.title}</h4>
                <br/>
                <div>{this.state.body}</div>
                <div onClick={() => this.setState({title:'Something Else'})}>CLICK TO CHANGE</div>
            </div>
        )
    }

    componentWillReceiveProps(){
        console.log('Before recieving props')
    }
    //AFTER COMPONENT IS MOUNTED
    componentDidMount(){
        console.log("AFTER COMPONENT IS MOUNTED")
        document.querySelector('h4').style.color = 'red'
    }

    //TO UPDATE COMPONENT
    componentWillUpdate(){
        console.log('BEFORE UPDATE')
    }

    componentDidUpdate(){
        console.log("AFTER UPDATE")
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.title === "Something else") return false;
        return true
    }

    componentWillUnmount(){
        console.log('UNMOUNT')
    }
}

export default Lifecycle;