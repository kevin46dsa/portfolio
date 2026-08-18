import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/bootstrap-overrides.css";

import {
  Home,
  Header,
  Footer,
  Sitemap,
  PageNotFound,
  Photography,
  Resume,
} from "./Components";
import Bookshelf from "./Components/Bookshelf/Bookshelf.jsx";
import Music from "./Components/Music/Music.jsx";
import About from "./Components/About/About.jsx";
import Projects from "./Components/Projects/ProjectHome.jsx";
import { Blog } from "./Components/Blog/Blog.tsx";
import { ScrollToTop } from "./Components/ScrollToTop.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <header>
          <Header />
        </header>
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/bookshelf" element={<Bookshelf />} />
            <Route path="/music" element={<Music />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/photography" element={<Photography />} />
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
