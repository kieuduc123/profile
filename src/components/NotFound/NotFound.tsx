import { NavLink } from 'react-router-dom';
import './notfound.scss';
const NotFound = () => {
  return (
    <div className="section notfound" data-aos="fade-up">
      <div className="notfound">
        <div className="notfound__img-wrap"></div>
      </div>
      <div className="notfound__text-wrap">
        <NavLink to={'/'}
        >
          <h1>
            <span>Go to Home</span>
          </h1>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
