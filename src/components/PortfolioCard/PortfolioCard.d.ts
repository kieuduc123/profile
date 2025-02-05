import './portfolio-card.scss';
interface PortfolioItem {
    title: string;
    thumbUrl: string[];
}
interface Props {
    item: PortfolioItem;
    id: string | number;
}
declare const PortfolioCard: React.FC<Props>;
export default PortfolioCard;
