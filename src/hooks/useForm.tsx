import React, { ChangeEvent, FormEvent, useState } from 'react';

export const useForm = (initialState: any) => {
  const [inputForm, setInputForm] = useState(initialState);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {

    const value = e.target.value;
    setInputForm({
      ...inputForm,
      [e.target.name]: value
    });

  };

  return { inputForm, onChange };
};
