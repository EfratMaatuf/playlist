import './App.css';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Login from './components/Login/Login';
import SongList
  from './components/SongList/SongList';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SongList" element={<SongList />} />
      </Routes>
    </div>
  );
}

export default App;
