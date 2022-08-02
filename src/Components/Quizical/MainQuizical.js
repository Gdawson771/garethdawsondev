import React from "react"
//import Confetti from "react-confetti"
import Question from "./Question"

export default function MainQuizical() {
    const [quiz, setQuiz] = React.useState(false)
    const [playAgain, setPlayAgain] = React.useState(false)
    const [quizData,setQuizData] = React.useState([])
    const [quizSubmitted, setQuizSubmitted] = React.useState(false)
    const [score,setScore]=React.useState(0)
    const [formData, setFormData] = React.useState(
        {
        
        })
        
    function startQuiz() {
        setQuiz(true)
    }
    
      React.useEffect(function() {
     
        
        fetch(`https://opentdb.com/api.php?amount=5`)
            .then(res => res.json())
            .then(data => setQuizData(data.results))
      
        
       
    }, [playAgain])

  function submitQuiz(){

      let currentScore=0
      if(formData.question0===quizData[0].correct_answer){

          currentScore=currentScore+1
      }
      if(formData.question1===quizData[1].correct_answer){

          currentScore=currentScore+1
      }
      if(formData.question2===quizData[2].correct_answer){
      
          currentScore=currentScore+1
      }
      if(formData.question3===quizData[3].correct_answer){
    
          currentScore=currentScore+1
      }
      if(formData.question4===quizData[4].correct_answer){

          currentScore=currentScore+1
      }
      setQuizSubmitted(true)
      setScore(currentScore)
   
  }
  /**
   * handleChange(event) -- used to update the state every time a value in any element of our form is changed so that the state always contains the state of the form
   */
  function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const questionElements = quizData.map((question,index) => (
        <Question props={question} handleChange={handleChange} question={"question"+index} gameState={quiz}/>
    ))
    
    
      const correctAnswers= quizData.map((question,index)=>(
        <p>Question {index+1}:{quizData[index].correct_answer} </p>
    ))
    
    //{quizSubmitted && correctAnswers}
    function doPlayagain(){
        setFormData({})
        setQuizData([])
        setQuizSubmitted(false)
        setScore(0)
        setPlayAgain(!playAgain)
    }
    return (
        <main className="Quizical--Main" >
            {quiz ?     
                <div className="Quizical--Div">
                   <h1>Quiz started</h1>
                    <form>
                        {questionElements}
                    </form>
                    {!quizSubmitted &&<button  className="Quizical--start-quiz" onClick={submitQuiz}>Submit quiz</button>}
                </div> : 
                
                <div >
                    <h1 className="Quizical--title">Quizzical</h1>
                    <p className="Quizical--descrip">Free Fun Random</p>
                    <button className="Quizical--start-quiz" onClick={startQuiz}>Start quiz </button>
                </div>
            }
             {quizSubmitted && <div className="Quizical--popup">
             <div>You scored {score}/5 </div>
             <button className="Quizical--start-quiz" onClick={doPlayagain}>Play again</button>
            <p>The correct answers are:</p>
            {correctAnswers}
             </div>}
        </main>
    )
}