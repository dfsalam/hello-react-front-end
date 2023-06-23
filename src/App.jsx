import { Route, Routes } from 'react-router';
import Home from './routes/Home';
import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);

export default App;
