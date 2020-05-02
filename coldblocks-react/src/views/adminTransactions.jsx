
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { nodeURL } from "variables/Variables.jsx";
import axios from "axios";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

class AdminTransactions extends Component {
  constructor() {
    super()
    this.state = {
      apiData:{},
      filterTransactionType: '',
      loading:false
    }
  }
  componentDidMount() {
    // console.log("hi");
    fetch(nodeURL+'/api/ListTransactions')
    .then(res => res.json())
    .then((data) => {
      var length = data.length;
      console.log(length)
      // console.log(data)
      var i = 0;
      while(i<length){
          data[i].transactionType = String(data[i].transactionType)
          if(data[i].transactionType.match(/org\.coldblocks\.mynetwork\.TemperatureDrop/g)){
            data[i].transactionType=data[i].transactionType.slice(25);
          }
          if(data[i].transactionType.match(/org\.coldblocks\.mynetwork\.HolderChange/g)){
            data[i].transactionType=data[i].transactionType.slice(25);
          }
          else{
            data[i].transactionType=data[i].transactionType.slice(32);
            // data[i].transactionType=data[i].transactionType;
          }
          
          // if(data[i].participantInvoking)
          // {data[i].participantInvoking=data[i].participantInvoking.slice(54);}

          data[i].transactionTimestamp = new Date(data[i].transactionTimestamp)
          // data[i].transactionTimestamp = String(data[i].transactionTimestamp).slice(0,25)
          // console.log("inside while status: 0")          
            i += 1;
      }
      data = data.sort((a, b) => b.transactionTimestamp - a.transactionTimestamp)
      var j=0;
      while(j<data.length){
        data[j].transactionTimestamp = String(data[j].transactionTimestamp).slice(0,25);
        j+=1;
      }
      this.setState({ apiData: data })
      console.log(data);
    })
    .catch(console.log)
  }

  handleChange = async event => {
    this.setState({
            filterTransactionType : event.target.value
    })
  }

  handleSubmit =  async event => {
    event.preventDefault();
    this.setState({loading: true}, ()=>{
      console.log("loader until fetch new data")
    })
    this.filterTransactions(this.state.filterTransactionType);
  }

  filterTransactions(e){
    axios.get(nodeURL+`/api/ListTransactions`)
      .then(res => {
        console.log(res)
        var data = res.data;
        var length = data.length;
        console.log(length)
        var i = 0;
        var str = [];
        while(i<length){
              data[i].transactionType = String(data[i].transactionType)
              if(data[i].transactionType.match(/org\.coldblocks\.mynetwork\.TemperatureDrop/g)){
                data[i].transactionType=data[i].transactionType.slice(25);
              }
              else{
                data[i].transactionType=data[i].transactionType.slice(32);
                // data[i].transactionType=data[i].transactionType;
              }
              if(data[i].transactionType==e){
                var newStr = {transactionType: e, participantInvoking : data[i].participantInvoking, transactionTimestamp : new Date (data[i].transactionTimestamp)}            
                str.push(newStr)
              }
              i+=1
        }
        var sortedNewStr = str.sort((a, b) => b.transactionTimestamp - a.transactionTimestamp)
        var j=0;
        while(j<sortedNewStr.length){
          sortedNewStr[j].transactionTimestamp = String(sortedNewStr[j].transactionTimestamp);
          j+=1;
        }
        // this.setState({apiData: newStr })
        console.log(sortedNewStr)
        this.setState({loading: false, apiData: sortedNewStr}, ()=>{
          console.log("loader stops")
        })
        // console.log(str[1].participantInvoking)
      })
  }
  render() {
    const {apiData} = this.state;
    return (
      <div className="content">
        <Grid fluid>
        <Row>
            <Col md={12}>
              <Card
                title="Query Transactions"
                content={
                  <form onSubmit={this.handleSubmit}>
                    <FormInputs 
                      ncols={["col-md-5", "col-md-6"]}
                      properties={[
                        {
                          label: "Company (disabled)",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Company",
                          defaultValue: "ColdBlocks",
                          disabled: true
                  
                        },
                        {
                          label: "Transaction Type",
                          type: "text",
                          bsClass: "form-control",
                          onChange: this.handleChange,
                          placeholder: "Transaction Type",                                          
                        }
                      ]}
                    />       
                    <Button bsStyle="success" pullRight fill type="submit">
                      Submit
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card
                title="System Transactions"
                category="View all historian records."
                ctTableFullWidth
                ctTableResponsive
                content={
                  <>
                  {/* use boolean logic for loader or data */}
                    {this.state.loading ? <Loader
                    className="text-center"
                    type="Rings"
                    color="#757575"
                    height={100}
                    width={100}
                    //3 secs
          
                    /> : <Table striped hover>
                    <thead>
                      <tr>
                        <th>Transaction Type</th>
                        <th>Participant Invoking</th>                        
                        <th>Time Stamp</th>                        
                      </tr>

                    </thead>
                    <tbody>                     
                      {Array.isArray(apiData) && apiData.map(object => (
                        <>
                          <tr>
                            <td>{object.transactionType}</td>                            
                            <td>{object.participantInvoking}</td>
                            <td>{object.transactionTimestamp}</td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </Table>
                }
                </>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default AdminTransactions;
