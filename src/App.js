import UserList from "./components/Home/UserList/UserList";
import UserDetail from "./components/UserDetail/UserDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextProvider from "./components/context/ContextProvider";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/user/:userId" element={<UserDetail />} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
