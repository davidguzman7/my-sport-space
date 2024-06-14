import { useState } from 'react'
import { Button, Container, Typography } from '@mui/material'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <h1>Sport Space</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
      <p className="read-the-docs">
        This is an app for Sport
      </p>
    </Container>
  )
}

export default App
