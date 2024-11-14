import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const [resetCount, setResetCount] = useState(10)
  const [isCounting, setIsCounting] = useState(false)
  const [intervalId, setIntervalId] = useState(null)
  
  

  const startCountdown = () => {
    if (isCounting) {
      clearInterval(intervalId)
      setIsCounting(false)
    } else {
      if (resetCount === 0) {
        setResetCount(10)
      }

      const id = setInterval(() => {
        setResetCount(prevCount => {
          if (prevCount <= 1) {
            clearInterval(id)
            setIsCounting(false) 
            return 0
          }
          return prevCount - 1
        })
      }, 1000)
      setIntervalId(id)
      setIsCounting(true)
    }
  }

  const persons = [

    {
      name : "Ahri Descamps",
      age: 28,
    },
    {

      name: "Renekton Lux",
      age: 18,
    },

    {
      name: "Vladimir Zeri",
      age: 8,
    },

    {
      name: "Lux",
      age: 64,
    }

  ];

  const [personsList, setPersons] = useState(persons)

  const sortByName = () => {
    const sortedByName = [...personsList].sort((a, b) => a.name.localeCompare(b.name))
    setPersons(sortedByName)
  }

  const sortByAge = () => {
    const sortedByAge = [...personsList].sort((a, b) => a.age - b.age)
    setPersons(sortedByAge)
  }


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">

        <button onClick={() => setCount((count) => count + 1)}
        disabled={count >= 10}
        style={{cursor: count >= 10 ? 'not-allowed' : 'pointer'}}
        >
          + 
          
        </button>

        
        <button onClick={startCountdown}
        >
          {isCounting ? 'stop' : 'Start'}
        </button>

        <button onClick={() => setCount((count) => count - 1)}
        disabled={count <= 0}
        style={{cursor: count <= 0 ? 'not-allowed' : 'pointer'}}>
          - 
        </button>
        

        <p>
          Countdown: {resetCount}
        </p>

        <p>
          {resetCount <= 0 ? 'Fini!' : ''}
        </p>

        <p>
          {count}
        </p>

        <p>
           {count % 2 === 0 ? `ce nombre est pair ` : ``}
        </p>

        <p>
          <button onClick={sortByName}>Trier par nom</button>
          <button onClick={sortByAge}>Trier par âge</button>
        </p>

        <h2>Liste des personnes :</h2>
        <ul>
          {personsList.map((person, index) => (
            <li key={index}>
              {person.name}, {person.age} ans
            </li>
          ))}
        </ul>
        
        <p> 
        Edit <code>src/App.jsx</code> and save to test HMR
        </p>

        
    </div>

        
    
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
   
    </>
  )
}

export default App
