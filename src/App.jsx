import { Routes, Route } from 'react-router-dom';
import InputChip from './components/InputChip/InputChip';
import Home from './page/Home'
import './App.css'

function App() {


  return (
    <Routes>
       <Route path="/" element={<Home/>}></Route>
      <Route path="/chip-component" element={<InputChip/>}></Route>
    </Routes>
  )
}

export default App
