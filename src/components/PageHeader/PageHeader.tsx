import './page-header.scss';

interface PageHeaderProps {
  white: string;
  yellow: string;
  titleBg?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const { white, yellow, titleBg } = props;
  return (
    <div className="page-header">
      <h1>
        <span>{white}</span> {yellow}
      </h1>
      {titleBg && <span>{titleBg}</span>}
    </div>
  );
};

export default PageHeader;
