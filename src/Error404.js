//Including modules and components
import React from 'react';

//The Error Component 
export default class Error404 extends React.Component{
    constructor(props)
    {
        super(props);
        this.navigate = this.navigate.bind(this);
    }

    //This function changes the history property of props to '/' so that the home page can be rendered 
    navigate()
    {
        this.props.history.push('/');
    }
    //This function holds the data to be rendered on the browser
    render()
    {
        return(
            <center>
                <h1>Sorry</h1>
                <h3>URL not found</h3>
                <button  className="btn btn-primary" onClick={this.navigate}>Home</button>
            </center>
        )
    }
}