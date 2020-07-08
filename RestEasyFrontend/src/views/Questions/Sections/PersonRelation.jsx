import React from "react";
import {Button, Form, Input} from "antd";
import {REGISTRY_FIRST_NAME, REGISTRY_PERSON_RELATION} from "../../../constants";

export default class PersonRelation extends React.Component {
    saveData = values => {
        if (values.relation !== undefined)
            localStorage.setItem(REGISTRY_PERSON_RELATION, values.relation);
        this.props.next();
    };

    render() {
        return (
            <div style={{width: "100%", textAlign: "center"}}>
                <div style={{fontSize: "2em", marginBottom: "0.5em"}}>
                    What is {localStorage.getItem(REGISTRY_FIRST_NAME)} to you?
                </div>
                <Form
                    onFinish={this.saveData}
                    initialValues={{
                        "relation": localStorage.getItem(REGISTRY_PERSON_RELATION)||'',
                    }}
                    scrollToFirstError>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Form.Item name="relation">
                            <Input placeholder="Relation" style={{width: "20vw"}}/>
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
