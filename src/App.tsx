import { useState } from "react";
import QRCode from "react-qr-code";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");

  return (
    <div className="container">
      <h1>QRIP: QR code generator</h1>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          id="greet-input"
          placeholder="Enter a url..."
          value={url}
          onChange={(e) => {
            e.preventDefault();
            setUrl(e.target.value);
          }}
        />
      </form>
      <div
        id="canvas"
        style={{
          height: "30vh",
          margin: "auto auto",
          width: "30vw",
          background: "white",
          padding: "16px",
          marginTop: "50px",
        }}
      >
        <QRCode
          size={250}
          style={{
            height: "100%",
            maxWidth: "100%",
            width: "100%",
          }}
          value={url}
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
}

export default App;

