import Home from './Pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Login from '../src/Pages/Login/Login';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
