import React from "react";
import {Button, DatePicker, Divider, Form, Input} from "antd";
import {
    REGISTRY_PERSON_DATE_MANUAL,
    REGISTRY_PERSON_END_DATE,
    REGISTRY_PERSON_START_DATE
} from "../../../constants";
import moment from "moment";

export default class PersonDate extends React.Component {
    saveData = values => {
        if (values.start_date !== undefined && values.start_date !== null)
            localStorage.setItem(REGISTRY_PERSON_START_DATE, values.start_date);
        else
            localStorage.removeItem(REGISTRY_PERSON_START_DATE);
        if (values.end_date !== undefined && values.end_date !== null)
            localStorage.setItem(REGISTRY_PERSON_END_DATE, values.end_date);
        else
            localStorage.removeItem(REGISTRY_PERSON_END_DATE);
        if (values.date_manual !== undefined)
            localStorage.setItem(REGISTRY_PERSON_DATE_MANUAL, values.date_manual);
        this.props.next();
    };

    inititalValues = {};

    UNSAFE_componentWillMount() {
        if (localStorage.getItem(REGISTRY_PERSON_DATE_MANUAL) !== undefined)
            this.inititalValues['date_manual'] = localStorage.getItem(REGISTRY_PERSON_DATE_MANUAL);
        if (localStorage.getItem(REGISTRY_PERSON_START_DATE) !== undefined &&
            localStorage.getItem(REGISTRY_PERSON_START_DATE) !== null )
            this.inititalValues['start_date'] = moment(localStorage.getItem(REGISTRY_PERSON_START_DATE));
        if (localStorage.getItem(REGISTRY_PERSON_END_DATE) !== undefined &&
            localStorage.getItem(REGISTRY_PERSON_END_DATE) !== null )
            this.inititalValues['end_date'] = moment(localStorage.getItem(REGISTRY_PERSON_END_DATE));
    }

    render() {
        return (
            <div style={{width: "100%", textAlign: "center"}}>
                <div style={{fontSize: "2em", marginBottom: "0.5em"}}>
                    Dates of their life
                </div>
                <Form
                    onFinish={this.saveData}
                    initialValues={this.inititalValues}
                    scrollToFirstError>
                    <div className="flexHCenter">
                        <Form.Item name="start_date">
                            <DatePicker format="MM-DD-YYYY" placeholder="Start Date" style={{width: "10em"}}/>
                        </Form.Item>
                        <Form.Item style={{marginLeft:"2em"}} name="end_date">
                            <DatePicker  format="MM-DD-YYYY" placeholder="End Date" style={{width: "10em"}}/>
                        </Form.Item>
                    </div>
                    <div className="flexHCenter">
                        <div className="w-50">
                            <Divider>OR</Divider>
                        </div>
                    </div>
                    <div className="flexHCenter">
                        <Form.Item name="date_manual">
                            <Input placeholder="Enter date manually"/>
                        </Form.Item>
                    </div>

                    <div className="flexHCenter">
                        <Button type="primary" className="myButton mr-4" onClick={this.props.prev}>Back</Button>
                        <Form.Item>
                            <Button type="primary" className="myButton" htmlType="submit">Skip/Next</Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>);
    }
}
