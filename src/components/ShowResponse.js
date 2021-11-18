import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class ShowResponse extends React.Component {
    render() { 
        return (
        <div className="tab-content p-3 border-top-0 border">
            <div className="tab-pane fade show active" id="query-params"             
                 role="tabpanel"  aria-labelledby="query-params-tab">
                <div data-query-params></div>
                <button data-add-query-param-btn className="mt-2 btn btn-outline-success" type="button">
                    Add
                </button>
            </div>
            <div className="tab-pane fade" id="request-headers"             
                 role="tabpanel" aria-labelledby="request-headers-tab">
                <div data-request-headers></div>
                <button data-add-request-header-btn className="mt-2 btn btn-outline-success" type="button">
                    Add2
                </button>
            </div>
        </div>
    );
    }
}
 
export default ShowResponse;