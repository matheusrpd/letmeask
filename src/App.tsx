import { BrowserRouter as Router } from 'react-router-dom';

import { AppProvider } from './contexts/index';
import { Routes } from './routes';

export default function App() {
  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>
    </Router>
  );
}