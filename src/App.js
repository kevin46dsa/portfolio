import React from 'react';
    import './App.css';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Home from './Components/Home.jsx';
    import Dark from "./Assets/Darkmodelogo.png"
    import Light from "./Assets/Lightmodelogo.png"
    import UnderConstruction from './Components/UnderConstruction/UnderConstruction';
    import Header from './Components/Header/Navbar.jsx'
    import Resume from './Components/Resume/Resume';
    import Bookshelf from './Components/Bookshelf/Bookshelf';
    //import Character from './components/Character';
    //import Characterlistbypage from './components/Characterbypage';
    //import CharacterHistory from './components/Characterhistory';
    //import Comics from './components/Comics';
   // import Comicsbypage from './components/Comicsbypage';
    //import Stories from './components/Stories';
    //import Storiesbypage from './components/Storiesbypage';
    import {HashRouter as Router, Route, Link, Routes} from 'react-router-dom';

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
                <Route path='/about' element={<UnderConstruction />}/>
                <Route path='/bookshelf' element={<Bookshelf />}/>
                <Route path='/music' element={<UnderConstruction />}/>
                <Route path='/resume' element={<Resume />}/>
                <Route path='/projects' element={<UnderConstruction />}/>
              </Routes>
            </div>
            <footer>

            </footer>
          </div>
        </Router>
        
      );
    };
    
    export default App;

