import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx';
import Login from './components/Login';
import SignUp from './components/SignUp';


function App() {
  const appStyle = {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white'
  };

  return (
    <div className="App" style={appStyle}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
