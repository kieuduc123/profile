import { Fragment } from 'react';
import './assets/boxicons-2.1.2/css/boxicons.min.css';
import 'aos/dist/aos.css';
import * as AOS from "aos";
import Home from './pages/Home';
import ToggleTheme from './components/ToggleTheme';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import "./App.scss";
import './scss/_variables.scss'
import Header from './components/Header';
import * as React from 'react';
const App = () => {
   React.useEffect(() => {
    AOS.init({
      duration: 1200,
    })
  }, [])
  return (
    <Fragment>
     <Header />
      <ToggleTheme />
       <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Fragment>
  );
};

export default App;