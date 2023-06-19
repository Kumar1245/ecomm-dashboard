import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1>E-Comm Project</h1>
        <Routes>
          <Route path="/login" Component={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
