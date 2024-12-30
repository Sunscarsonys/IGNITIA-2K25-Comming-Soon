import "./App.css";

function App() {
  return (
    <div className="app-container">
      <img
        src="/images/circle.png"
        alt="Rotating Circle"
        className="circle top-left"
      />

      <img
        src="/images/circle.png"
        alt="Rotating Circle"
        className="circle bottom-right"
      />

      <div className="logo">
        <img src="/images/psit.png" alt="PSIT Logo" className="psit-logo" />
      </div>

      <div className="hero-section">
        <img src="/images/ignitia.png" alt="Hero" className="hero-image" />
      </div>

      <div className="glitch-text">
        <div className="container">
          <div className="stack" style={{ "--stacks": 3 }}>
            <span style={{ "--index": 0 }}>COMING SOON</span>
            <span style={{ "--index": 1 }}>COMING SOON</span>
            <span style={{ "--index": 2 }}>COMING SOON</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
