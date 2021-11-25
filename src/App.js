import React from "react"; 

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import { GiBookshelf } from "react-icons/gi";
import { BsQuestionSquare } from "react-icons/bs";
import { GiBookCover } from "react-icons/gi";

// Pages 
import Welcome from "./pages/Welcome";
import Books from "./pages/Books";
import About from "./pages/About";
import Dev from "./pages/Dev";
import BookDetail from "./pages/Detail";
// import Detail from "./pages/Detail2";

import "./App.css"; 

function App() { 
  // const [detail, setdetail] = useState();
  
  return (
    <BrowserRouter>
      <header>
        <div className="appHeader">
          <GiBookCover className="icon" />
          <p id="titleGroup">Good Books Choices</p>
          <GiBookCover className="icon" />
        </div>
      </header>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/books" element={<Books />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/developer" element={<Dev />}></Route>
          <Route path="/bookdetail/:rank" element={<BookDetail />}></Route>
          {/* <Route path="/detail" element={<Detail />}></Route> */}
        </Routes>
      <footer>
        <NavLink to="/books" className="iconWrapper">
          <GiBookshelf className="icon" />
          Books Rec
        </NavLink>
        <NavLink to="/about" className="iconWrapper">
          <BsQuestionSquare className="icon" />
          About App
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}

export default App;