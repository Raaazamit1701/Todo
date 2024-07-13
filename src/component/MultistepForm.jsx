// src/components/MultiStepForm.js
import React, { useState } from 'react';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (step === 1 && !formData.name) tempErrors.name = 'Name is required';
    if (step === 2 && !formData.email) tempErrors.email = 'Email is required';
    if (step === 2 && formData.email && !/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid';
    if (step === 3 && !formData.date) tempErrors.date = 'Date is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded">
      {step === 1 && (
        <div>
          <label className="block mb-2">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </label>
          {errors.name && <p className="text-red-500">{errors.name}</p>}
          <button onClick={handleNext} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <label className="block mb-2">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </label>
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          <div className="flex justify-between mt-4">
            <button onClick={handlePrev} className="px-4 py-2 bg-gray-500 text-white rounded">Previous</button>
            <button onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded">Next</button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <label className="block mb-2">
            Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </label>
          {errors.date && <p className="text-red-500">{errors.date}</p>}
          <div className="flex justify-between mt-4">
            <button onClick={handlePrev} className="px-4 py-2 bg-gray-500 text-white rounded">Previous</button>
            <button onClick={() => validate() && setStep(step + 1)} className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
          </div>
        </div>
      )}
      {step === 4 && (
        <div>
          <h2 className="text-lg font-bold mb-4">Response</h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Date: {formData.date}</p>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
