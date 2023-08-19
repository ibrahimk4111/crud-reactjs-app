import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import NotesListPages from "./pages/NotesListPages";
import NotePage from "./pages/NotePage";
import AddNewNote from "./Components/AddNewNote";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact Component={NotesListPages} />
          <Route path="/note/:id" Component={NotePage} />
          <Route path="/note/add" Component={AddNewNote} />
        </Routes>
      </Router>

      {/* <Router>
        <Routes>
          <Route path="" element={<Header />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
