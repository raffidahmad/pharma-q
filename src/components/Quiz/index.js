import React, { useState } from 'react';
import Question from '../Question';
import { sampleQuiz } from '@/static/sampleQuestion';

const QuestionPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(sampleQuiz.length).fill(null)
  );
  const [showReview, setShowReview] = useState(false);

  const handleNext = () => {
    if (currentQuestion < sampleQuiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswer = (answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = answer;
    setUserAnswers(updatedAnswers);
  };

  const handleReview = () => {
    setShowReview(true);
  };

  const handleSubmit = () => {
    if (userAnswers.includes(null)) {
      const confirmSubmit = window.confirm(
        'You have unanswered questions. Are you sure you want to submit?'
      );
      if (!confirmSubmit) {
        return;
      }
    }

    // Calculate and save the score to the user's profile
    const correctAnswers = sampleQuiz.filter(
      (q, i) => userAnswers[i] === q.answer
    );
    const score = correctAnswers.length;
    // Save the score to the user's profile (you'll need an API or a database for this)

    // Optionally, display a summary of correct and incorrect answers
    setShowReview(true);
  };

  return (
    <div className='p-4'>
      <Question
        question={sampleQuiz[currentQuestion].question}
        description={sampleQuiz[currentQuestion].description}
        answer={sampleQuiz[currentQuestion].answer}
        options={sampleQuiz[currentQuestion].options}
        explanation={sampleQuiz[currentQuestion].explanation}
        userAnswer={userAnswers[currentQuestion]}
        onAnswerClick={handleAnswer}
      />

      {showReview && (
        <div>
          {/* Display the review of questions and answers */}
          {/* Calculate and display the user's score */}
        </div>
      )}
      <div className='mt-4 flex items-center justify-center'>
        <span className='mr-4'>
          {currentQuestion + 1}/{sampleQuiz.length}
        </span>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Back
        </button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4'>
          Next
        </button>
        <button className='bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4'>
          Review
        </button>
        <button className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4'>
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuestionPage;
