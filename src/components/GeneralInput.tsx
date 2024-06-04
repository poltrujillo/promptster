'use client';

import React from 'react';
import { useFormContext } from '@/context/FormContext';

export default function GeneralInput({
  model,
  optional,
  placeholder,
  label,
}: {
  model: string;
  optional: boolean;
  placeholder: string;
  label: string;
}) {
  const { formValues, setFormValue } = useFormContext();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValue(placeholder, e.target.value);
  };

  return (
    <div className="mb-4 text-slate-800 w-full">
      {model === 'text' && (
        <div className="input-space">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor={placeholder}
          >
            {label}
            {!optional && <span className="text-red-500 ml-1">*</span>}
          </label>
          <input
            id={placeholder}
            type="text"
            placeholder={placeholder}
            required={!optional}
            value={formValues[placeholder] || ''}
            onChange={handleChange}
            className="w-full p-3 my-2 box-border rounded border border-gray-300 text-base"
          />
        </div>
      )}
      {model === 'textarea' && (
        <div className="input-space">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor={placeholder}
          >
            {label}
            {!optional && <span className="text-red-500 ml-1">*</span>}
          </label>
          <textarea
            id={placeholder}
            placeholder={placeholder}
            required={!optional}
            value={formValues[placeholder] || ''}
            onChange={handleChange}
            className="w-full p-3 my-2 box-border rounded border border-gray-300 text-base h-36"
          />
        </div>
      )}
    </div>
  );
}
