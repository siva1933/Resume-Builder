
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

export class RadioGroup extends React.Component {
  render() {
    const { input, meta, options } = this.props
    let hasError = meta.touched && meta.error;
    hasError = meta.touched && meta.warning;

    return (
      <div>
        {options.map(o => <label key={o.value}><input type="radio" {...input} value={o.value} checked={o.value === input.value} /> {o.label}</label>)}
        {hasError && <div className="ui top pointing red basic label meta_div">{hasError}</div>}
      </div>
    );
  }
}

export const radioButton = ({ options, input, meta: { touched, error, warning } }) => {
  return <> {options && options.map(item => <div className="ui radio checkbox">
    <input type="radio" value={item.value} {...input} /> <label>{item.label}</label>
  </div>)}
    {touched && ((error && <div className="ui top pointing red basic label meta_div">{error}</div>) || (warning && <div className="ui left pointing yellow basic label meta_div">{warning}</div>))}</>
}