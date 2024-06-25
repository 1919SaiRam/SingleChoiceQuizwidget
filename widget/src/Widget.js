import React, {useState } from 'react' ;
import quizData from './data.js' ;
import './Widget.css';


const Widget = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);


    const handelOptionChange = (e) => {
        setSelectedOption(e.target.value); 
    };

    const handleSubmit = () => {
        if(selectedOption === quizData[currentQuestion].correctAnswer){
            setScore(score + 1);
        }
        setSelectedOption('');
        if(currentQuestion + 1 < quizData.length){
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };


    return (
        <div  className='quiz-container'>
            {showResult ? ( <div  className='result'>
                <h2> Quiz Result...........</h2>
                <p>You answered {score} out of {quizData.length} questions Correctly ! </p>     
                </div>       
                ) : (
                    <div  className='question-card'> 

                    <h2>{quizData[currentQuestion].question}</h2>

                    <form>
                        {quizData[currentQuestion].options.map((option, index)  =>  (
                            <div key = {index}>
                                <label>
                                    <input
                                    type = "radio"
                                    value = {option}

                                    checked = {selectedOption === option}

                                    onChange={handelOptionChange}
                                    />
                                </label>

                            </div>
                        ))}
                    </form>
                    <button onClick = {handleSubmit} disabled = {!selectedOption}> Submit </button>
                   </div>
                )}
        </div>
    );
} ;


export default Widget ; 