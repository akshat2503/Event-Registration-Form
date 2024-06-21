import { useState } from 'react';

const useValidation = () => {
  const [errors, setErrors] = useState({});

  const validate = (formData) => {
    const errors = {};

    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is not valid';
    if (!formData.age) errors.age = 'Age is required';
    else if (isNaN(formData.age) || formData.age <= 0) errors.age = 'Age must be a number greater than 0';
    if (formData.attendingWithGuest && !formData.guestName) errors.guestName = 'Guest name is required';

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return {
    errors,
    validate
  };
};

export default useValidation;
