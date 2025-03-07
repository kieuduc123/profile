import { Fragment, lazy, Suspense } from 'react';
import './assets/boxicons-2.1.2/css/boxicons.min.css';
import 'aos/dist/aos.css';
import * as AOS from 'aos';
import Home from './pages/Home';
import ToggleTheme from './components/ToggleTheme';
import { Route, Routes } from 'react-router-dom';
// import Blog from './pages/Blog';
import './App.scss';
import './scss/_variables.scss';
import Header from './components/Header';
import * as React from 'react';
const About = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./components/NotFound'));

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <Fragment>
      <Header />
      <ToggleTheme />
      <div className="main">
        <Suspense fallback={''}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Fragment>
  );
};

export default App;
