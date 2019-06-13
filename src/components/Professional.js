import React, { useState } from 'react';
import { reduxForm, Field } from 'redux-form';
import { renderInput, renderTextArea } from '../globalComponents/formComponents';
import { required, rating } from '../globalComponents/validations';


const Professional = (props) => {

  const [isAdd, setIsAdd] = useState(false)
  const [professionalDetails, setProfessionalDetails] = useState([])
  const { handleSubmit } = props

  const isAddSubmit = (formValues) => {
    console.log(formValues, professionalDetails)
    setProfessionalDetails([...professionalDetails, formValues])
    props.reset()
    setIsAdd(false)
  }

  const submitProfessionalDetails = (formValues) => {
    console.log(formValues, professionalDetails)

    setProfessionalDetails([...professionalDetails, formValues])
  }

  return (
    <React.Fragment>
      <div className="ui text container">
        <h4 className="ui center aligned header">Professional Details</h4>
        <div className="ui segments">
          {professionalDetails && professionalDetails.length ? <div>
            {professionalDetails.map((item) => (
              <div key={item.tech} className="ui segment project_data">
                <div className="show_data_headings">

                  <div><b>Technology: </b></div>
                  <div><b>Rating: </b></div>


                </div>
                <div className="show_data_values">

                  <div>{item.tech}</div>
                  <div>{item.rating}</div>

                </div>
              </div>
            ))}
          </div> : ''}
          <form onSubmit={
            handleSubmit(isAdd ? isAddSubmit : submitProfessionalDetails)
          }
          >
            <div className="ui segment">
              <Field name="tech" validate={required} placeholder="Add your skill" component={renderInput} />

            </div>
            <div className="ui segment">
              <Field name="rating" validate={[required,rating]} placeholder="How much do you rate yourself?" component={renderInput} />

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
  form: 'professionalDetails',
  validate: validate
})(Professional);
