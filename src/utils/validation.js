import { useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

function useFormWithValidation(currentUser) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const { pathname } = useLocation();

  function handleChange(evt) {
    const input = evt.target;
    const value = input.value;
    const name = input.name;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    const check = input.closest('form').checkValidity();
    setIsValid(
      pathname === '/profile' ? check && value !== currentUser[name] : check
    );
  }

  const resetFrom = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, errors, isValid, handleChange, resetFrom };
}

export default useFormWithValidation;
