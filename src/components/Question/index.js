import { useState } from 'react';

const Question = ({ question, description, answer, options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const isCorrect = selectedOption === answer;

  return (
    <div className='p-10 border rounded-3xl shadow-md bg-primary text-primary bg-opacity-60'>
      <h1 className='font-bold text-2xl'>{description}</h1>
      <h2 className='text-2xl font-bold my-2'>{question}</h2>

      <div className='mt-4 grid grid-cols-2 gap-5'>
        {options.map((option, index) => (
          <div
            key={index}
            className={`my-2 p-5 border rounded-full cursor-pointer ${
              selectedOption === option
                ? isCorrect
                  ? 'bg-primary bg-opacity-70 text-white font-bold'
                  : 'bg-red-500 text-white font-bold'
                : 'hover:bg-gray-200'
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>

      {isCorrect ? (
        <div className='text-green-500 font-bold mt-4'>Correct answer!</div>
      ) : null}
    </div>
  );
};

export default Question;
