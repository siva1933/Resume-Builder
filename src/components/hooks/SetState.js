import { useState, useEffect } from 'react';

export const SetState = (eventValue) => {
  const [value, setValue] = useState(null)
  useEffect(() => {
    ((value) => {
      setValue(value)
    })(eventValue)
  }, [value])

  return value;
}
