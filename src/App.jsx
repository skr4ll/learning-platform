import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import FAQ from './pages/FAQ';
import Veranstaltung from './pages/Veranstaltung';
import Postfach from './pages/Postfach';
import Impressum from './pages/Impressum';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/veranstaltung" element={<Veranstaltung />} />
        <Route path="/postfach" element={<Postfach />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
    </Router>
  );
};

export default App;
