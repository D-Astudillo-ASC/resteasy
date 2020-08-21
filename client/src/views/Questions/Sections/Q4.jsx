import React from "react";
import {Button, DatePicker, Form, Input, TimePicker} from "antd";
import GoogleAutoComplete from 'react-auto-complete-address-fields';
import './GoogleAutoComplete.css';
import "../Questions.css"
import * as constants from "../../../constants";

export default class Q4 extends React.Component {

    constructor()  {
        super();
        this.state = {
            secondService: false,
        }
        this.callbackFunc = this.callbackFunc.bind(this);
        this.callbackFuncSec = this.callbackFuncSec.bind(this);

    }
    
    handleClick = () => {
        if(this.state.secondService){
            this.setState({
                secondService: false,
            })
        } else {
            this.setState({
                secondService: true,
            })
        }
    }

	callbackFunc  = ( autoCompleteData ) => {
        //You can use the address data, passed by autocomplete as you want.
        localStorage.setItem("service_location", autoCompleteData);
    }
    
    callbackFuncSec  = ( autoCompleteData ) => {
        //You can use the address data, passed by autocomplete as you want.
        localStorage.setItem("service_location_two", autoCompleteData);
	}

    saveData = values => {
        localStorage.setItem("date", values.date);
        localStorage.setItem("time", values.time);
        localStorage.setItem("location", values.location);
        localStorage.setItem("description", values.description);

        localStorage.setItem("date_two", values.date_two);
        localStorage.setItem("time_two", values.time_two);
        localStorage.setItem("location_two", values.location_two);
        localStorage.setItem("description_two", values.description_two);
        this.props.next();
    };

    render() {
        const inputStyle = {
            borderRadius: "12px",
            textAlign: "center",
            fontSize: "17px",
            border: "1px solid #578C3D",
            width: "235px",
            height:"40px",
            margin: "10px"
        }

        const navButton = {
            borderRadius: "10px",
            margin: "10px",
            width: "100px"
        }

        const secondForm = (this.state.secondService ? 
                <div>
                    
                    <hr style={{width: "100%"}}/>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "40px"}}>
                        <Form.Item name="date_two">
                            <DatePicker placeholder="Date" style={inputStyle} />
                        </Form.Item>
                        <Form.Item style={{ margin: "0em 2em" }} name="time_two">
                            <TimePicker placeholder="Time" style={inputStyle} />
                        </Form.Item>
                    </div>

                    <GoogleAutoComplete style={{ width: "50px", height: "50px", padding: "0px" }}
                        apiKey={constants.GOOGLE_MAPS_KEY}
                        id='location'
                        fields={{
                            streetAddress: "route_two",
                            streetAddress2: "administrative_area_level_4_two",
                            locality: "locality_two",
                            cityOrState: "administrative_area_level_1_two",
                            postalcode: "postal_code_two",
                            country: "country_two"
                        }}
                        callbackFunctionSecond={this.callbackFuncSec}
                    />

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Form.Item name="description_two">
                            <Input.TextArea placeholder="Description/Details" style={{ width: "34em", height: "10em", borderRadius: "10px", whiteSpace: "pre-wrap",  border: "1px solid #578C3D"}} />
                        </Form.Item>
                    </div>

                    <div>
                        <Button type="primary" onClick={this.handleClick} style={{marginLeft: "10px", borderRadius: "10px",  marginBottom: "30px"}}>Remove second service</Button>
                    </div>
                </div>
                :
                <div>
                    <Button type="primary" onClick={this.handleClick} style={{ marginLeft: "10px", borderRadius: "10px", marginBottom: "30px" }}>Add a second service</Button>
                </div>
        )
        
        return (
            <div style={{width: "100%", textAlign: "center"}}>
                <div className="create-text-no-flex" style={{fontSize: "1.5em", marginBottom: "0.5em"}}>
                    Do you want to display funeral/service information on the memory? <br />
                    <h5>This can be removed later.</h5>
                </div>
                <Form
                    onFinish={this.saveData}
                    scrollToFirstError>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Form.Item name="date">
                            <DatePicker placeholder="Date" style={inputStyle}/>
                        </Form.Item>
                        <Form.Item style={{margin:"0em 2em"}} name="time">
                            <TimePicker placeholder="Time" style={inputStyle}/>
                        </Form.Item>
                    </div>

                    <GoogleAutoComplete style={{width: "50px", height: "50px", padding: "0px"}}
                            apiKey={constants.GOOGLE_MAPS_KEY}
                            id='location'
                            key='one'
                            fields={{
                                streetAddress: "route",
                                streetAddress2: "administrative_area_level_4",
                                locality: "locality",
                                cityOrState: "administrative_area_level_1",
                                postalcode: "postal_code",
                                country: "country"
                            }}
                            callbackFunction={this.callbackFunc}
                        />

                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Form.Item name="description">
                            <Input.TextArea placeholder="Description/Details" style={{width: "34em", height: "10em", borderRadius: "10px",  border: "1px solid #578C3D"}}/>
                        </Form.Item>
                    </div>

                    {secondForm}
                    
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Button type="primary" onClick={this.props.prev} style={navButton}>Previous</Button>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={navButton}>Skip/Next</Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>);
    }
}
