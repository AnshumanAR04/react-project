import React from 'react';
import $ from 'jquery';
import RenderData from './RenderData';
import Input from "./Input";

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            keyword:"", searchResult:[],
            sortBy:{value:"score",label:"Score"}
        };
        if(this.props.location.state!==undefined){
            this.state={
                keyword:this.props.location.state.keyword,
                searchResult:this.props.location.state.searchResult,
                sortBy:this.props.location.state.sortBy
            }
        }
        this.navigate = this.navigate.bind(this);
        this.changeState = this.changeState.bind(this);
        this.search = this.search.bind(this);
        this.changeSort = this.changeSort.bind(this);
    }
    //api fetch
    search(){
        if(this.state.keyword === "")
            return;
        document.getElementById('Loading').classList.add("loader");
        $.ajax({
            url: 'https://api.github.com/search/repositories',
            type: 'GET',
            data: {q:this.state.keyword},
            success: (response)=>{
                let searchResult = response["items"];
                let sortBy = this.state.sortBy["value"];
                searchResult.sort(function(a,b) {return ((a[sortBy] > b[sortBy])?1:-1)} );
                this.setState({searchResult:response["items"]});
                document.getElementById('Loading').classList.remove("loader");
            }
        });
    }

    changeSort(sort){
        let sortBy = sort["value"];
      
        let newSearchResults = this.state.searchResult;
        newSearchResults.sort(function(a,b) {return ((a[sortBy] < b[sortBy])?1:-1)} );
        this.setState({searchResults:newSearchResults,sortBy:sort});
      
    }


    changeState(key,value){
        this.setState({
            [key]:value
        })
    }

    navigate(){
        this.props.history.push('/ansh');
    }

    render(){
        return(
            <div className="margin-bottom-10">
                <center>
                    <h1 className="margin-top-2">Github !</h1>
                    <h3> Enter name of the tech you are looking for </h3>
                    <Input searchClick={this.search} {...this.state} changeState={this.changeState.bind(this)} onSortChange={this.changeSort}/>
                    <RenderData {...this.state} history={this.props.history}/>
                <div id="Loading" className="margin-top-3 "></div>
                </center>
            </div>
        )
    }
}