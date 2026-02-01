import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div style={{ padding: 32, fontFamily: 'Arial' }}>
      <h1>LuceeGas</h1>
      <p>Web app avviata correttamente ✅</p>
    </div>
  )
}

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
