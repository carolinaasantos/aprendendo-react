//import Login from './pages/login';
//import Home from './pages/home';
import AppRoutes from './routes/routes'
import { BrowserRouter } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </ BrowserRouter>
  );
}

export default App;