import { Fragment } from 'react';
import './portfolio.scss';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import PageHeader from '../../components/PageHeader/PageHeader';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
import PortfolioDetail from '../../components/PortfolioDetail';
import {
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  vetc1,
  vetc2,
  vetc3,
  vetc4,
  vetc5,
  vetc6,
  bvm1,
  bvm2,
  bvm3,
  bvm4,
  bvm5,
  bvm6,
  manshop1,
  manshop2,
  manshop3,
  manshop4,
  manshop5,
  manshop6,
  pmc1,
  pmc2,
  pmc3,
  pmc4,
  pmc5,
  pmc6,
  pmc7,
  shoes1,
  shoes2,
  shoes3,
  movie1,
  movie2,
  movie3,
  movie4,
} from '../../assets/portfolio/portfolio';
const portfolio = [
  {
    id: 1,
    thumbUrl: [manshop1, manshop2, manshop3, manshop4, manshop5, manshop6],
    date: '28-11-2022- 28-12-2022',
    title: 'ManproShop',
    description:
      'Một trang web về sàn thương mại điện tử với các sản phẩm thời trang nữ, quần áo , phụ kiện. Một số chức năng nổi bật như xem danh sách sản phẩm , lọc , thêm , sửa,  xoá, đăng kí, đăng nhập....  ',
    role: 'Frontend',
    frontend: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
    backend: 'Không',
    source: 'https://github.com/kieuduc123/Project',
    preview: 'https://manproshop.netlify.app/',
    video: 'Không',
    tags: [
      'git',
      'ui / ux',
      'css',
      'bootstrap',
      'responsive',
      'javascript',
      'ajax',
    ],
  },
  {
    id: 2,
    thumbUrl: [movie1, movie2, movie3, movie4],
    date: '07-09-2023 - 17-07-2023',
    title: 'Movie App',
    description:
      'Sử dụng TaiLwind css và React cho giao diện người dùng và API TMDB cho giao diện phụ trợ, tạo ra một ứng dụng web xem phim đơn giản.',
    role: 'Frontend',
    frontend: ['Tailwind CSS', 'React'],
    backend: 'The Movie Database (TMDB) API',
    source: 'https://github.com/kieuduc123/ProjectMini-Movies',
    preview: 'https://projectmini-movies.netlify.app/',
    // video: 'https://youtu.be/EwX2gFZFobA',
    tags: [
      'git',
      'ui / ux',
      'vitejs',
      'taiLwind css',
      'responsive',
      'web api',
      'SWR',
      'movie',
    ],
  },
  {
    id: 3,
    thumbUrl: [shoes1, shoes2, shoes3],

    date: '29/09/2023 - 02/10/2023',
    title: 'Shoes Landing Page',
    description:
      'Sử dụng TaiLwind css và React cho giao diện người dùng, tạo ra một trang web giới thiệu sản phẩm giày .',
    role: 'Frontend',
    frontend: ['Tailwind CSS', 'React'],
    backend: 'không',
    source: 'https://github.com/kieuduc123/Project-ASP-React',
    preview: 'https://shop-shose.netlify.app//',
    video: 'không',
    tags: [
      'git',
      'ui / ux',
      'react',
      'taiLwind css',
      'shop shoes landing page',
      'responsive',
      'web design',
    ],
  },
  {
    id: 4,
    thumbUrl: [portfolio1, portfolio2, portfolio3, portfolio4],
    date: '2022月3月25日2022月4月1日',
    title: 'My Portfolio',
    description:
      'このWebページです。HTMLとCSS(SASS),ReactJSを使用し、シングルページアプリケーションに仕上げました。これまでに手がけた制作物、身につけたスキルをまとめています。',
    role: 'Frontend',
    frontend: ['SCSS', 'React'],
    backend: 'なし',
    source: 'https://github.com/kieuduc123/profile',
    preview: 'https://projects-profiles.netlify.app/',
    video: 'không',
    tags: [
      'react',
      'scss',
      'ui/ux',
      'responsive',
      'animation',
      'portfolio',
      'web design',
    ],
  },
  {
    id: 5,
    thumbUrl: [pmc1, pmc2, pmc3, pmc4, pmc5, pmc6, pmc7],
    date: '13/12/2023 - 13/01/2024',
    title: 'Công ty thuốc',
    description:
      'Một trang web về sản phẩm của công ty thuốc cung cấp dịch vụ khám, tìm kiếm thuốc, xem thông tin thuốc, đặt hàng thuốc, xem thông tin công ty, liên hệ công ty.',
    role: 'Frontend',
    frontend: ['Bootstrap', 'React'],
    backend: 'không',
    source: 'https://github.com/kieuduc123/project-pharmacy',
    preview: 'https://congtythuoc.netlify.app/',
    video: 'không',
    tags: [
      'react',
      'bootstrap',
      'responsive',
      'google authenticator',
      'axios',
      'web api',
    ],
  },
  {
    id: 6,
    thumbUrl: [vetc1, vetc2, vetc3, vetc4, vetc5, vetc6],

    date: '24/07/2023 - 11/08/2023',
    title: 'VETC',
    description:
      'Một trang web về sản phẩm của công ty VETC cung cấp dịch vụ thu phí tự động không dừng tại các trạm thu phí trên các tuyến đường quốc lộ và cao tốc tại Việt Nam.',
    role: 'Frontend',
    frontend: ['HTML', 'CSS', 'Javascript', 'Jquery'],
    backend: 'không',
    source: 'https://github.com/kieuduc123/Project-VETC',
    preview: 'https://vetcvn.netlify.app/',
    // video: 'https://youtu.be/kvvyQNWTAMQ',
    tags: [
      'html',
      'css',
      'javascript',
      'jquery',
      'bootstrap',
      'ui/ux',
      'responsive',
      'animate',
    ],
  },
  {
    id: 7,
    thumbUrl: [bvm1, bvm2, bvm3, bvm4, bvm5, bvm6],
    date: '20/07/2023 - 04/08/2023',
    title: 'Bệnh Viện Mắt HN2',
    description:
      'Một trang web "Bệnh viện Mắt Hà Nội 2" cung cấp các dịch vụ khám và điều trị các bệnh về mắt, phẫu thuật mắt, và chăm sóc sức khỏe mắt chuyên sâu. Bệnh viện áp dụng công nghệ hiện đại và có đội ngũ bác sĩ giàu kinh nghiệm. ',
    role: 'Frontend',
    frontend: ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'JQuery'],
    backend: 'không',
    source: 'https://github.com/kieuduc123/Project-BVM',
    preview: 'https://project-bvm.netlify.app/',
    video: 'không',
    tags: [
      'psd --> html',
      'css',
      'javascript',
      'jquery',
      'responsive',
      'bootstrap',
    ],
  },
];

