import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
class Tabs extends React.Component {
     render() { 
         return (
         <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
               <button className="nav-link active" id="query-params-tab" data-bs-toggle="tab"           data-bs-target="#query-params" type="button" role="tab" aria-controls="query-params" aria-selected="true">
                   Query Params
                </button> 
                 {/*aria-controls = = It will be controlling the elements with id = "query-params"  */}
            </li>
            <li className="nav-item" role="presentation">
               <button className="nav-link" id="request-headers-tab" data-bs-toggle="tab"        data-bs-target="#request-headers" type="button" role="tab" aria-controls="request-headers" aria-selected="false">
                   Headers
                </button> 
                 
            </li>
            <li className="nav-item" role="presentation">
               <button className="nav-link" id="json-tab" data-bs-toggle="tab"        data-bs-target="#json" type="button" role="tab" aria-controls="json" aria-selected="false">
                   JSON
                </button> 
                 
            </li>
         </ul>);
     }
}
  
export default Tabs;