import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from 'react';
import './portfolio.scss';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import PageHeader from '../../components/PageHeader/PageHeader';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
import PortfolioDetail from '../../components/PortfolioDetail';
import { portfolio1, portfolio2, portfolio3, portfolio4, music1, music2, theater1, theater2, theater3, foodie1, foodie2, foodie3, foodie4, foodie5, ec1, ec2, ec3, ec4, game1, game2, game3, game4, game5, movie1, movie2, movie3, movie4, movie5, } from '../../assets/portfolio/portfolio';
const portfolio = [
    {
        id: 1,
        thumbUrl: [foodie1, foodie2, foodie3, foodie4, foodie5],
        date: '06-06-2022- 07-07-2022',
        title: 'ManproShop',
        description: 'abc',
        role: 'フロントエンド',
        frontend: ['CSS', 'Bootstrap', 'Javascript'],
        backend: 'Java, Spring Boot, MySQL',
        source: 'oooo',
        preview: 'https://manproshop.netlify.app/',
        video: 'https://www.youtube.com/watch?v=rx-fLzNr1eM',
        tags: [
            'git',
            'ui / ux',
            'css',
            'bootstrap',
            'responsive',
            'javascript',
            'web api',
            'web app',
            'food',
            'travel',
        ],
    },
    {
        id: 2,
        thumbUrl: [movie1, movie2, movie3, movie4, movie5],
        date: '2022年3月4日ー2022年3月14日',
        title: 'Movie App',
        description: 'フロントエンドはSCSSとReact,バックエンドはTMDB APIを利用して、動画配信サービスのネットフリックスのようなWEBサイトを作成しました。',
        role: 'フロントエンド',
        frontend: ['SCSS', 'React'],
        backend: 'The Movie Database (TMDB) API',
        source: 'https://github.com/LaPhuocLoc/movie-app',
        preview: 'https://projectmini-movies.netlify.app/',
        // video: 'https://youtu.be/EwX2gFZFobA',
        tags: [
            'react',
            'scss',
            'responsive',
            'web api',
            'axios',
            'movie',
            'web app',
        ],
    },
    {
        id: 3,
        thumbUrl: [game1, game2, game3, game4, game5],
        date: '2022年2月2日ー2022年2月16日',
        title: 'Game Landing Page',
        description: 'SCSSやReactJSを利用し、レスポンシブのゲームランディングページを作成しました。',
        role: 'フロントエンド',
        frontend: ['SCSS', 'React'],
        backend: 'なし',
        source: 'https://github.com/LaPhuocLoc/landing-page',
        preview: 'https://congtythuoc.netlify.app/',
        video: 'https://youtu.be/Agv30p2llrU',
        tags: [
            'react',
            'scss',
            'vitejs',
            'animation',
            'game landing page',
            'web design',
        ],
    },
    {
        id: 4,
        thumbUrl: [portfolio1, portfolio2, portfolio3, portfolio4],
        date: '2022月3月25日2022月4月1日',
        title: 'My Portfolio',
        description: 'このWebページです。HTMLとCSS(SASS),ReactJSを使用し、シングルページアプリケーションに仕上げました。これまでに手がけた制作物、身につけたスキルをまとめています。',
        role: 'フロントエンド',
        frontend: ['SCSS', 'React'],
        backend: 'なし',
        source: 'https://github.com/LaPhuocLoc/react-portfolio',
        // preview: 'https://rokku.netlify.app/',
        video: 'なし',
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
        thumbUrl: [ec1, ec2, ec3, ec4],
        date: '2022年4月ー未定',
        title: 'E-Commerce Store(未完成)',
        description: 'SCSSやReactJSを利用し、レスポンシブのWEBデザインのECサイトを作成しています。未完成なので、バックエンドはまだ何もありません。',
        role: 'フロントエンド',
        frontend: ['SCSS', 'Ant Design', 'React'],
        backend: 'なし',
        source: 'https://github.com/LaPhuocLoc/commerce-app',
        // preview: 'https://rokku-commerce.netlify.app/',
        video: 'https://youtu.be/fJ6J75EB3dw',
        tags: ['react', 'scss', 'responsive', 'ant design', 'ecommerce', 'web app'],
    },
    {
        id: 6,
        thumbUrl: [music1, music2],
        date: '2022年1月11日ー2022年1月17日',
        title: 'Music Player',
        description: 'CSSとJavascriptを用いてミュージックプレイヤーアプリを作成しました。',
        role: 'フロントエンド',
        frontend: ['CSS', 'Javascript'],
        backend: 'なし',
        source: 'https://github.com/LaPhuocLoc/Mp3Player',
        // preview: 'https://rokku-music.netlify.app/',
        video: 'https://youtu.be/kvvyQNWTAMQ',
        tags: ['javascript', 'css', 'ui/ux', 'music app'],
    },
    {
        id: 7,
        thumbUrl: [theater1, theater2, theater3],
        date: '2022年1月17日ー2022年1月19日',
        title: 'Theater Homepage',
        description: 'CSSやJavascript,Bootstrapを用いて映画館情報のレスポンシブのWEBサイトを作成しました。',
        role: 'フロントエンド',
        frontend: ['CSS', 'Bootstrap', 'Javascript'],
        backend: 'なし',
        source: 'https://github.com/LaPhuocLoc/Movie-Theater',
        // preview: 'https://rokku-theater.netlify.app/',
        video: 'https://youtu.be/2MY77Glw-3Q',
        tags: [
            'css',
            'javascript',
            'responsive',
            'bootstrap',
            'movie',
            'web design',
        ],
    },
];
const Portfolio = () => {
    return (_jsxs(Fragment, { children: [_jsx("div", { className: "slide" }), _jsxs("div", { className: "section portfolio mb-3", "data-aos": "fade-up", children: [_jsx(PageHeader, { white: "my", yellow: "portfolio", titleBg: "works" }), _jsx("div", { className: "container", children: _jsxs(Tabs, { className: "tab", defaultIndex: 0, children: [_jsxs(TabList, { className: "tab__nav", children: [_jsx(Tab, { className: "tab__nav-item", children: "ALL" }), _jsx(Tab, { className: "tab__nav-item", children: "CSS/JAVASCRIPT" }), _jsx(Tab, { className: "tab__nav-item", children: "SCSS/REACT" }), _jsx(Tab, { className: "tab__nav-item", children: "API" })] }), _jsx(TabPanel, { className: "tab__panel", children: portfolio.map((item, i) => (_jsx(PortfolioCard, { item: item, id: item.id }, i))) }), _jsx(TabPanel, { className: "tab__panel", children: portfolio
                                        .filter(item => item.tags.includes('javascript'))
                                        .map((filteredItem, i) => (_jsx(PortfolioCard, { item: filteredItem, id: filteredItem.id }, i))) }), _jsx(TabPanel, { className: "tab__panel", children: portfolio
                                        .filter(item => item.tags.includes('react'))
                                        .map((filteredItem, i) => (_jsx(PortfolioCard, { item: filteredItem, id: filteredItem.id }, i))) }), _jsx(TabPanel, { className: "tab__panel", children: portfolio
                                        .filter(item => item.tags.includes('web api'))
                                        .map((filteredItem, i) => (_jsx(PortfolioCard, { item: filteredItem, id: filteredItem.id }, i))) })] }) })] }), portfolio.map((item, i) => (_jsx(PortfolioDetail, { item: item, id: item.id }, i)))] }));
};
export default Portfolio;
