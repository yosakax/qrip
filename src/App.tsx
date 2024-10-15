import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
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
          background: "white",
          padding: "16px",
          marginTop: "50px",
        }}
      >
        <QRCodeCanvas
          size={250}
          style={{
            height: "100%",
            maxWidth: "100%",
            width: "100%",
          }}
          value={url}
          level="L"
          marginSize={2}
        />
      </div>
    </div>
  );
}

export default App;

