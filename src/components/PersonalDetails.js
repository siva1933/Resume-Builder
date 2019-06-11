import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { renderInput, renderTextArea } from '../globalComponents/formComponents';
import { email, required, alphaNumeric, phoneNumber, maxLength } from '../globalComponents/validations';



class PersonalDetails extends React.Component {

  onSubmit = (formValues) => {
    console.log('form valuessssssssssssssss', formValues)
    this.props.reset()
  }

  render() {
    const { submitting } = this.props
    return (
      <React.Fragment>
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

// const PersonalDetails = ({ setParentState }) => {

//   const [personalDetials, setPersonalDetails] = useState({})

//   return (
//     <React.Fragment>
//       <div className="ui text container">
//         <h4 className="ui center aligned header">Personal Details</h4>
//         <div className="ui segments">
//           <div className="ui segment">
//             <div class="ui input focus">
//               <input type="text" placeholder="Enter Name" onChange={(e) => {
//                 personalDetials['name'] = e.target.value
//                 setPersonalDetails(personalDetials)
//                 setParentState('personalDetials', personalDetials)
//               }}></input>
//             </div>
//           </div>
//           <div className="ui segment">
//             <div class="ui input focus">
//               <input type="text" placeholder="Enter Role" onChange={(e) => {
//                 personalDetials['role'] = e.target.value
//                 setPersonalDetails(personalDetials)
//                 setParentState('personalDetials', personalDetials)

//               }}></input>
//             </div>
//           </div>
//           <div className="ui segment">
//             <div class="ui input focus">
//               <input type="text" placeholder="Enter Email" onChange={(e) => {
//                 personalDetials['email'] = e.target.value
//                 setPersonalDetails(personalDetials)
//                 setParentState('personalDetials', personalDetials)

//               }}></input>
//             </div>
//           </div>
//           <div className="ui segment">
//             <div class="ui input focus">
//               <input type="text" placeholder="Enter Mobile Number" onChange={(e) => {
//                 personalDetials['mobile'] = e.target.value
//                 setPersonalDetails(personalDetials)
//                 setParentState('personalDetials', personalDetials)

//               }}></input>
//             </div>
//           </div>
//           <div className="ui segment">
//             <div class="ui textarea focus">
//               <textarea type="text" rows={4} cols={50} placeholder="Address" onChange={(e) => {
//                 personalDetials['address'] = e.target.value
//                 setPersonalDetails(personalDetials)
//                 setParentState('personalDetials', personalDetials)

//               }}></textarea>
//             </div>
//           </div>
//           <div className="ui segment">
//             <div class="ui textarea focus">
//               <textarea type="text" rows={4} cols={50} placeholder="Summary" onChange={(e) => {
//                 personalDetials['summary'] = e.target.value
//                 setPersonalDetails(personalDetials)
//                 setParentState('personalDetials', personalDetials)

//               }}></textarea>
//             </div>
//           </div>
//         </div>
//       </div>

//     </React.Fragment>
//   );
// }


export default reduxForm({
  form: 'personalDetails',
  validate: validate
})(PersonalDetails);