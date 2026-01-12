import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Viewer } from './pages/Viewer';
import { About } from './pages/About';
import { Worklist } from './pages/Worklist';
import { Navbar } from './components/Navbar';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { setStudies, selectStudy } from './features/studies/studiesSlice';
import { setSeries, selectSerie } from './features/series/seriesSlice';

function App() {

  const selectedStudy = useAppSelector(
    (state) => state.studies.selectedStudy
  );
  const selectedSerie = useAppSelector(
    (state) => state.series.selectedSerie
  );



  return (
    <BrowserRouter>
      <Navbar selectedSerie={selectedSerie} selectedStudy={selectedStudy}/>
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
