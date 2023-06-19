import React from 'react';
import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import Registration from './Pages/Registration/Registration';
import './LoginForm.css';
import Home from './Pages/Home/Home';
import CoursSchedule from './Pages/CoursSchedule/CoursSchedule';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
         <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/CoursSchedule" element={<CoursSchedule />} />

        </Route>
      </Routes>
      </BrowserRouter>

  );
};

export default App;
