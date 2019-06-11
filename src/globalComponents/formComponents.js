

export const renderInput = ({ input, placeholder, type, meta }) => {
  return <div className="ui input">
    <input type={type || "text"} placeholder={placeholder} {...input} />
    <div>{meta.error}</div>
  </div>
}

export const renderTextArea = ({ input, placeholder, type, meta }) => {
  return <div className="ui form textarea">
    <textarea type={type || "text"} placeholder={placeholder} rows={4} cols={40} {...input} />
    <div>{meta.error}</div>
  </div>
}