//Including modules
import React from 'react';

//The RepoInfo Component that is responsible to display the detailed discription of repositories
export default class RepoInfo extends React.Component
{

    //The constructor of the component
    constructor(props)
    {
        super(props);
        console.log(this.props);
        //Defining the initial state values
        this.state = {
            index:this.props.location.state.repositoryDataIndex,
            searchResult:this.props.location.state.searchResult,
            keyword:this.props.location.state.keyword,
            sortBy:this.props.location.state.sortBy
        };
        //Binding the functions
        this.navigate = this.navigate.bind(this);
        this.createRow = this.createRow.bind(this);
    }
    //The function that populates the results fetched from the api into a table
    createRow()
    {
        let tableRow=[];
        let repository = this.state.searchResult[this.state.index];
        let displayName = ['Name','Full name','Forks','Language','Size','Score','Open issues','Watchers'];
        let accessName = ['name','full_name','forks','language','size','score','open_issues','watchers'];
        for(let property in accessName){
            tableRow.push(
                <tr key={property}>
                    <td className="bold-font">{displayName[property]}</td>
                    <td>{repository[accessName[property]]}</td>
                </tr>
            )
        }
        return tableRow;
    }
    //This function changes the history property of props to '/' so that the home page can be rendered 
    navigate()
    {
        this.props.history.push('/',this.state);
    }
    //This function hold the data to be rendered on the browser
    render()
    {
        let tableRow = this.createRow();
        return(
            <center>
                <h1>{this.state.searchResult[this.state.index]['name']}</h1>
                <table className="margin-top-3">
                    <tbody>
                    {tableRow}
                    </tbody>
                </table>
                <button className="btn btn-primary margin-top-3" onClick={this.navigate}>Back</button>
            </center>
        )
    }
}