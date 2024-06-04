'use client';

import { useFormContext } from '@/context/FormContext';
import React from 'react';

const ResultTextarea = () => {
  const { prompt } = useFormContext();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt).catch((err) => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div className="w-full mt-6">
      <textarea
        className="w-full h-56 p-3 box-border rounded border border-gray-300 text-base text-slate-900"
        placeholder="Result of the prompt here"
        value={prompt}
        readOnly
      />
      <button
        onClick={copyToClipboard}
        className="border border-gray-300 bg-transparent text-white rounded px-4 py-2 mt-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Copy Text
      </button>
    </div>
  );
};

export default ResultTextarea;
