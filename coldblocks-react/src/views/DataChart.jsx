
import React, { Component } from "react";
import {Grid, Row, Col } from "react-bootstrap";
import Card from "components/Card/Card";
import ChartistGraph from 'react-chartist';
import axios from 'axios';
import {
  legendSales
} from "variables/Variables.jsx";
class Chart extends Component {
  constructor(){
    super()
    this.state = {
      temp: [],
      status: [],
      dateLabel: []
    }
  }
  componentDidMount() {
    // app.get("/api/chartTemp", (req,res)=>{
    //     console.log("res.body.temperature: "+req.query.temperature)
    //     chart_temp.push(req.query.temperature)
    //     console.log(chart_temp);
    axios.get(`http://localhost:4000/api/chartStatus`)
    .then(res => {
          console.log("res.data: "+res.data)
          console.log(this.state.status)
    })
    axios.get(`http://localhost:4000/api/getCStatus`)
      .then(res => {
            console.log("res.data: "+res.data)
            this.setState({
              status : res.data
            }, ()=>{
              console.log("callback for setState of status");
            })
            console.log(this.state.status)
      })
    axios.get(`http://localhost:4000/api/getTemp`)
      .then(res => {
            console.log("res.data: "+res.data)
            this.setState({
              temp : res.data
            }, ()=>{
              console.log("callback for setState of temp");
            })
            console.log(this.state.temp)
      })
  }
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    var total_pie= this.state.status[0]+this.state.status[1];
    var dataPie = {
      labels: [String(((this.state.status[0]/total_pie)*100).toFixed(2))+'%', String(((this.state.status[1]/total_pie)*100).toFixed(2)+'%')],
      series: this.state.status
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
                    <div className="legend">{this.createLegend(legendSales)}</div>
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
