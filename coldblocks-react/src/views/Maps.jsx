
import React, {useState} from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import {Card} from "components/Card/Card"
import axios from "axios"
import { nodeURL } from "variables/Variables.jsx";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const maps_api = process.env.REACT_APP_MAPS_API_KEY
const maps_url = "https://maps.googleapis.com/maps/api/js?key="+maps_api
// const maps_url = "https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"

function Maps({ ...prop }) {
  const [packageId, setPackageId] = useState(
    ''
  );
  const [location, setLocation] = useState(
    ''
  );
  const handleChange = event => {
    setPackageId(event.target.value)
  }
  const handleSubmit = event => {
    event.preventDefault();
    axios.get(nodeURL+"/api/ListPackagesById?packageId="+packageId)
    .then(res => {
      // console.log(res)
      console.log(res.data[0].location)
      setLocation(res.data[0].location)
    })
  }
  const CustomMap = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={location || { lat: 10.5545, lng: 76.2247 }}
        defaultOptions={{
          scrollwheel: false,
          zoomControl: true
        }}
      >
        <Marker position={location || { lat: 10.5545, lng: 76.2247 }} />
      </GoogleMap>
    ))
  );
  return (
    <div className="content">
    <Row>
      <Col xs="12">
      <Card
                title="Package Location"
                content={
                  <form onSubmit={handleSubmit}>
                    <FormInputs 
                      ncols={["col-md-6", "col-md-6"]}
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
                          label: "Package ID",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Package ID", 
                          onChange: handleChange,
                          name: "pId",
                          required : true
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
    <CustomMap
      googleMapURL={maps_url}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
    </div>
  );
}
export default Maps;
