import React, { useState } from 'react'

export const Stepper = ({ steps, setLS }) => {

  const [step, setStep] = useState(0)
  return (
    <div>
      <div>
        {steps[step]}
      </div>
      <div>
        <button disabled={step <= 0} class="ui button" onClick={() => {
          setStep(step - 1)
        }}>
          Previous
        </button>
        <button disabled={step >= steps.length - 1} class="ui primary button" onClick={() => {
          setStep(step + 1)
          setLS()
        }}>
          Next
        </button>
      </div>
    </div>
  );
} 
