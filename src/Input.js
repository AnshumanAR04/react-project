import React from 'react';
import Select from 'react-select';

export default class Input extends React.Component{
    constructor(props){
        super(props);
        this.searchClick = this.searchClick.bind(this);
        this.onchangeOfParentState = this.onchangeOfParentState.bind(this);
        this.onSortChange = this.onSortChange.bind(this);
    }

    searchClick(){
        if(this.props.keyword==="")
            document.getElementById("input-github").classList.add("field-with-error");
        this.props.searchClick();
    }

    onchangeOfParentState(event){
        if(event.target.value!=="")
            document.getElementById("input-github").classList.remove("field-with-error");
        this.props.changeState("keyword",event.target.value);
    }

    onSortChange(value){
        this.props.onSortChange(value);
    }

    render(){
        let options = [
            {value:"score",label:"Score"},
            {value:"name",label:"Name"},
            {value:"watchers",label:"Watch"},
            {value:"forks",label:"Forks"}
            ];
        return(
            <table className="margin-top-3 width-40">
                <tbody>
                <tr>
                    <td className="width-40">
                        <input id="input-github" type="text" className="form-control" onChange={this.onchangeOfParentState} value={this.props.keyword}/>
                    </td>
                    <td className="width-15">
                        <button className="btn btn-primary width-90 margin-left-5" onClick={this.searchClick}>Search</button>
                    </td>
                    <td className="width-15 align-center"><p className="margin-top-15">sort by</p></td>
                    <td className="width-30">
                        <Select
                            multi={false}
                            options={options}
                            onChange={this.onSortChange}
                            value={this.props.sortBy}
                            className="form-field-name"
                        />
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}