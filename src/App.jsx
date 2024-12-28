import { useState } from "react";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogoClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <div className="logo-container" onClick={handleLogoClick}>
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
            <span style={{ "--index": 0 }}>COMING SOON...</span>
            <span style={{ "--index": 1 }}>COMING SOON...</span>
            <span style={{ "--index": 2 }}>COMING SOON...</span>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              vehicula dapibus velit, at pretium felis eleifend ut. Morbi
              imperdiet, ligula non bibendum ultrices, purus eros tincidunt
              neque, sed bibendum mi mi ac nisl. Cras in dui risus. Etiam
              tincidunt eros vel urna vestibulum scelerisque.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
