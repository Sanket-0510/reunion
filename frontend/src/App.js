import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Test from './components/Test';

function App() {
  const appStyle = {
    margin: 0,
    padding: 0,
    width: '100vw',
    height: '100vh',
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
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
