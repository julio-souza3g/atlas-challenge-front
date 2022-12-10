import { Route, Routes } from 'react-router-dom';
import { FriendsList } from './pages/FriendsList';
import { Login } from './pages/Login';
import './styles/global.css';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/friends" element={<FriendsList />} />
    </Routes>
  );
}
