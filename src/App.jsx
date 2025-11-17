import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListPatients from './pages/ListPatients'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/patients" element={<ListPatients />} />
        

      </Routes>
    </BrowserRouter>
  )
}

export default App
