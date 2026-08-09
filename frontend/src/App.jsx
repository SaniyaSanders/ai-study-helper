import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    <div className="app">
      <header className="navbar">
        <h2>🧠 AI Study Helper</h2>
        <button className="dashboard-button">Dashboard</button>
      </header>

      <main className="main-content">
        <section className="hero">
          <h1>Your AI-powered study companion</h1>
          <p>
            Learn smarter from your own course materials.
          </p>
        </section>

        <section
          className="upload-section"
          onDragOver={(event) => event.preventDefault()}
          onDrop={(event) => {
           event.preventDefault();
           const file = event.dataTransfer.files[0];

           if (file && file.type === "application/pdf") {
            setSelectedFile(file);
           }
          }}
        >
          <div className="upload-icon">📄</div>

          <h2>Upload your study materials</h2>

          <p>
            Drop a PDF here or choose a file to get started.
          </p>

          <label className="primary-button">
           Choose File
           <input
            type="file"
            accept=".pdf"
            onChange={(event) => setSelectedFile(event.target.files[0])}
           />
          </label>
          {selectedFile && (
           <div className="selected-file">
            <p>📄 {selectedFile.name} selected</p>

            <button
             className="remove-button"
             onClick={() => setSelectedFile(null)}
            >
             Remove
            </button>
           </div>
         )}
        </section>

        <section className="actions">
          <h2>What do you want to do?</h2>

          <div className="action-buttons">
            <button>💬 Ask Questions</button>
            <button>🧠 Quiz Me</button>
            <button>📚 Study Guide</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App
