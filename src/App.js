import React from 'react';
    import './App.css';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Home from './Components/Home.jsx';
    //import Dark from "./Assets/Darkmodelogo.png"
    //import Light from "./Assets/Lightmodelogo.png"
    //import UnderConstruction from './Components/UnderConstruction/UnderConstruction';
    import Header from './Components/Header/Navbar.jsx'
    import Resume from './Components/Resume/Resume';
    import Contact from './Components/Contact/Contact';
    import Bookshelf2 from './Components/Bookshelf/Bookshelf2';
    import Photography from './Components/Photography/Photography';
    import Music from './Components/Music/Music';
    import About from './Components/About/About';
    import Projects from './Components/Projects/ProjectHome';
    import PageNotFound from './Components/Pagenotfound/Pagenotfound.jsx';
    import Blog from './Components/Blog/Blog.jsx';
    //import Footer from './Components/Footer/Footer';
    //import Character from './components/Character';
    //import Characterlistbypage from './components/Characterbypage';
    //import CharacterHistory from './components/Characterhistory';
    //import Comics from './components/Comics';
   // import Comicsbypage from './components/Comicsbypage';
    //import Stories from './components/Stories';
    //import Storiesbypage from './components/Storiesbypage';
    import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
        <Router>
        <div >
            <header>
             <Header/>
            </header>
            <div >
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />}/>
                <Route path='/bookshelf' element={<Bookshelf2 />}/>
                <Route path='/music' element={<Music />}/>
                <Route path='/resume' element={<Resume />}/>
                <Route path='/projects' element={<Projects />}/>
                <Route path='/projects/:id' element={<Projects />}/>
                <Route path='/blog' element={<Blog />}/>
                <Route path='/photography' element={<Photography />}/>
                <Route path='/contact-me' element={<Contact />}/>
                <Route path='*' element={<PageNotFound />} />

              </Routes>
            </div>
            <footer>
              
            </footer>
          </div>
        </Router>
        
      );
    };
    
    export default App;

