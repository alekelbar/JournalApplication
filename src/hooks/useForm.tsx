import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';

export const useForm = (initialState: any) => {
  const [inputForm, setInputForm] = useState(initialState);

  useEffect(() => {
    setInputForm(initialState);
  }, [initialState]);


  const onChange = (e: ChangeEvent<HTMLInputElement>) => {

    const value = e.target.value;
    setInputForm({
      ...inputForm,
      [e.target.name]: value
    });

  };

  return { inputForm, onChange };
};
