import React from 'react';

export default class RenderData extends React.Component {
    constructor(props) {
        super(props);
        this.navigate = this.navigate.bind(this);
    }

    navigate(index) {
        this.props.history.push('/info',
            {
                repositoryDataIndex: index,
                searchResult: this.props.searchResult,
                keyword: this.props.keyword,
                sortBy:this.props.sortBy
            })
    }

    render() {
        let tableRow = [];
        for (let repository in this.props.searchResult) {
            tableRow.push(
                <tr key={repository}>
                    <td>{this.props.searchResult[repository]["name"]}</td>
                    <td className="align-center">{this.props.searchResult[repository]["score"]}</td>
                    <td className="align-center">{this.props.searchResult[repository]["forks"]}</td>
                    <td className="align-center">{this.props.searchResult[repository]["watchers"]}</td>
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
