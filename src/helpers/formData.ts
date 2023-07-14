import { useState, Dispatch, SetStateAction } from 'react';

type FormValues = {
  [key: string]: any;
};

type FormValueSetter = (key: string, value: any) => void;

type FormDataHook = [
  FormValues,
  FormValueSetter,
  Dispatch<SetStateAction<FormValues>>
];

export const formdata = (values: FormValues): FormDataHook => {
  const [formValues, setFormValues] = useState<FormValues>({ ...values });

  const handleFormValueChange: FormValueSetter = (key, value) => {
    setFormValues({
      ...formValues,
      [key]: value,
    });
  };

  return [formValues, handleFormValueChange, setFormValues];
};
