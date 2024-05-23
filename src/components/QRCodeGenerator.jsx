import React, { useRef } from "react";

const QRCodeGenerator = () => {
  const inputValue = useRef();

  function handleClick() {
    const value = inputValue.current.value;
    console.log(value);
  }
  return (
    <div className="container">
      <h1>QR Code Generator</h1>
      <input type="text" placeholder="Enter your Value here" ref={inputValue} />
      <button className="btn" onClick={() => handleClick()}>
        Generate
      </button>
      <div className="code--container"></div>
    </div>
  );
};

export default QRCodeGenerator;
