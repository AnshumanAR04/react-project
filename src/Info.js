import React from 'react';

export default class RepoInfo extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            index:this.props.location.state.repositoryDataIndex,
            searchResult:this.props.location.state.searchResult,
            keyword:this.props.location.state.keyword,
            sortBy:this.props.location.state.sortBy
        };
        this.navigate = this.navigate.bind(this);
        this.createRow = this.createRow.bind(this);
    }

    createRow(){
        let tableRow=[];
        let repository = this.state.searchResult[this.state.index];
        let displayName = ["Name","Full name","Forks","Language","Size","Score","Open issues","Watchers"];
        let accessName = ["name","full_name","forks","language","size","score","open_issues","watchers"];
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

    navigate(){
        this.props.history.push('/',this.state);
    }

    render(){
        let tableRow = this.createRow();
        return(
            <center>
                <h1>{this.state.searchResult[this.state.index]["name"]}</h1>
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