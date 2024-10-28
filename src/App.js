import React from 'react';
const questions = [
  {
      questionText: 'Wat is de hoofdstad van Frankrijk?',
      answerOptions: [
          { answerText: 'New York', isCorrect: false },
          { answerText: 'London', isCorrect: false },
          { answerText: 'Paris', isCorrect: true },
          { answerText: 'Dublin', isCorrect: false },
      ],
  },
  {
      questionText: 'Wie is de oprichter van Tesla?',
      answerOptions: [
          { answerText: 'Jeff Bezos', isCorrect: false },
          { answerText: 'Elon Musk', isCorrect: true },
          { answerText: 'Bill Gates', isCorrect: false },
          { answerText: 'Tony Stark', isCorrect: false },
      ],
  },
  {
      questionText: 'Welk bedrijf was eind jaren 90 bijna failliet?',
      answerOptions: [
          { answerText: 'Apple', isCorrect: true },
          { answerText: 'Intel', isCorrect: false },
          { answerText: 'Amazon', isCorrect: false },
          { answerText: 'Microsoft', isCorrect: false },
      ],
  },
  {
      questionText: 'Hoeveel Harry Potter boeken zijn er?',
      answerOptions: [
          { answerText: '1', isCorrect: false },
          { answerText: '4', isCorrect: false },
          { answerText: '6', isCorrect: false },
          { answerText: '7', isCorrect: true },
      ],
  },
  {
      questionText: 'Wat is GEEN Cryptomunt?',
      answerOptions: [
          { answerText: 'Bitcoin', isCorrect: false },
          { answerText: 'EOS', isCorrect: false },
          { answerText: 'Pancake Swap', isCorrect: false },
          { answerText: 'XOTA-XL', isCorrect: true },
      ],
  },
  {
    questionText: 'Welke van deze personen is allochtoon ',
    answerOptions: [
        { answerText: 'Qian', isCorrect: false },
        { answerText: 'Kyran', isCorrect: false },
        { answerText: 'Efe', isCorrect: true },
        { answerText: 'Dim', isCorrect: false },
    ],
},
];
class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      vraagNr: 0,
      score: 0,
      stop: false,
    }

  }
  
  handleAnswerOptionClick(isCorrect) {
    if (isCorrect) {
      this.setState( {'score': this.state.score+1} );
    }else{
    }
    if ( this.state.vraagNr < questions.length-1) {
      this.setState( {'vraagNr': this.state.vraagNr+1} );
    } else {
      this.setState( { 'stop': true } );
    }
    
  }
  
  render() {
    var antwoorden=questions[this.state.vraagNr].answerOptions;
    return (
      <div className="app">
        { this.state.stop  ?  
          (
            <div className='score'>
  Jouw score is {this.state.score} van de {questions.length}
</div>
          )
          : 
          ( 
            <>
              <div className="column">
                <span>Vraag {this.state.vraagNr + 1} van {questions.length}</span>
                <span className="question">{questions[this.state.vraagNr].questionText}</span>
              </div>
              
              <div className="column uitlijnen">
                { antwoorden.map((antwoord) => (
                  <button onClick={() => this.handleAnswerOptionClick(antwoord.isCorrect)}>{antwoord.answerText} {antwoord.isCorrect}</button>
                ))}
              </div>
            </>
          )
        }
      </div>
    );
  }

}

export default App;