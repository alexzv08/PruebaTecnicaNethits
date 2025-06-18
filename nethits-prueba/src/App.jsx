import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuPrincipal from './pages/MenuPrincipal';
import Experiencia from './pages/Experiencia';
import PuntosDeInteres from './pages/PuntosDeInteres';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuPrincipal />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/puntos-de-interes" element={<PuntosDeInteres />} />
      </Routes>
    </Router>
  );
}

export default App;