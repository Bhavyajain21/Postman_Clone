import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Tab, Tabs } from "react-bootstrap";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import Key_Value_input from './Key_Value_input';

const EntryTabs = ({values,setJSON}) => {
        return ( 
                <Tabs
                  defaultActiveKey="query-params"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="query-params" title="Query Params">
                    <Key_Value_input values={values} data_name="query_data"/>
                  </Tab>
                  <Tab eventKey="headers" title="Headers">
                    <Key_Value_input values={values} data_name="header_data"/>
                  </Tab>
                  <Tab eventKey="json" title="JSON">
                    <JSONInput
                        id="_id"
                        locale={locale}
                        onChange={(data) => setJSON(data.jsObject)}
                        height="200px"
                    />
                  </Tab>
                </Tabs>
        );
}
 
export default EntryTabs;