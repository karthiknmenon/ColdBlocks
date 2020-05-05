
import React, { Component } from "react";
import {Grid, Row, Col } from "react-bootstrap";
import Card from "components/Card/Card";
import ChartistGraph from 'react-chartist';
import axios from 'axios';
import { nodeURL } from "variables/Variables.jsx";
import {
  legendSales
} from "variables/Variables.jsx";
class Chart extends Component {
  constructor(){
    super()
    this.state = {
      temp: [],
      status: [],
      dateLabel: [],
      package:[],
      statusOk:'',
      statusTampered:''
    }
  }
  componentDidMount() {
    axios.get(nodeURL+`/api/ListPackagesByStatus?packageStatus=1`)
    .then(res => {
          console.log("res.data: "+res.data)
          this.setState({
                statusOk : res.data.length
          })
          console.log("Ok :"+this.state.statusOk)
    })
    axios.get(nodeURL+`/api/ListPackagesByStatus?packageStatus=0`)
    .then(res => {
          console.log("res.data: "+res.data)
          this.setState({
                statusTampered : res.data.length
          })
          console.log("Tampered: "+this.state.statusTampered)
    })

    axios.get(nodeURL+`/api/getTemp`)
      .then(res => {
            console.log("res.data: "+res.data)
            this.setState({
              temp : res.data
            }, ()=>{
              console.log("callback for setState of temp");
            })
            console.log(this.state.temp)
      })

    axios.get(nodeURL+`/api/getLabel`)
      .then(res => {
            console.log("res for datelabel: "+res)
            console.log("res.data for datelabel: "+res.data)
            this.setState({
              dateLabel : res.data
            }, ()=>{
              console.log("callback for setState of datelabel");
            })
            console.log(this.state.temp)
      })

    axios.get(nodeURL+`/api/getPackageInfo`)
      .then(res => {
            console.log("res for datelabel: "+res)
            console.log("res.data for datelabel: "+res.data)
            this.setState({
              package : res.data
            }, ()=>{
              console.log("callback for setState of datelabel");
            })
            console.log(this.state.temp)
      })
  }

  createLegend() {
    var legend = [];
    legend = [<i className="fa fa-circle text-danger" key="1" />, ,"Tampered", <i className="fa fa-circle text-info" key="2" />, ,"Ok"];
    return legend;
  }
  createLegendLine() {
    var legend = [];
    for (var i = 0; i < this.state.package.length; i++) {
      var type = "fa fa-circle text-" + legendSales["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(this.state.package[i]);
      console.log("legend for line"+legend)
    }
    return legend;
  }
  render() {
    var total_pie= this.state.statusOk+this.state.statusTampered;
    var dataPie = {
      labels: [String(((this.state.statusOk/total_pie)*100).toFixed(2))+'%', String(((this.state.statusTampered/total_pie)*100).toFixed(2)+'%')],
      series: [this.state.statusOk, this.state.statusTampered]
    };
    console.log(dataPie)

    // Create a line chart with responsive options

    var data = {
      labels: this.state.dateLabel,
      series : this.state.temp
    };
  
    var optionsSales = {
          low: -50,
          high: 50,
          showArea: false,
          height: "245px",
          axisX: {
              showGrid: false,
          },
          lineSmooth: true,
          showLine: true,
          showPoint: true,
          fullWidth: true,
          chartPadding: {
              right: 50
          }
    };
    
    var responsiveOptions = [
      ['screen and (min-width: 641px) and (max-width: 1024px)', {
        showPoint: false,
        axisX: {
          labelInterpolationFnc: function(value) {
            
            return value.slice(0, 3);
          }
        }
      }],
      ['screen and (max-width: 640px)', {
        showLine: false,
        axisX: {
          labelInterpolationFnc: function(value) {
            return value[0];
          }
        }
      }]
    ];
    var legend_Pie = {
      names: ["Tampered", "Ok"],
      types: ["danger", "info"]
    };
    console.log("legend pie: "+legend_Pie.names+"legend pie:"+legend_Pie.types)
   
    return (
  
      <div className="content">
          <Grid>
            <Row>
              <Col md={12}>
               <Card
                title="Package Temperature"
                category="Line Graph for Package Temperature"                
                content={
                  <ChartistGraph
                    data={data}
                    type="Line"
                    options={optionsSales}
                    responsiveOptions={responsiveOptions}
                    />                    
                  }
                  legend={
                    <div className="legend">{this.createLegendLine()}</div>
                  }
                 
                />
              
              </Col>
            </Row>
            <Row>
              
              <Col md={12}>
                <Card
                  title="Package Status"
                  category="Pie Graph for Package Status"                
                  content={
                    <ChartistGraph data={dataPie} type="Pie"/>
                  }
                  legend={
                    <div className="legend">{this.createLegend(legend_Pie)}</div>
                  }
                />
              </Col>
            </Row>
          </Grid>
      </div>
    );
  }
}

export default Chart;
