import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home.tsx";
import Header from "./Components/Header/Navbar.jsx";
import Bookshelf2 from "./Components/Bookshelf/Bookshelf2";
import { Photography, PageNotFound } from "./Components";
import Music from "./Components/Music/Music";
import { Projects, ContactPage, AboutPage, ResumePage } from "./Page";
import Blog from "./Components/Blog/Blog.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <header>
          <Header />
        </header>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/bookshelf" element={<Bookshelf2 />} />
            <Route path="/music" element={<Music />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/contact-me" element={<ContactPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <footer></footer>
      </div>
    </Router>
  );
}

export default App;
