import React from 'react';
import {Collapse} from "antd";

class FAQ extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                <b style={{fontSize: "2em"}}>Any Questions?</b>
                <Collapse style={{width: "60%", marginTop: "2em", marginBottom: "2em"}}>
                    <Collapse.Panel header="1. How much does it costs?" key="1">
                        <b>$20</b>
                    </Collapse.Panel>
                    <Collapse.Panel header="2. When do I need to pay?" key="2">
                        <b>Only once</b>
                    </Collapse.Panel>
                </Collapse>
            </div>
        )
    }
}

export default FAQ;
