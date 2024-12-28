import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="logo">
        <img src="/images/info-btn.png" alt="Info" />
      </div>
      <div className="ignitia-logo">
        <img src="/images/ignitia-logo.png" alt="Ignitia Logo" />
      </div>
      <div className="slideshow">
        <div className="slide slide1"></div>
        <div className="slide slide2"></div>
        <div className="slide slide3"></div>
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
