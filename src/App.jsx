import { useState } from "react";
import QRCode from "react-qr-code";
import "./App.css";

export default function App() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
  }

  return (
    <>
      <div>
        <h1>Dencode</h1>

        <div>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            name="qr-code"
            placeholder="Enter your value here"
          />
          <button
            disabled={input && input.trim !== "" ? false : true}
            onClick={handleGenerateQrCode}>
            Generate QR Code
          </button>
        </div>

        <div>
          <QRCode id="qr-code-value" value={qrCode} size={400} />
        </div>
      </div>
    </>
  );
}
