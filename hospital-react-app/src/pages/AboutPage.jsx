import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <>
      <section id="intro" style={{ backgroundColor: '#E8F0F1' }}>
        <div className="container">
          <div className="banner-content padding-large">
            <h1 className="display-3 fw-bold text-dark">Về Chúng Tôi</h1>
            <span className="item"><Link to="/" className="">Trang chủ</Link></span> &nbsp; <span className="">/</span> &nbsp; <span
              className=" item">Về Chúng Tôi</span>
          </div>
        </div>
      </section>

      <section id="about-us" className="mt-5 pt-5">
        <div className="vertical-element">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-6">
                <div className="image-holder">
                  <img src="/images/post-item3.jpg" alt="about-us" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="section-element p-5 ps-0">
                  <h2 className="mb-3">Chúng tôi là ai?</h2>
                  <p>Bệnh viện của chúng tôi tự hào là một trong những cơ sở y tế hàng đầu, cung cấp dịch vụ chăm sóc sức khỏe toàn diện và chất lượng cao. Với đội ngũ y bác sĩ chuyên môn cao, giàu kinh nghiệm và tận tâm, cùng hệ thống trang thiết bị y tế hiện đại, chúng tôi cam kết mang đến cho bệnh nhân những phương pháp chẩn đoán và điều trị tiên tiến nhất.</p>
                  <p>Sứ mệnh của chúng tôi là chăm sóc và bảo vệ sức khỏe cộng đồng, không ngừng nỗ lực cải tiến chất lượng dịch vụ và mang lại sự hài lòng tối đa cho người bệnh. Chúng tôi luôn lắng nghe, thấu hiểu và đồng hành cùng bệnh nhân trên con đường tìm lại sức khỏe.</p>
                  <Link to="/booking" className="btn btn-medium btn-primary btn-pill text-uppercase mt-4">Đặt Lịch Hẹn</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;