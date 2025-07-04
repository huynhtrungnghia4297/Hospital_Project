import React from 'react';
import { Link } from 'react-router-dom';

export default function DepartmentsPage() {
  return (
    <React.Fragment>
      {/* Banner Section */}
      <section id="intro" style={{ backgroundColor: '#E8F0F1' }}>
        <div className="container">
          <div className="banner-content padding-large">
            <h1 className="display-3 fw-bold text-dark">Chuyên Khoa</h1>
            <span className="item"><Link to="/" className="">Trang chủ</Link></span> &nbsp; <span className="">/</span> &nbsp;
            <span className="item">Chuyên Khoa</span>
          </div>
        </div>
      </section>

      <div className="post-wrap py-5 no-padding-bottom">
        <div className="container">
          <div className="row flex-md-row-reverse g-5 mt-4">
            <main className="post-grid col-md-9">
              <div className="row">
                <article className="post-item">
                  <h2 className="display-5 fw-bold pb-5 text-dark">Phân Tích Xét Nghiệm</h2>
                  <p>Tại khoa xét nghiệm của chúng tôi, chúng tôi cung cấp một loạt các dịch vụ phân tích để hỗ trợ chẩn đoán và theo dõi bệnh. Đội ngũ kỹ thuật viên giàu kinh nghiệm cùng hệ thống máy móc hiện đại đảm bảo kết quả chính xác và kịp thời.</p>
                  <p>Chúng tôi thực hiện các xét nghiệm từ cơ bản đến chuyên sâu, bao gồm huyết học, sinh hóa, miễn dịch và vi sinh, đáp ứng mọi nhu cầu của bệnh nhân và bác sĩ.</p>
                  <div className="hero-image mt-5">
                    <img src="/images/blog-large1.jpg" alt="single-post" className="img-fluid" />
                  </div>
                  <div className="post-content py-5">
                    <div className="post-description">
                      <blockquote>"Sự chính xác trong từng kết quả xét nghiệm là nền tảng cho một chẩn đoán đúng và một phác đồ điều trị hiệu quả. Chúng tôi cam kết mang lại sự tin cậy tuyệt đối cho bệnh nhân và đồng nghiệp."</blockquote>
                      <h2 className="my-5">Chẩn Đoán và Điều Trị</h2>
                      <div className="row">
                        <div className="col-md-6">
                          <table className="table mb-5">
                            <thead>
                              <tr>
                                <th scope="col">Chẩn Đoán</th>
                                <th scope="col">Chi Phí</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td scope="row">Nội soi đại tràng</td>
                                <td className="text-primary">6,250,000 VNĐ</td>
                              </tr>
                              <tr>
                                <td scope="row">Nội soi dạ dày</td>
                                <td className="text-primary">5,900,000 VNĐ</td>
                              </tr>
                              <tr>
                                <td scope="row">Xét nghiệm dị ứng</td>
                                <td className="text-primary">3,750,000 VNĐ</td>
                              </tr>
                              <tr>
                                <td scope="row">Chụp CT</td>
                                <td className="text-primary">14,125,000 VNĐ</td>
                              </tr>
                              <tr>
                                <td scope="row">Chụp CT tim</td>
                                <td className="text-primary">7,500,000 VNĐ</td>
                              </tr>
                              <tr>
                                <td scope="row">Xạ hình tuyến cận giáp</td>
                                <td className="text-primary">4,500,000 VNĐ</td>
                              </tr>
                              <tr>
                                <td scope="row">Xạ hình thận với Captopril</td>
                                <td className="text-primary">8,000,000 VNĐ</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="col-md-6">
                          <table className="table mb-5">
                            <thead>
                              <tr>
                                <th scope="col">Điều Trị</th>
                                <th scope="col">Chi Phí</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td scope="row">Nội soi phế quản</td>
                                <td className="text-primary">3,750,000 - 7,500,000 VNĐ</td>
                              </tr>
                              <tr>
                                <td scope="row">Đốt điện tim</td>
                                <td className="text-primary">6,250,000 - 10,000,000 VNĐ</td>
                              </tr>
                              <tr>
                                <td scope="row">Chấn thương thể thao</td>
                                <td className="text-primary">3,750,000 VNĐ</td>
                              </tr>
                              <tr>
                                <td scope="row">Sức khỏe phụ nữ</td>
                                <td className="text-primary">14,125,000 VNĐ</td>
                              </tr>
                              <tr>
                                <td scope="row">Dụng cụ chỉnh hình</td>
                                <td className="text-primary">7,500,000 VNĐ</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <p>Chúng tôi luôn nỗ lực để cung cấp các dịch vụ y tế chất lượng cao với quy trình chuyên nghiệp và minh bạch. Sức khỏe của bạn là ưu tiên hàng đầu của chúng tôi.</p>
                      <h2 className="my-5">Đội Ngũ Bác Sĩ Của Chúng Tôi</h2>
                      <div className="row my-4">
                        <div className="col-md-6">
                          <img src="/images/team-item1.jpg" alt="post-image" className=" img-fluid align-left" />
                          <h5 className=" mt-3">Bác sĩ chuyên khoa giàu kinh nghiệm</h5>
                        </div>
                        <div className="col-md-6">
                          <img src="/images/team-item.jpg" alt="post-image" className=" img-fluid align-right" />
                          <h5 className=" mt-3">Luôn tận tâm vì sức khỏe của bạn</h5>
                        </div>
                      </div>
                      <p>Đội ngũ bác sĩ của chúng tôi không chỉ có chuyên môn cao mà còn luôn lắng nghe và thấu hiểu tâm tư của bệnh nhân. Chúng tôi tin rằng sự kết hợp giữa y học hiện đại và sự chăm sóc tận tình sẽ mang lại kết quả điều trị tốt nhất.</p>
                      <div className="my-5">
                        <h2 className="mb-5">Dịch Vụ Tốt Nhất Của Chúng Tôi</h2>
                        <ul className="inner-list list-unstyled">
                          <li><span className="price-tick">✓</span> Quy trình khám chữa bệnh chuyên nghiệp và hiệu quả.</li>
                          <li><span className="price-tick">✓</span> Trang thiết bị hiện đại, đạt tiêu chuẩn quốc tế.</li>
                          <li><span className="price-tick">✓</span> Đội ngũ y bác sĩ tận tâm, giàu kinh nghiệm.</li>
                          <li><span className="price-tick">✓</span> Cung cấp dịch vụ chăm sóc toàn diện cho bệnh nhân.</li>
                          <li><span className="price-tick">✓</span> Chi phí hợp lý, minh bạch và rõ ràng.</li>
                          <li><span className="price-tick">✓</span> Luôn đặt lợi ích và sức khỏe của bệnh nhân lên hàng đầu.</li>
                        </ul>
                      </div>
                      <p>Sứ mệnh của chúng tôi là mang lại một cuộc sống khỏe mạnh và hạnh phúc hơn cho cộng đồng. Chúng tôi không ngừng cải tiến và nâng cao chất lượng dịch vụ để đáp ứng sự tin tưởng của quý vị.</p>
                    </div>
                  </div>
                </article>
              </div>
            </main>

            <aside className="col-md-3">
              <div className="post-sidebar">
                <div className="widget block-tag border p-3 mb-5">
                  <h5 className="widget-title text-uppercase border-bottom pb-3 mb-3">Đặt Lịch Hẹn</h5>
                  <p>Đặt lịch hẹn ngay hôm nay để được tư vấn và chăm sóc sức khỏe tốt nhất.</p>
                  <div className="btn-book">
                    <Link to="/booking" className="btn btn-medium btn-outline-primary btn-pill text-uppercase px-4 py-3">Đặt Ngay</Link>
                  </div>
                </div>
                <div className="widget sidebar-categories border p-3 mb-5">
                  <h5 className="widget-title text-uppercase border-bottom pb-3 mb-3">Các Chuyên Khoa</h5>
                  <ul className="list-unstyled">
                    <li className="my-2 d-flex align-items-center">
                      <svg width="20" height="20"><use href="#arrow-right"></use></svg>
                      <Link to="/departments" className="item-anchor text-uppercase ps-2">Phân Tích Xét Nghiệm</Link>
                    </li>
                    <li className="my-2 d-flex align-items-center">
                      <svg width="20" height="20"><use href="#arrow-right"></use></svg>
                      <Link to="/departments" className="item-anchor text-uppercase ps-2">Khoa Tim Mạch</Link>
                    </li>
                    <li className="my-2 d-flex align-items-center">
                      <svg width="20" height="20"><use href="#arrow-right"></use></svg>
                      <Link to="/departments" className="item-anchor text-uppercase ps-2">Khoa Phụ Sản</Link>
                    </li>
                    <li className="my-2 d-flex align-items-center">
                      <svg width="20" height="20"><use href="#arrow-right"></use></svg>
                      <Link to="/departments" className="item-anchor text-uppercase ps-2">Khoa Giải Phẫu Bệnh</Link>
                    </li>
                    <li className="my-2 d-flex align-items-center">
                      <svg width="20" height="20"><use href="#arrow-right"></use></svg>
                      <Link to="/departments" className="item-anchor text-uppercase ps-2">Khoa Nhi</Link>
                    </li>
                    <li className="my-2 d-flex align-items-center">
                      <svg width="20" height="20"><use href="#arrow-right"></use></svg>
                      <Link to="/departments" className="item-anchor text-uppercase ps-2">Khoa Thần Kinh</Link>
                    </li>
                  </ul>
                </div>
                <div className="widget sidebar-recent-post mb-5">
                  <h5 className="widget-title text-uppercase border-bottom pb-3 mb-3">Bài Viết Gần Đây</h5>
                  <div className="sidebar-post-item d-flex justify-content-center my-2">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="image-holder mt-1">
                          <Link to="/blog-single"><img src="/images/post-item1.jpg" alt="blog" className="img-fluid" /></Link>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="sidebar-post-content text-uppercase">
                          <div className="post-meta fs-6 text-secondary">
                            <span className="meta-date">11 tháng 7, 2022</span>
                          </div>
                          <h6 className="post-title">
                            <Link to="/blog-single">Làm thế nào để chăm sóc sức khỏe</Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-post-item d-flex justify-content-center my-2">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="image-holder mt-1">
                          <Link to="/blog-single"><img src="/images/post-item2.jpg" alt="blog" className="img-fluid" /></Link>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="sidebar-post-content text-uppercase">
                          <div className="post-meta fs-6 text-secondary">
                            <span className="meta-date">18 tháng 7, 2022</span>
                          </div>
                          <h6 className="post-title">
                            <Link to="/blog-single">Top 10 mẹo cho cuộc sống khỏe mạnh</Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-post-item d-flex justify-content-center my-2">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="image-holder mt-1">
                          <Link to="/blog-single"><img src="/images/post-item3.jpg" alt="blog" className="img-fluid" /></Link>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="sidebar-post-content text-uppercase">
                          <div className="post-meta fs-6 text-secondary">
                            <span className="meta-date">21 tháng 8, 2022</span>
                          </div>
                          <h6 className="post-title">
                            <Link to="/blog-single">Cách tốt nhất để làm sạch răng của bạn</Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}