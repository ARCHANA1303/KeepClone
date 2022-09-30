import react from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Other from "./Components/Other";
import Menubar from "./Components/Menubar";
import Task from "./Components/Task";
import { NavProvider } from "./context/NavProvider";
function App() {
  return (
    <NavProvider>
      <div className="App">
        <Navbar />
        <Other />
      </div>
    </NavProvider>
  );
}

export default App;