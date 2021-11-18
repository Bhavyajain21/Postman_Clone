import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from './Tabs';
import ShowResponse from './ShowResponse';
class InputBar extends React.Component {
    render() { 
        return (
            <div className="p-4">
                <form>
                    <div className="input-group mb-4">
                        <select className="form-select flex-grow-0 w-auto">
                            <option value="GET" selected>GET</option>
                            <option value="POST">POST</option>
                            <option value="PUT">PUT</option>
                            <option value="DELETE">DELETE</option>
                        </select>
                        <input required className="form-control" type="url" placeholder="http://www.google.co.in"></input>
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                    <Tabs/>
                    <ShowResponse/>
                </form>
            </div>
        );
    }
}
 
export default InputBar;