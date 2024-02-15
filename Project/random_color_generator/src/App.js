import { useState } from 'react';

function App() {
  const [color,setColor] = useState(generateRandomColor())

  const handleColorChange = () => {
    setColor(generateRandomColor())
  }

  function generateRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
  }
  return (
    <section className="container" style={{background: color}}>
      <h1 className='white'>Your Color is rgb({color})</h1>
      <button onClick={handleColorChange} className='light-button'>Refresh</button>
    </section>
  );
}

export default App;
