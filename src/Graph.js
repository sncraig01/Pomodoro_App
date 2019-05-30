import React from "react";
import "./App.css";
import "./Graph.css";
import * as V from 'victory';
import { VictoryBar, VictoryChart } from 'victory';

class Graph extends React.Component {

    state= {
        data: [],

        formattedData: [],
    }


    countInArray(array, what) {
        var count = 0;
        for (var i = 0; i < array.length; i++) {
            if (array[i] === what) {
                count++;
            }
        }
        return count;
    }

    componentDidMount(){  //grab the data from props and save it to state 
        let alldata = this.props.data;

        //get an array of each date ONCE
        let datesONCE = [];
        //get an array of all the dates
        let datesALL = [];

        for( let i = 0; i < alldata.length; i ++ ){
            let testDate = alldata[i].date;
            datesALL.push( testDate ); //add them all to this one
            if( !datesONCE.includes( testDate ) ){ //add each one once to this one
                datesONCE.push( testDate )
            }
        }

        console.log( "dates once: ");
        for( let i = 0; i < datesONCE.length; i ++ ){
            console.log( datesONCE[i] );
        }
        console.log( "ALL DATES: ");
        for( let i = 0; i < datesALL.length; i ++ ){
            console.log( datesALL[i] );
        }


        console.log( this.countInArray( datesALL, "May 30, 2019"))

        //make an array that combines the two
        var dict = []; //where we will map dates to the number of activities
        for( let i = 0; i < datesONCE.length ; i++ ){
            dict.push( { 
                date: datesONCE[i],
                count: this.countInArray( datesALL, datesONCE[i])
            })
        }


        this.setState( {formattedData: dict }); //set the state to have the data for the graph

        console.log( "data: ");
        for( let i = 0; i < dict.length; i ++ ){
            console.log( dict[i].date + " ---> " + dict[i].count );
        }


    }


    render(){
        return (
            <div className="App">
                <div type="graph"> 
                    {(this.state.formattedData.length !== 0 ) ?      
                    <VictoryChart>
                        <VictoryBar data={this.state.formattedData} x="date" y="count"/> 
                    </VictoryChart> : null  }
                    
                </div>
            </div>
        );
    

    }

}

export default Graph;
