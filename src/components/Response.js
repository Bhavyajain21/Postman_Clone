import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Tab, Tabs } from "react-bootstrap";

const Response = ({status,time,size,response,responseHeaders}) => {
    return ( 
        <div>
            <h3>Response</h3>
            <div className="d-flex my-2">
                <div className="me-3">Status: {status}</div>
                <div className="me-3">Time: {time} ms</div>
                <div className="me-3">Size: {size}</div>
            </div>
            <div>
                <Tabs
                    defaultActiveKey="body"
                    id="uncontrolled_tab_example"
                    className = "nav nav_tabs"
                >
                    <Tab eventKey="body" title="Body">
                        <pre className="scroll">
                            {JSON.stringify(response,null,2)}
                        </pre>
                    </Tab>
                    <Tab eventKey="response" title="Response">
                        <pre>{JSON.stringify(responseHeaders, null, 2)}</pre>
                    </Tab>
                </Tabs>
            </div>
        </div>
     );
}
 
export default Response;