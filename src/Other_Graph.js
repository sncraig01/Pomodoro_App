import React from "react";
import "./App.css";
import "./Graph.css";
import * as V from 'victory';
import { VictoryLabel, VictoryChart, VictoryAxis, VictoryTheme, VictoryScatter} from 'victory';

class Other_Graph extends React.Component {

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
        let timesONCE = [];
        //get an array of all the dates
        let timesALL = [];

        for( let i = 0; i < alldata.length; i ++ ){
            let testTime = alldata[i].time;
            timesALL.push( testTime.substring(0, 2 )) //add them all to this one
            if( !timesONCE.includes( testTime ) ){ //add each one once to this one
                timesONCE.push( testTime.substring(0, 2) )
            }
        }

        //make an array that combines the two
        var dict = []; //where we will map dates to the number of activities
        for( let i = 0; i < timesONCE.length ; i++ ){
            dict.push( { 
                time: timesONCE[i],
                count: this.countInArray( timesALL, timesONCE[i])
            })
        }

        this.setState( {formattedData: dict }); //set the state to have the data for the graph
        console.log( "data: ");
        for( let i = 0; i < dict.length; i ++ ){
            console.log( dict[i].time+ " ---> " + dict[i].count );
        }
    }


    render(){
        return (
            <div className="App">
                <div type="othergraph"> 
                {(this.state.formattedData.length !== 0 ) ?   
                    <VictoryChart style={{ parent: { maxWidth: "60%" } }}
                      theme={VictoryTheme.material}>
                        <VictoryLabel text="Your Activity History by Time" x={185} y={30} textAnchor="middle" style={{ fontSize: 27}} />
                        <VictoryAxis tickFormat= {(x) => ( x > 12 ? (x - 12) + " pm" : x + " am" )}  />
                        <VictoryAxis dependentAxis tickFormat={(x) => (x)} />
                        <VictoryScatter
                            size={7} 
                            style={{ data: { fill: "#c43a31" } }}
                            data={this.state.formattedData}
                            x="time" y="count" />
                    </VictoryChart>
                      : null  }
                    
                </div>
            </div>
        );
    

    }

}

export default Other_Graph;