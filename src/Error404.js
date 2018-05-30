import React from 'react';

export default class Error404 extends React.Component{
    constructor(props){
        super(props);
        this.navigate = this.navigate.bind(this);
    }

    navigate(){
        this.props.history.push('/');
    }

    render(){
        return(
            <center>
                <h1>Sorry</h1>
                <h3>URL not found</h3>
                <button  className="btn btn-primary" onClick={this.navigate}>Home</button>
            </center>
        )
    }
}