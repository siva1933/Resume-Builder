import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form'
import { renderInput, RadioGroup } from '../globalComponents/formComponents';
import { required } from '../globalComponents/validations';

const options = [
  {
    label: 'Native',
    value: 'Native'
  },
  {
    label: 'Beginner',
    value: 'Beginner'
  },
  {
    label: 'Intermediate',
    value: 'Intermediate'
  },
  {
    label: 'Fluent',
    value: 'Fluent'
  }
]

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
    localStorage.setItem("languageDetails", JSON.stringify(languageDetails))

    props.history.push('/resume')

    setLanguageDetails([...languageDetails, formValues])
  }


  return (
    <React.Fragment>
      <div className="ui text container">
        <h4 className="ui center aligned header">Languages</h4>
        <div className="ui segments">
          {languageDetails && languageDetails.length ? <div>
            {languageDetails.map((item) => (
              <div key={item.lang} className="ui segment project_data">
                <div className="show_data_headings">

                  <div><b>Language: </b></div>
                  <div><b>Lang Type: </b></div>

                </div>
                <div className="show_data_values">
                  <div>{item.lang}</div>
                  <div>{item.fluency}</div>
                </div>
              </div>
            ))}
          </div> : ''}
          <form onSubmit={handleSubmit(isAdd ? isAddSubmit : submitLanguageDetails)}>
            <div className="ui segment">
              <Field name="lang" validate={[required]} placeholder={'Enter know languages'} component={renderInput} />
            </div>
            <div className="ui segment">
              <Field name="fluency" component={RadioGroup} options={options} />
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
  form: 'languageDetails',
  validate: validate,
  destroyOnUnmount: false,
})(Languages);