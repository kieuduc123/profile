import "./info.scss";
import Button from "../Button/Button";

const info = {
  firstName: "Kieu",
  lastName: "Duc",
  birthday: "23 years old",
  sex: "Male",
  nation: "Vietnam",
  address: "Ha Noi",
  phone: "0394953305",
  email: "kieutrungduc.info@gmail.com",
  facebook: "bit.ly/kieuduc",
  git: "https://github.com/kieuduc123",
  language: "Vietnamese, Japanese",
};

const card = [
  {
    title: "7",
    text: "Personal",
    span: "Projects",
  },
  {
    title: "1",
    text: "Years of",
    span: "Programming",
  },
];

const Info = () => {
  return (
    <div className="info">
      <div className="info__basic" data-aos="fade-up-right">
        <h3>Basic Information</h3>
        <ul className="info-list">
          <li>
            <span>First Name: </span>
            {info.firstName}
          </li>
          <li>
            <span>Last Name: </span>
            {info.lastName}
          </li>
          <li>
            <span>Date of Birth: </span>
            {info.birthday}
          </li>
          <li>
            <span>Gender: </span>
            {info.sex}
          </li>
          <li>
            <span>Nationality: </span>
            {info.nation}
          </li>
          <li>
            <span>Current Address: </span>
            {info.address}
          </li>
          <li>
            <span>Phone Number: </span>
            {info.phone}
          </li>
          <li>
            <span>Facebook: </span>
            {info.facebook}
          </li>
          <li>
            <span>Languages: </span>
            {info.language}
          </li>
          <li>
            <span>Email: </span>
            {info.email}
          </li>
        </ul>
        <Button>
          <a
            target='_blank'
            href='https://bit.ly/cv_duc '
            rel="noopener"
            download
          >
            <span className="btn-text">Download CV</span>
            <span className="btn-icon">
              <i className="bx bxs-download"></i>
            </span>
          </a>
        </Button>
      </div>
      <div className="info__more" data-aos="fade-up-left">
        {card.map((item, i) => (
          <div className="info__more__card" key={i}>
            <h3>
              {item.title}
              <i className="bx bx-plus bx-rotate-90"></i>
            </h3>
            <p>
              {item.text} <span>{item.span}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
