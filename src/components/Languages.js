import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form'
import { renderInput } from '../globalComponents/formComponents';
import { required } from '../globalComponents/validations';

const Languages = (props) => {

  const [isAdd, setIsAdd] = useState(false)
  const [languageDetails, setLanguageDetails] = useState([])
  const { handleSubmit } = props

  const isAddSubmit = (formValues) => {
    console.log(formValues, languageDetails)
    setLanguageDetails([...languageDetails, formValues])
    setIsAdd(false)
    props.reset()
  }

  const submitLanguageDetails = (formValues) => {
    console.log(formValues, languageDetails)

    setLanguageDetails([...languageDetails, formValues])
  }


  return (
    <React.Fragment>
      <div className="ui text container">
        <h4 className="ui center aligned header">Languages</h4>
        <div className="ui segments">
          {languageDetails && languageDetails.length ? <div>
            {languageDetails.map((item) => (
              <div key={item.other} className="ui segment project_data">
                <div className="show_data_headings">

                  <div><b>Language: </b></div>

                </div>
                <div className="show_data_values">
                  <div>{item.other}</div>
                </div>
              </div>
            ))}
          </div> : ''}
          <form onSubmit={handleSubmit(isAdd ? isAddSubmit : submitLanguageDetails)}>
            <div className="ui segment">
              <Field name="other" validate={[required]} placeholder={'Enter know languages'} component={renderInput} />
            </div>
            <div className="ui segment">
              <button type="submit" className="ui button" onClick={() => {
                setIsAdd(true)
              }} >Add</button>
              <button type="submit" className="ui primary button" >Submit</button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

const validate = (formValues) => {
  let errors = {}

  console.log(formValues)

  Object.keys(formValues).map(item => {
    if (!item) {
      errors[item] = `Please enter ${item}`
    }
    return null
  })

  return errors
}

export default reduxForm({
  form: 'langDetails',
  validate: validate
})(Languages);