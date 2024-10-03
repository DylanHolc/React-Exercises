import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ColorHome from './ColorHome'
import Color from './Color'
import ColorPickerForm from './ColorPickerForm'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/colors' element={<ColorHome />} />
          <Route path='/colors/:color' element={<Color />} />
          <Route path='/colors/new' element={<ColorPickerForm />} />
          <Route path='*' element={<Navigate to='/colors' />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
