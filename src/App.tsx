import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Home,
  Header,
  Footer,
  Sitemap,
  PageNotFound,
  Photography,
  Resume,
} from "./Components";
import Contact from "./Components/Contact/Contact.jsx";
import Bookshelf2 from "./Components/Bookshelf/Bookshelf2.jsx";
import Music from "./Components/Music/Music.jsx";
import About from "./Components/About/About.jsx";
import Projects from "./Components/Projects/ProjectHome.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <header>
          <Header />
        </header>
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/bookshelf" element={<Bookshelf2 />} />
            <Route path="/music" element={<Music />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/contact-me" element={<Contact />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
