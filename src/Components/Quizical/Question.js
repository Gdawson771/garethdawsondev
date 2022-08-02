import React from "react"

export default function Question(props) {
 
   const [answerOrder, setAnswerOrder] = React.useState([]);
    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex != 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    function shuffleAnswers(correct_answer, wrongAnswers) {
        const shuffledAnswers = []
        shuffledAnswers.push(correct_answer)
        shuffledAnswers.push(...wrongAnswers)
        shuffle(shuffledAnswers)
        return shuffledAnswers
    }


    function generateRadioButtons(shuffledAnswers) {
        const answerElements = shuffledAnswers.map(answer =>
        
              <div><input
                  type="radio"
                  id={answer}
                  name={props.question}
                  value={answer}
                  onChange={props.handleChange}
               
              /><label htmlFor={answer}>{answer}</label>
                  <br /></div>
            
        )
        return answerElements
    }
    React.useEffect(function(){
         if (props.props.type === "multiple") {
        const answers = shuffleAnswers(props.props.correct_answer, props.props.incorrect_answers)
        setAnswerOrder(answers)
         }
           else if (props.props.type === "boolean") {
        const answers = ["True","False"]
         setAnswerOrder(answers)}
    },[props.gameState])
    
    if (props.props.type === "multiple") {
           const answers =answerOrder
        var answerElements = generateRadioButtons(answers)
   
        var answerEle2 = answers.map(item => <p> hello </p>)
    }
    else if (props.props.type === "boolean") {
     
        const answers =answerOrder
        var answerElements = generateRadioButtons(answers)
    }

    return (
        <div>
            <p className="question--question">{props.props.question}</p>
            <fieldset className="Quizical--question--buttons">
                  {answerElements}
            </fieldset>
        </div>)
}