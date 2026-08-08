import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1> AI Study Helper 📚</h1>
      <p>Your personal AI-powered study companion.</p>
    </div>
  )
}

export default App
