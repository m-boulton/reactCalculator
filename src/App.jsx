import './App.css';

function App() {
  return (
    <>
      <div className='calculator-grid'>
        <div className='calculator-output'>
          <div className='calculator-prev'>previous calc</div>
          <div className='calculator-curr'>current calc</div>
        </div>
        <button className='span-two'>Clear</button>
        <button>Del</button>
        <button>÷</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>x</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button className='span-two'>=</button>
      </div>
    </>
  );
}

export default App;
