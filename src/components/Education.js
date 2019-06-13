import React, { useState } from 'react';
import { reduxForm, Field } from 'redux-form';
import { renderInput, renderTextArea } from '../globalComponents/formComponents';
import { required } from '../globalComponents/validations';

const Education = (props) => {

  const [isAdd, setIsAdd] = useState(false)
  const [educationDetails, setEducationDetails] = useState([])
  const { handleSubmit } = props

  const isAddSubmit = (formValues) => {
    console.log(formValues, educationDetails)
    setEducationDetails([...educationDetails, formValues])
    props.reset()
    setIsAdd(false)
  }

  const submitEducationDetails = (formValues) => {
    console.log(formValues, educationDetails)

    setEducationDetails([...educationDetails, formValues])
  }


  return (
    <React.Fragment>
      <div className="ui text container">
        <h4 className="ui center aligned header">Education Details</h4>
        <div className="ui segments">
          {educationDetails && educationDetails.length ? <div>
            {educationDetails.map((item) => (
              <div key={item.institute_name} className="ui segment project_data">
                <div className="show_data_headings">

                  <div><b>Institute Name: </b></div>
                  <div><b>Study: </b></div>
                  {item.address && <div><b>Address: </b></div>}

                </div>
                <div className="show_data_values">

                  <div>{item.institute_name}</div>
                  <div>{item.study}</div>
                  {item.address && <div>{item.address}</div>}

                </div>
              </div>
            ))}
          </div> : ''}
          <form onSubmit={
            handleSubmit(isAdd ? isAddSubmit : submitEducationDetails)
          }
          >
            <div className="ui segment">
              <Field name="institute_name" validate={required} placeholder="Name of Institute" component={renderInput} />
            </div>
            <div className="ui segment">
              <Field name="study" validate={required} placeholder="What do you study here?" component={renderInput} />

            </div>
            <div className="ui segment">
              <Field name="address" placeholder="Address of Institute (optional)" component={renderTextArea} />
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
  form: 'educationDetails',
  validate: validate
})(Education);