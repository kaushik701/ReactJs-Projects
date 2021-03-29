import React,{ useState } from 'react';
import data from './data';
import Question from './Questions';
function App() {
  const [questions,setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>Questions and answers about login</h3>
        <section className='info'>
          {
            questions.map((question) => {
              return( 
              <Question key={question.id}{...question}></Question>
              );
            })
          };
        </section>
      </div>
    </main>
  );
}

export default App;