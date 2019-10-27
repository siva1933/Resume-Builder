import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { renderInput, renderTextArea } from '../globalComponents/formComponents';
import { email, required, alphaNumeric, phoneNumber, maxLength } from '../globalComponents/validations';
// import Header from './Header';

class PersonalDetails extends React.Component {

  onSubmit = (formValues) => {
    localStorage.setItem('personalDetails', JSON.stringify(formValues))
    this.props.history.push('/project')
    this.props.reset()
  }

  render() {
    const { submitting } = this.props
    return (
      <React.Fragment>
        {/* <Header /> */}
        <div className="ui text container">
          <h4 className="ui center aligned header">Personal Details</h4>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
            <div className="ui segments">
              <div className="ui segment">
                <div className="ui input focus">
                  <Field name="name" validate={required} component={renderInput} warn={alphaNumeric} placeholder="Enter Name" />
                </div>
              </div>
              <div className="ui segment">
                <Field name="role" validate={required} component={renderInput} placeholder="Enter Role" />

              </div>
              <div className="ui segment">
                <Field name="email" validate={[required, email]} component={renderInput} placeholder="Enter Email" />

              </div>
              <div className="ui segment">
                <Field name="mobile" validate={[required, phoneNumber]} component={renderInput} placeholder="Enter Mobile" />

              </div>
              <div className="ui segment">
                <Field name="address" validate={required} component={renderTextArea} warn={maxLength(250)} placeholder="Enter Address" />

              </div>
              <div className="ui segment">
                <Field name="summary" validate={required} component={renderTextArea} warn={maxLength(250)} placeholder="Enter Summary" />
              </div>

              <div className="ui segment">
                <button type="submit" className="ui primary button" disabled={submitting}>
                  Submit
                </button>
              </div>

            </div>
          </form>
        </div>

      </React.Fragment>
    );
  }
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
  form: 'personalDetails',
  validate: validate,
  destroyOnUnmount: false,
})(PersonalDetails);