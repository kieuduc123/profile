import './resume.scss'

const edu = [
  {
    time: 'Tốt nghiệp tháng 7 năm 2019',
    place: 'Trường Cao Đẳng Nghề Việt - Đức Vĩnh Phúc',
    // edu: '高等学校',
    description: 'Tôi bắt đầu quan tâm đến ngành công nghệ thông tin khi cảm thấy niềm vui trong việc giải quyết các bài toán bằng lập trình trong thời gian học cấp ba. Vì muốn học lập trình, tôi đã đến Nhật Bản.'
  },
  {
    time: 'Tháng 8 năm 2019 - tháng 12 năm 2021',
    place: 'Trung Tâm Tiếng Nhật Sunrise - Hà Đông',
    description: 'Từ tháng 8 năm 2019 ,tôi đã học tiếng Nhật tại Trung Tâm Tiếng Nhật Sunrise - Hà Đông, do đại dịch Covid-19, tôi đã rời lịch bay sang tháng 12 năm 2021'
  },
  {
    time: 'Tháng 12 năm 2021 - tháng 6 năm 2022',
    place: 'Trường Nhật ngữ Human Academy cơ sở Osaka',
    description: 'Từ tháng 12 năm 2021 ,tôi đã học tiếng Nhật tại Trường Nhật ngữ Quốc tế Kobe Sumiyoshi, đến tháng 6 năm 2022, tôi đã quay về nước'
  },
  {
    time: 'Tháng 6 năm 2022 - tháng 6 năm 2024',
    place: 'FPT Aptech',
    description: 'Tại trường, tôi học các kiến thức lập trình cơ bản , và nhiều nội dung khác. Ngoài các giờ học chính khóa, tôi cũng tự học thêm các công nghệ IT.'
  },
]
const exp = [
  {
    time: 'Tháng 1 năm 2024 - Hiện Tại',
    place: 'CÔNG TY CỔ PHẦN SIMPLIZE',
    description: 'Tôi đã tham gia vào dự án "Simplize" với vị trí Frontend Developer, dự án này giúp người dùng có thể xem các thông tin về chứng khoán một cách dễ dàng và nhanh chóng.'
  },
]

const Resume = () => {
  return (
    <>
      <h3 className="resume__heading mb-3">
        Educational
      </h3>
      <div className="resume">

        <div className="resume__edu" data-aos="fade-right">
          {edu.map((item, i) => (
            <div className="resume__edu__item mb-3" key={i}>
              <div className="icon">
                <i className='bx bxs-briefcase' ></i>
              </div>
              <span className="time">{item.time}</span>
              <h3>{item.place}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="resume__exp" data-aos="fade-left">
          {exp.map((item, i) => (
            <div className="resume__exp__item mb-3" key={i}>
              <div className="icon">
                <i className='bx bxs-briefcase' ></i>
              </div>
              <span className="time">{item.time}</span>
              <h3>{item.place}  </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Resume