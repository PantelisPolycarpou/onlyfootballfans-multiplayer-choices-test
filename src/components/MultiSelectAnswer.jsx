import React, { useState } from 'react';

const MultiSelectAnswer = ({ onChange }) => {
  const [answers, setAnswers] = useState(Array(5).fill(''));

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
    onChange(newAnswers);
  };

  return (
    <div className="flex flex-col gap-2">
      {answers.map((answer, index) => (
        <input
          key={index}
          type="text"
          className="w-full rounded-lg px-4 py-3 outline-none bg-slate-100 text-text border border-slate-300 focus:ring-2 focus:ring-primary"
          placeholder={`Answer ${index + 1}`}
          value={answer}
          onChange={(e) => handleChange(index, e.target.value)}
        />
      ))}
    </div>
  );
};

export default MultiSelectAnswer;
