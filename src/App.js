import logo from './logo.svg';
import './App.css';
import { AppRouter } from './router';
import { AuthState } from './context/authContext';

function App() {
  return (
    <AuthState>
      <AppRouter/>
   </AuthState>
  );
}

export default App;
