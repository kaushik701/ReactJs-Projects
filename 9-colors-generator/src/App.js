import React,{ useState } from 'react';
import Values from 'values.js';
import SingleColor from './SingleColor';

function App() {
  const [color,setColor] = useState('');
  const [error,setError] = useState(false);
  const [list,setList] = useState(new Values('#f120e5').all(10));

  const handelSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    }
    catch(error){
      setError(true);
    }
  } 
  return (
    <>
    <section className='container'>
    <h3>color generator</h3>
    <form onSubmit={handelSubmit}>
      <input type='text' value={color} 
      onChange={(e) => setColor(e.target.value)} 
      placeholder='#fff093' 
      className={`${error ? 'error':null}`}></input>
      
      <button className='btn' type='submit'>SUBMIT</button>
    </form>
    </section>
    <section className='colors'>
      {list.map((color,index)=> {
        const hex = color.hex;
        return( 
        <SingleColor 
        key={index} {...color}
        index={index} 
        hexColor={color.hex}/>
        );
      })}
    </section>
    </>
  );
}

export default App;
