import Gallery from '../Gallery/Gallery';
import './portfolio-detail.scss';

interface PortfolioItem {
  title: string;
  description: string;
  date: string;
  role: string;
  frontend: string[];
  backend: string;
  tags: string[];
  source: string;
  preview: string;
  video: string;
  thumbUrl: any[];
}

interface Props {
  item: PortfolioItem;
  id: string | number;
}

const PortfolioDetail: React.FC<Props> = ({ item, id }) => {
  const handleClose = () => {
    const detailElement = document.querySelector(`#portfolio-detail-${id}`) as HTMLElement;
    if (detailElement) {
      detailElement.classList.remove('active');
    }
    document.body.classList.remove('hide-scrolling');
  };

  return (
    <div className="portfolio-detail overlay" id={`portfolio-detail-${id}`}>
      <div className="portfolio-detail__inner">
        <div className="portfolio-detail__content">
          <div className="portfolio-detail__content-left">
            <h3><span>{item.title}</span></h3>
            <Gallery item={item} />
          </div>

          <div className="portfolio-detail__content-right">
            <h3><span>Mô tả</span></h3>
            <p>{item.description}</p>
            <ul>
              <li> Created - <span>{item.date}</span> </li>
              <li> Role - <span>{item.role}</span> </li>
              <li> Frontend - <span>{item.frontend.join(", ")}</span> </li>
              {/*<li> Backend - <span>{item.backend}</span> </li>*/}
              <li> Tags - <span style={{ textTransform: "lowercase" }}>{item.tags.join(' / ')}</span> </li>
              <li> Source - <a href={item.source} target="_blank" rel="noopener noreferrer">{item.source}</a> </li>
              <li> Demo - <a href={item.preview} target="_blank" rel="noopener noreferrer">{item.preview}</a> </li>
              <li> Preview video - <a href={item.video} target="_blank" rel="noopener noreferrer">{item.video}</a> </li>
            </ul>
          </div>

          <div className="close-btn" onClick={handleClose}>
            <i className='bx bx-x'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
