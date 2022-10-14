import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Singlequiz from '../Singlequiz/Singlequiz';
  

const Quiz = () => {
    const showQuiz = useLoaderData();

    console.log(showQuiz);
    const {name,questions} = showQuiz.data;
    return (
        <div>
            <h3 className='font-medium text-3xl text-cyan-300'>{name}</h3>
           {
            questions.map(questionData => <Singlequiz
            key={questionData.id}
            questionData={questionData}
            ></Singlequiz>)
           }
          
        </div>
    );
};

export default Quiz;