import './App.css';
import {BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom';
import About from "./Pages/About";
import Home from './Pages/Home'
import Dev from './Pages/Dev'
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/about' element={<About />}></Route>
        <Route path='/dev' element={<Dev />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;