import React, { useState } from "react";
import QRCode from "react-qr-code";



function App() {
  const [qrCode, setQrCode] = useState("")
  const [input, setInput] = useState("")

  function handleGeneratorQrCode(){
    setQrCode(input)
    setInput("")
  }
  return (
    <div className="qr_code_generator">
      <h1>QR Code Generator</h1>
      <div>
        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter your value here..." />
        <button onClick={handleGeneratorQrCode}>Generate</button>
      </div>
      <div>
        <QRCode id="qr-code-generator"  value={qrCode} size={400} bgColor="#f00" />
      
      </div>
    </div>
  );
}

export default App;
