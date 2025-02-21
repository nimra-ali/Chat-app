
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatPage from "../src/Chatpages"; 
import Login from "./components/Login/Login";
import Notification from "./components/Notification/Notification";

const App = () => {
  return (
    <Router >
      <Routes >
        <Route  path="/" element={<Login />} />
        <Route path="/chat" element={<ChatPage />} /> 
      </Routes>
      <Notification />
    </Router>
  );
};

export default App;
