import React, { useState, useCallback, useEffect } from 'react';
import AutoCompleteAnswer from './AutoCompleteAnswer';

const MultiSelectCatalogAnswer = ({ catalog, onChange }) => {
  const [answers, setAnswers] = useState(Array(5).fill(''));
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const handleSelect = useCallback((index, item) => {
    setAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = item.name;
      return newAnswers;
    });
  }, []);

  const handleChangeText = useCallback((index, text) => {
    setAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = text;
      return newAnswers;
    });
  }, []);

  useEffect(() => {
    onChange(answers);
  }, [answers, onChange]);

  return (
    <div className="flex flex-col gap-2">
      {answers.map((_, index) => (
        <div
          key={index}
          className="relative"
          style={{ zIndex: focusedIndex === index ? 50 : 40 - index }}
          onFocus={() => setFocusedIndex(index)}
          onBlur={() => setFocusedIndex(-1)}
        >
          <AutoCompleteAnswer
            catalog={catalog}
            placeholder={`Player ${index + 1}`}
            onSelect={(item) => handleSelect(index, item)}
            onChangeText={(text) => handleChangeText(index, text)}
          />
        </div>
      ))}
    </div>
  );
};

export default MultiSelectCatalogAnswer;
