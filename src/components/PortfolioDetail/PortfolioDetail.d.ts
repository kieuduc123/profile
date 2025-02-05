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
}
interface Props {
    item: PortfolioItem;
    id: string | number;
}
declare const PortfolioDetail: React.FC<Props>;
export default PortfolioDetail;
