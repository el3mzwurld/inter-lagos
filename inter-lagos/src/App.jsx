import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Import Home component
import Main from "./Components/Body";
//
import "./assets/css/main.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
