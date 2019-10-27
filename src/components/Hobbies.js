import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form'
import { renderInput } from '../globalComponents/formComponents';
import { required } from '../globalComponents/validations';

const Hobbies = (props) => {

  const [isAdd, setIsAdd] = useState(false)
  const [hobbies, setHobbies] = useState([])
  const { handleSubmit } = props

  const isAddSubmit = (formValues) => {
    console.log(formValues, hobbies)
    setHobbies([...hobbies, formValues])
    setIsAdd(false)
    props.reset()
  }

  const submitHobbies = (formValues) => {
    console.log(formValues, hobbies)
    localStorage.setItem("hobbies", JSON.stringify(hobbies))
    props.history.push('/language')
    setHobbies([...hobbies, formValues])
  }


  return (
    <React.Fragment>
      <div className="ui text container">
        <h4 className="ui center aligned header">Hobbies</h4>
        <div className="ui segments">
          {hobbies && hobbies.length ? <div>
            {hobbies.map((item) => (
              <div key={item.other} className="ui segment project_data">
                <div className="show_data_headings">

                  <div><b>Hobby: </b></div>

                </div>
                <div className="show_data_values">
                  <div>{item.other}</div>
                </div>
              </div>
            ))}
          </div> : ''}
          <form onSubmit={handleSubmit(isAdd ? isAddSubmit : submitHobbies)}>
            <div className="ui segment">
              <Field name="other" validate={[required]} placeholder={'Enter Hobbies'} component={renderInput} />
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
  form: 'hobbies',
  validate: validate,
  destroyOnUnmount: false
})(Hobbies);