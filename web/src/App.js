import './App.css';
import {Route,Routes } from 'react-router-dom';
import Main from './Main';
import { DashBoard } from './components/DashBord/DashBord';
import Profile from './components/Profile/client/Profile';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <AuthProvider>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/join' element={<Profile/>}/>
      <Route path='/DashBoard' element={<DashBoard/>}/>
    </Routes>
    </AuthProvider>
  );
}
export default App;
