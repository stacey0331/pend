import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AccountPage from './pages/AccountPage';
import CreateAccountPage from './pages/CreateAccountPage';


// components
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <Routes>
          <Route path="/" element={<HomePage />} exact/>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
       </Routes>
      </header>
    </div>
  );
}

export default App;
