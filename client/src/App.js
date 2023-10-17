import { Main, Reports } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Reports' element={<Reports />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
