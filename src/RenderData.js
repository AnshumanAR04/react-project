//including modules 
import React from 'react';

export default class RenderData extends React.Component {
    constructor(props) 
    {
        super(props);
        this.navigate = this.navigate.bind(this);
    }
    //This function changes the history property of props to '/info' so that the info page can be rendered 
    navigate(index) 
    {
        this.props.history.push('/info',
            {
                repositoryDataIndex: index,
                searchResult: this.props.searchResult,
                keyword: this.props.keyword,
                sortBy:this.props.sortBy
            })
    }

    //This function holds the data to be rendered on the browser
    render() 
    {
        //Preparring the Table of Search Results
        let tableRow = [];
        for (let repository in this.props.searchResult) {
            tableRow.push(
                <tr key={repository}>
                    <td>{this.props.searchResult[repository]['name']}</td>
                    <td className="align-center">{this.props.searchResult[repository]['score']}</td>
                    <td className="align-center">{this.props.searchResult[repository]['forks']}</td>
                    <td className="align-center">{this.props.searchResult[repository]['watchers']}</td>
                    <td className="align-center">
                        <button className="btn-sm btn-primary" onClick={this.navigate.bind(this, repository)}>More</button>
                    </td>
                </tr>
            )
        }
        return (
            <table className="width-50 margin-top-3">
                <tbody>
                <tr className="align-center">
                    <td className="border-1">Name</td>
                    <td className="border-1">Score</td>
                    <td className="border-1">Forks</td>
                    <td className="border-1">Watchers</td>
                    <td className="border-1">Action</td>
                </tr>
                {tableRow}
                </tbody>
            </table>
        )
    }
}
