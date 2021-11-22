import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Formik,Form} from "formik";
import Header from './components/Header';
import EntryTabs from './components/EntryTabs';
import Response from './components/Response';
import axios from 'axios';
import prettyBytes from 'pretty-bytes';

function App() {
  const [status, setStatus] = useState(0);
  const [time, setTime] = useState(0);
  const [size, setSize] = useState(0);
  const [response, setResponse] = useState({});
  const [responseHeaders, setResponseHeaders] = useState({});
  const [json, setJSON] = useState({});

  axios.interceptors.request.use((request) => {
    console.log("request:", request);
    request.customData = request.customData || {};
    request.customData.startTime = new Date().getTime();
    return request;
  });

  function updateEndTime(response) {
    // defaulting custom data
    //console.log(response);
    if (response !== undefined) {
      response.customData = response.customData || {};
      // setting the time
      response.customData.time =
        new Date().getTime() - response.config.customData.startTime;
      return response;
    }
  }

  axios.interceptors.response.use(updateEndTime, (e) => {
    return Promise.reject(updateEndTime(e.response));
  });

  function keyValuePairsToObjects(container) {
    // console.log(container);
    var params = {};
    container.forEach((data) => {
      params[data["key"]] = data["value"];
    });
    // console.log(params);
    return params;
  }

  function sendRequest(data){
    let dataJson;
    try{
      dataJson = json;
    } catch(e){
      alert("JSON data is malformed");
      return;
    }

    axios({
      url:data.url,
      method:data.method,
      params : keyValuePairsToObjects(data.query_data),
      headers: keyValuePairsToObjects(data.header_data),
      dataJson,
      validateStatus: () => true
    })
    .catch((e)=>console.log(e))
    .then((response)=>{
      console.log(response);  

      if (response !== undefined) {
        //console.log("RESPONSE:", response);
        setStatus(response.status);
        setResponse(response.data);
        setResponseHeaders(response.headers);
        setTime(response.customData.time);
        setSize(
          prettyBytes(
            JSON.stringify(response.data).length +
              JSON.stringify(response.headers).length
          )
        );
      }
    })
  }
  return (
    <>
    <div className="p-4">
        <div>
          <Formik
            initialValues={{
              url: "https://jsonplaceholder.typicode.com/todos",
              query_data: [{}],
              header_data: [{}],
              method: "GET",
            }}
            onSubmit={(details) => {
            // console.log("details:", details);
              sendRequest(details);
            }}
          >
            {({ values }) => (
              <Form>
                  <Header/>
                  <EntryTabs values = {values} setJSON={setJSON}/>
              </Form>
            )}
          </Formik>
        </div>
        <Response 
          status={status}
          time = {time}
          size = {size}
          response = {response}
          responseHeaders = {responseHeaders}
        />
    </div>
  </>
  );
}

export default App;
