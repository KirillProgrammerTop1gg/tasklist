import './App.css';
import MainPage from './Components/MainPage/MainPage';
import Header from './Components/Header/Header';
import Reg from './Components/Reg/Reg';
import Auth from './Components/Auth/Auth';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
