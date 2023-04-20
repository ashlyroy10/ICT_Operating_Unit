import { Route, Routes } from 'react-router-dom';
import './App.css';
import ROU from './pages/ROU';
import COU from './pages/COU';
import Home from './pages/Home';
import CourseROU from './components/CourseROU';
import SubmitROU from './components/SubmitROU';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/retail_ou' element={<ROU/>}/>
      <Route path='/course_details' element={<CourseROU/>}/>
      <Route path='/submit' element={<SubmitROU/>}/>
      <Route path='/corporate_ou' element={<COU/>}/>
     </Routes>
    </div>
  );
}

export default App;
