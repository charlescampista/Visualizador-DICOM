import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Viewer } from './pages/Viewer';
import { About } from './pages/About';
import { Worklist } from './pages/Worklist';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewer" element={<Viewer />} />
        <Route path="/about" element={<About />} />
        <Route path="/worklist" element={<Worklist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
