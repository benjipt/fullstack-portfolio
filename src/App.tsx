import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import { Navbar } from './components/Navbar';
import { useScrollToTop } from './customHooks/useScrollToTop';

export default function App() {
  useScrollToTop();

  return (
    <div data-testid='app'>
      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/projects' />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}
