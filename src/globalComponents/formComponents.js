
import React from 'react'
export const renderInput = ({ input, placeholder, type, meta: { touched, error, warning } }) => {
  return <><div className="ui input">
    <input type={type || "text"} placeholder={placeholder} {...input} />
  </div>
    {touched && ((error && <div className="ui left pointing red basic label meta_div">{error}</div>) || (warning && <div className="ui left pointing yellow basic label meta_div">{warning}</div>))}</>
}

export const renderTextArea = ({ input, placeholder, type, meta: { touched, error, warning } }) => {
  return <><div className="ui form textarea">
    <textarea type={type || "text"} placeholder={placeholder} rows={4} cols={40} {...input} />
  </div>
    {touched && ((error && <div className="ui top pointing red basic label meta_div">{error}</div>) || (warning && <div className="ui left pointing yellow basic label meta_div">{warning}</div>))}</>
}