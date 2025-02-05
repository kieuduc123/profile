import './home.scss';
import { Link } from 'react-router-dom'
import Button from '../../components/Button';



const Home = () => {
  window.scrollTo(0, 0)

  return (
    <>
      <div className="slide"></div>
      <div className="section home" data-aos="fade-up">
        <div className="color-block"></div>
        <div className="home__img">
          <div className="home__img-wrap"></div>
        </div>
        <div className="home__text">
          <div className="home__text-wrap">
            <h1>Hello, I'm Kieu Trung Duc
              <span> FrontEnd Developer !</span>
            </h1>
            <p>
              Hello mọi người! Mình là Đức, đang là nhân  viên công ty Simplize.
              Cơ duyên mình đến với IT là nhờ các sự tích "IT là vua của các nghề", hay câu chuyện "thằng em học BK cơ khí sinh năm 96". Tháng 7/2023, tình cờ biết đến cộng đồng F8 Fullstack của anh Sơn, mình đã hoàn thành các khóa học HTML, CSS, ReactJS và có được một số dự án cá nhân. Trải qua nhiều cay đắng, thật sự cảm ơn anh Sơn cũng như cộng đồng anh em đóng góp đã truyền động lực cho mình suốt thời gian qua giúp mình không bỏ cuộc.
            </p>
            <Button
              className="portfolio-btn"
            >
              <Link to="/portfolio">
                {/* <Portfolio /> */}
                <span className="btn-text">Portfolio</span>
                <span className="btn-icon">
                  <i className='bx bx-right-arrow-alt'></i>
                </span>
              </Link>
            </Button>
            <Button
              className="about-btn"
            >
              <Link to="/about">
                <span className="btn-text">About</span>
                <span className="btn-icon">
                  <i className='bx bx-right-arrow-alt'></i>
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home