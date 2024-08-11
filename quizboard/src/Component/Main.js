import React, { useState } from 'react';

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);

  const handleOptionChange = (option) => {
    const questionType = questions[currentQuestion].type;
    if (questionType === 'single') {
      setSelectedOptions([option]);
    } else {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter((opt) => opt !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    }
  };

  const handleSubmit = () => {
    const correctAnswers = questions[currentQuestion].correct;
    if (
      selectedOptions.length === correctAnswers.length &&
      selectedOptions.every((opt) => correctAnswers.includes(opt))
    ) {
      setScore(score + 1);
    }
    setSelectedOptions([]);
    setCurrentQuestion(currentQuestion + 1);
  };

  if (currentQuestion >= questions.length) {
    return <h2>Your score is {score} out of {questions.length}</h2>;
  }

  return (
    <div>
      <h3>{questions[currentQuestion].question}</h3>
      {questions[currentQuestion].options.map((option) => (
        <div key={option}>
          <input
            type={questions[currentQuestion].type === 'single' ? 'radio' : 'checkbox'}
            name="option"
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={() => handleOptionChange(option)}
          />
          <label>{option}</label>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Quiz;
