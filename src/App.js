import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';


import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import About from './Components/AboutPage/About';
import Blogs from './Components/BlogsPage/Blogs';
import Notes from './Components/NotesPage/Notes';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import { AuthProvider } from './Context/AuthContext';
import LoginPage from './Components/Login/LoginPage';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
// import HomePage from './Components/HomePage/HomePage';
// import HomePage from './Components/HomePage';


function App() {
  return (
    <div className="App">

      <AuthProvider>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/About' element={<About />} />
            <Route path='/Blogs' element={<Blogs />} />
            <Route path='/AdminPanel' element={<AdminPanel />} />
            <Route path='/Login' element={<LoginPage />} />


            <Route path="/Notes/:id" element={<Notes />} />
            <Route path="*" component={NotFoundPage} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
