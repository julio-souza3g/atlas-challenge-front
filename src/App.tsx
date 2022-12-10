import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './auth/PrivateRoute';
import { FriendsList } from './pages/FriendsList';
import { Login } from './pages/Login';
import './styles/global.css';

export function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/friends" element={<PrivateRoute Component={FriendsList}/>} />
    </Routes>
    <ToastContainer autoClose={3000} />
    </>
  );
}
