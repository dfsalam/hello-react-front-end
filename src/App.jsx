import { Route, Routes } from 'react-router'
import Greeting from './Greeting'
import './App.css'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Greeting />} />
    </Routes>
  )
}

export default App
