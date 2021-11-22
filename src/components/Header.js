import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Formik,Form,Field} from "formik";

const Header = () => {
    return ( 
        <div className="form-group">
                <div className="input-group mb-4">
                  <Field className="form-select flex-grow-0 w-auto" name="method" as="select">
                    <option value="GET"> GET </option>
                    <option value="POST"> POST </option>
                    <option value="PUT"> PUT </option>
                    <option value="DELETE"> DELETE </option>
                    {/* Field component uses the name attribute to match with the Formik state, by default it's input component */}
                  </Field>
                  <Field
                    required
                    type="url"
                    name="url"
                    placeholder="https://www.example.com"
                    className="form-control"
                  />
                  <div className="form-group">
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
     );
}
 
export default Header;