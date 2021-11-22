import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Field,FieldArray} from "formik";

const Key_Value_input = ({values,data_name}) => {
    return ( 
            <FieldArray name={data_name}>
                {(arrayHelpers) => (
                    <div>
                          {values[`${data_name}`].map((info, index) => {
                            return (
                              <div className="input-group my-2" key={index}>
                                <Field
                                  placeholder="Key"
                                  name={`${data_name}.${index}.key`}
                                  type="input"
                                  className="form-control"
                                />
                                <Field
                                  placeholder="Value"
                                  name={`${data_name}.${index}.value`}
                                  type="input"
                                  className="form-control"
                                />
                                <button className="btn btn-outline-danger"
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  Remove
                                </button>
                              </div>
                            );
                          })}
                          <button className="btn btn-primary mt-2 mb-5" onClick={() => arrayHelpers.push({})}>
                            Add
                          </button>
                    </div>
                )}
            </FieldArray>
     );
}
 
export default Key_Value_input;