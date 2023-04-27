import { Route, Routes } from 'react-router-dom';
import './App.css';
import ROU from './pages/ROU';
import COU from './pages/COU';
import Home from './pages/Home';
import SubmitROU from './components/SubmitROU';
import CourseCOU from './components/CourseCOU';
import SubmitCOU from './components/SubmitCOU';
import CourseROU from './components/CourseROU';
import CourseROUCheck from './components/CourseROUCheck';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/corporate_ou' element={<COU/>}/>
      <Route path='/corporate_ou/course_details' element={<CourseCOU/>}/>
      <Route path='/corporate_ou/submit' element={<SubmitCOU/>}/>
      <Route path='/retail_ou' element={<ROU/>}/>
      <Route path='/retail_ou/courses' element={<CourseROUCheck/>}/>
      <Route path='/retail_ou/courses/course_details' element={<CourseROU/>}/>
      <Route path='/retail_ou/submit' element={<SubmitROU/>}/>
     </Routes>
    </div>
  );
}

export default App;
