import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="logo-container">
        <div className="rotating-circle">
          <img src="/images/inner-2.png" alt="Rotating Circle" />
        </div>
        <div className="inner-logo">
          <img src="/images/inner-1.png" alt="Inner Logo" />
        </div>
      </div>

      <div className="top-right-image">
        <img src="/images/ignitia-logo.png" alt="Top Right Image" />
      </div>

      <div className="slideshow">
        <div className="slide slide1"></div>
        <div className="slide slide2"></div>
        <div className="slide slide3"></div>
      </div>

      <div className="hero-image">
        <img src="/images/ignitia-logo.png" alt="Hero" />
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
