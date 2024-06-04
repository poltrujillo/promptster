'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface FormContextProps {
  formValues: { [key: string]: string };
  setFormValue: (key: string, value: string) => void;
  prompt: string;
  setPrompt: (prompt: string) => void;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});
  const [prompt, setPrompt] = useState<string>('');

  const setFormValue = (key: string, value: string) => {
    setFormValues((prevValues) => ({ ...prevValues, [key]: value }));
  };

  return (
    <FormContext.Provider
      value={{ formValues, setFormValue, prompt, setPrompt }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
