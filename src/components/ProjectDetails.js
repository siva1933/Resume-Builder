import React, { useState } from 'react';
import { renderInput, renderTextArea } from '../globalComponents/formComponents';
import { Field, reduxForm } from 'redux-form'
import { required } from '../globalComponents/validations';

const ProjectDetails = (props) => {
  const [isAdd, setIsAdd] = useState(false)
  const [projectDetails, setProjectDetails] = useState([])
  const { handleSubmit } = props

  const isAddSubmit = (formValues) => {
    console.log(formValues, projectDetails)
    setProjectDetails([...projectDetails, formValues])
    props.reset()
    setIsAdd(false)
  }

  const submitProjectDetails = (formValues) => {
    console.log(formValues, projectDetails)
    localStorage.setItem('projectDetails', JSON.stringify(projectDetails))
    props.history.push('/education')

    setProjectDetails([...projectDetails, formValues])
  }

  return (
    <React.Fragment>
      <div className="ui text container">
        <h4 className="ui center aligned header">Project Details</h4>
        <form onSubmit={
          handleSubmit(isAdd ? isAddSubmit : submitProjectDetails)
        }
        >
          <div className="ui segments">
            {projectDetails.length > 0 && projectDetails.map(item => {
              return <div key={item.project_title} className="ui segment project_data">
                <div className="show_data_headings">

                  <div><b>Title: </b></div>
                  <div><b>Duration: </b></div>
                  <div><b>Description: </b></div>
                  <div><b>Tech Stack: </b></div>

                </div>
                <div className="show_data_values">

                  <div>{item.project_title}</div>
                  <div>{item.from_date}  to  {item.to_date}</div>
                  <div>{item.project_description}</div>
                  <div>{item.tech_stack}</div>

                </div>

              </div>
            })}
            <div className="ui segment">
              <div className="ui input focus">
                <Field name="project_title" validate={required} component={renderInput} placeholder="Enter Project Title" />
              </div>
            </div>
            <div className="ui segment date_section">
              <div>From</div>
              <div className="ui input focus">
                <Field name="from_date" validate={required} type='date' component={renderInput} />
              </div>
              <div>To</div>
              <div className="ui input focus">
                <Field name="to_date" validate={required} type='date' component={renderInput} />
              </div>
            </div>
            <div className="ui segment">
              <div className="ui input focus">
                <Field name="project_description" validate={required} component={renderTextArea} placeholder="Enter Project Description" />
              </div>
            </div>
            <div className="ui segment">
              <div className="ui input focus">
                <Field name="tech_stack" validate={required} component={renderTextArea} placeholder="Tech stack used for project" />
              </div>
            </div>
            <div className="ui segment">
              <button type="submit" className="ui button" onClick={() => { setIsAdd(true) }}>
                Add
              </button>
              <button type="submit" className="ui primary button">
                Submit
            </button>
            </div>
          </div>
        </form>
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
  form: 'projectDetails',
  validate: validate,
  destroyOnUnmount: false,
})(ProjectDetails);