const Portfolio: React.FC = () => {
  return (
    <Fragment>
      <div className="slide"></div>
      <div className="section portfolio mb-3" data-aos="fade-up">
        <PageHeader white="my" yellow="portfolio" titleBg="works" />
        <div className="container">
          <Tabs className="tab" defaultIndex={0}>
            <TabList className="tab__nav">
              <Tab className="tab__nav-item">ALL</Tab>
              <Tab className="tab__nav-item">CSS/JAVASCRIPT</Tab>
              <Tab className="tab__nav-item">REACT</Tab>
              <Tab className="tab__nav-item">API</Tab>
            </TabList>
            <TabPanel className="tab__panel">
              {portfolio.map((item, i) => (
                <PortfolioCard item={item} id={item.id} key={i} />
              ))}
            </TabPanel>
            <TabPanel className="tab__panel">
              {portfolio
                .filter(item => item.tags.includes('javascript'))
                .map((filteredItem, i) => (
                  <PortfolioCard
                    item={filteredItem}
                    id={filteredItem.id}
                    key={i}
                  />
                ))}
            </TabPanel>
            <TabPanel className="tab__panel">
              {portfolio
                .filter(item => item.tags.includes('react'))
                .map((filteredItem, i) => (
                  <PortfolioCard
                    item={filteredItem}
                    id={filteredItem.id}
                    key={i}
                  />
                ))}
            </TabPanel>
            <TabPanel className="tab__panel">
              {portfolio
                .filter(item => item.tags.includes('web api'))
                .map((filteredItem, i) => (
                  <PortfolioCard
                    item={filteredItem}
                    id={filteredItem.id}
                    key={i}
                  />
                ))}
            </TabPanel>
          </Tabs>
        </div>
      </div>
      {portfolio.map((item: any, i: any) => (
        <PortfolioDetail item={item} id={item.id} key={i} />
      ))}
    </Fragment>
  );
};

export default Portfolio;
