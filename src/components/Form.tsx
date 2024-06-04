'use client';

import { formData } from '@/data/formData';
import GeneralInput from './GeneralInput';
import { useFormContext } from '@/context/FormContext';
import { generatePrompt } from '@/utils/prompt';
import React from 'react';

export default function Form() {
  const { formValues, setPrompt } = useFormContext();

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const prompt = generatePrompt(formValues);
    console.log(formValues);
    setPrompt(prompt);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="md:w-4/5 w-full flex flex-col justify-center items-center gap-3"
    >
      {formData.map(({ type, label, description, optional }) => (
        <GeneralInput
          key={description}
          model={type}
          optional={optional}
          placeholder={description}
          label={label}
        />
      ))}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Generate
      </button>
    </form>
  );
}
