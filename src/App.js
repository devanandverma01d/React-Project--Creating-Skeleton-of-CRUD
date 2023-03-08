import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import CreateStudent from './Pages/Student/CreateStudent';
import CreateTeacher from './Pages/Teacher/CreateTeacher';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/teacher/create' element={<CreateTeacher />}></Route>
        <Route path='/student/create' element={<CreateStudent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
