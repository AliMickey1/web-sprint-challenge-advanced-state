 // <div id="quizContainer">
    //   {
    //     question ? (
    //       <>
    //         <h2>{question.question_title}</h2>
    //         <div className="quiz">
    //           <Md className="question text md">
    //             {question.question_text}
    //           </Md>
    //           {
    //             question.options.map(opt => (
    //               <div
    //                 key={opt.answer_id}
    //                 className={`question answer${answer_id === opt.answer_id ? ' selected' : ''}`}
    //                 onClick={() => selectOption(opt.answer_id)}
    //               >
    //                 <Md className="md">{opt.option_text}</Md>
    //                 <button className="wide">
    //                   {answer_id === opt.answer_id ? 'SELECTED' : 'Select'}
    //                 </button>
    //               </div>
    //             ))
    //           }
    //         </div>
    //         <div className="button-group">
    //           <button className="jumbo-button" onClick={onAnswer} disabled={!answer_id}>
    //             Submit answer
    //           </button>
             
    //         </div>
    //       </>
    //     ) : 'Loading next quiz...'
    //   }
    // </div>

