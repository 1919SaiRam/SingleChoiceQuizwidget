// import React, {useState } from 'react' ;
// import quizData from './data.js' ;
// import './Widget.css';


// const Widget = () => {
//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [selectedOption, setSelectedOption] = useState('');
//     const [score, setScore] = useState(0);
//     const [showResult, setShowResult] = useState(false);


//     const handelOptionChange = (e) => {
//         setSelectedOption(e.target.value); 
//     };

//     const handleSubmit = () => {
//         if(selectedOption === quizData[currentQuestion].correctAnswer){
//             setScore(score + 1);
//         }
//         setSelectedOption('');
//         if(currentQuestion + 1 < quizData.length){
//             setCurrentQuestion(currentQuestion + 1);
//         } else {
//             setShowResult(true);
//         }
//     };


//     return (
//         <div  className='quiz-container'>
//             {showResult ? ( <div  className='result'>
//                 <h2> Quiz Result...........</h2>
//                 <p>You answered {score} out of {quizData.length} questions Correctly ! </p>     
//                 </div>       
//                 ) : (
//                     <div  className='question-card'> 

//                     <h2>{quizData[currentQuestion].question}</h2>

//                     <form>
//                         {quizData[currentQuestion].options.map((option, index)  =>  (
//                             <div key = {index}>
//                                 <label>
//                                     <input
//                                     type = "radio"
//                                     value = {option}

//                                     checked = {selectedOption === option}

//                                     onChange={handelOptionChange}
//                                     />
//                                 </label>

//                             </div>
//                         ))}
//                     </form>
//                     <button onClick = {handleSubmit} disabled = {!selectedOption}> Submit </button>
//                    </div>
//                 )}
//         </div>
//     );
// } ;


// export default Widget ; 




import React, { useState } from 'react';
import quizData from './data.js';
import './Widget.css';

const Widget = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value); 
    };

    const handleSubmit = () => {
        if (selectedOption === quizData[currentQuestion].correct) {
            setScore(score + 1);
        }
        setSelectedOption('');
        if (currentQuestion + 1 < quizData.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const handleRestart = () => {
        setCurrentQuestion(0);
        setSelectedOption('');
        setScore(0);
        setShowResult(false);
    };

    if (!quizData || quizData.length === 0) {
        return <div>Loading quiz data...</div>;
    }

    return (
        <div className='quiz-container'>
            {showResult ? (
                <div className='result'>
                    <h2>Quiz Result</h2>
                    <p>You answered  correctly at{score}/{quizData.length} questions !</p>     
                    <button onClick={handleRestart}>Reload</button>
                </div>       
            ) : (
                <div className='question-card'> 
                    <h2>{quizData[currentQuestion].question}</h2>
                    <form>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="a"
                                    checked={selectedOption === 'a'}
                                    onChange={handleOptionChange}
                                />
                                {quizData[currentQuestion].a}
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="b"
                                    checked={selectedOption === 'b'}
                                    onChange={handleOptionChange}
                                />
                                {quizData[currentQuestion].b}
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="c"
                                    checked={selectedOption === 'c'}
                                    onChange={handleOptionChange}
                                />
                                {quizData[currentQuestion].c}
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="d"
                                    checked={selectedOption === 'd'}
                                    onChange={handleOptionChange}
                                />
                                {quizData[currentQuestion].d}
                            </label>
                        </div>
                    </form>
                    <button onClick={handleSubmit} disabled={!selectedOption}>Submit</button>
                </div>
            )}
        </div>
    );
};

export default Widget;

