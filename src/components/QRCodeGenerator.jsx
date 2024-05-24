import React, { useState, useRef } from "react";
import QRCode from "react-qr-code";
import "./style.css";

const QRCodeGenerator = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  function handleQrCodeGeneration(e) {
    setQrCode(input);
    setInput("");
  }
  return (
    <div className="container">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter your Value here"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        disabled={input === "" ? true : false}
        className="btn"
        onClick={handleQrCodeGeneration}
      >
        Generate
      </button>
      <div className="code--container">
        <QRCode value={qrCode} />;
      </div>
    </div>
  );
};

export default QRCodeGenerator;
