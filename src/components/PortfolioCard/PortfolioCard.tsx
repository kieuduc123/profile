import './portfolio-card.scss';

interface PortfolioItem {
  title: string;
  thumbUrl: string[];
}

interface Props {
  item: PortfolioItem;
  id: string | number;
}

const PortfolioCard: React.FC<Props> = ({ item, id }) => {
  const handleClick = () => {
    const detailElement = document.querySelector(`#portfolio-detail-${id}`) as HTMLElement;
    if (detailElement) {
      detailElement.classList.add('active');
    }
    document.body.classList.add('hide-scrolling');
  };

  return (
    <div className="portfolio-card" onClick={handleClick}>
      <div className="bg-wrap" style={{ backgroundImage: `url(${item.thumbUrl[0]})` }}></div>
      <h3>{item.title}</h3>
    </div>
  );
};

export default PortfolioCard;
