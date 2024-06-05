'use client';

import { formDataEnglish, formDataSpanish } from '@/data/formData';
import GeneralInput from './GeneralInput';
import { useFormContext } from '@/context/FormContext';
import { generatePrompt } from '@/utils/prompt';
import React, { useState } from 'react';

export default function Form() {
  const { formValues, setPrompt } = useFormContext();
  const [language, setLanguage] = useState('en');

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const prompt = generatePrompt(formValues, language);
    setPrompt(prompt);
  };

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLanguage(event.target.value);
  };

  const formData = language === 'es' ? formDataSpanish : formDataEnglish;

  return (
    <form
      onSubmit={onSubmit}
      className="md:w-4/5 w-full flex flex-col justify-center items-center gap-3"
    >
      {language === 'es' ? (
        <h1 className="text-xl font-bold text-left block">Idioma:</h1>
      ) : (
        <h1 className="text-xl font-bold text-left block">Language:</h1>
      )}
      <select
        className="text-slate-900 border border-slate-900 rounded-md p-2 w-full mb-5"
        name="language"
        onChange={handleLanguageChange}
      >
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
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
