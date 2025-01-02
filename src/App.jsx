import { useState } from "react";
import "./App.css";
import CubeComponent from "./components/CubeComponent";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="app-container">
        <img
          src="/images/circle3.png"
          alt="Rotating Circle"
          className="circle top-left"
        />

        <img
          src="/images/circle3.png"
          alt="Rotating Circle"
          className="circle bottom-right"
        />

        <div className="logo">
          <img src="/images/psit.png" alt="PSIT Logo" className="psit-logo" />
        </div>

        <div className="hero-section">
          <img
            src="/images/ignitia-logo.png"
            alt="Hero"
            className="hero-image"
          />
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

        <div className="button-container">
          <button className="open-modal-btn" onClick={openModal}>
            Explore More
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>

            <CubeComponent />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
