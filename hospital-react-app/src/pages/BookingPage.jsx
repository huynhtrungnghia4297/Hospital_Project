import React from 'react';
import { Link } from 'react-router-dom';
import SubscribeSection from '../components/SubscribeSection';

const BookingPage = () => {
    return (
        <React.Fragment>
            <section id="intro" style={{ backgroundColor: '#E8F0F1' }}>
                <div className="container">
                    <div className="banner-content padding-large">
                        <h1 className="display-3 fw-bold text-dark">Đặt Lịch Hẹn</h1>
                        <span className="item"><Link to="/" className="">Trang chủ</Link></span> &nbsp; <span className="">/</span> &nbsp;
                        <span className=" item">Đặt Lịch Hẹn</span>
                    </div>
                </div>
            </section>

            <section id="book-appointment" className="padding-large mb-0">
                <div className="container">
                    <div className="row">
                        <div className="display-header">
                            <h2 className="display-5 fw-bold text-dark">Đặt Lịch Hẹn Qua Tổng Đài <span
                                className="text-primary-500">19001566</span></h2>
                        </div>
                        <form className="contact-form d-flex flex-wrap mt-5 gx-1">
                            <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <select className="form-select focus-transparent border border-radius-10 ps-4" aria-invalid="false"
                                    name="choose">
                                    <option value="Chọn Chuyên Khoa">Chọn Chuyên Khoa</option>
                                    <option value="Khoa Vật lý trị liệu">Khoa Vật lý trị liệu</option>
                                    <option value="Khoa Răng hàm mặt">Khoa Răng hàm mặt</option>
                                    <option value="Khoa Tai mũi họng">Khoa Tai mũi họng</option>
                                    <option value="Khoa Dược">Khoa Dược</option>
                                    <option value="Khoa Điều dưỡng">Khoa Điều dưỡng</option>
                                </select>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <select className="form-select focus-transparent border ps-4 border-radius-10 w-100"
                                    aria-invalid="false" name="choose">
                                    <option value="Chọn Bác Sĩ">Chọn Bác Sĩ</option>
                                    <option value="Nguyễn Văn An">Nguyễn Văn An</option>
                                    <option value="Trần Thị Bích">Trần Thị Bích</option>
                                    <option value="Lê Văn Hùng">Lê Văn Hùng</option>
                                </select>
                            </div>

                            <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <div className="input-group date" id="datepicker">
                                    <input type="date" id="start" name="appointment" min="2018-01-01" max="2025-12-31"
                                        placeholder="Chọn ngày"
                                        className="bg-transparent ps-4 border border-radius-10 position-relative w-100" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <div className="input-group time" id="timepicker">
                                    <input type="time" id="time" name="appointment" min="09:00" max="18:00"
                                        className="bg-transparent ps-4 border border-radius-10 position-relative w-100" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <select className="form-select focus-transparent border ps-4 border-radius-10 " aria-invalid="false"
                                    name="choose">
                                    <option>Chọn gói dịch vụ (tùy chọn)</option>
                                    <option value="1">Tiêu chuẩn</option>
                                    <option value="2">Cơ bản</option>
                                    <option value="3">Cao cấp</option>
                                    <option value="4">Toàn diện</option>
                                </select>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <input type="text" name="phone" placeholder="Số điện thoại"
                                    className="border ps-4 border-radius-10 w-100" />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <input type="text" name="name" placeholder="Họ và tên" className="border ps-4 border-radius-10 w-100" />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <input type="email" name="email" placeholder="E-Mail" className="border ps-4 border-radius-10 w-100" />
                            </div>

                            <div className="col-lg-12 mb-3">
                                <textarea placeholder="Nhập lời nhắn của bạn ở đây"
                                    className="form-control ps-3 bg-transparent ps-4 border-radius-10" rows="8"></textarea>
                            </div>
                        </form>
                    </div>
                    <Link to="#" className="btn btn-medium btn-primary btn-pill mt-3 text-uppercase">Đặt Lịch Hẹn</Link>
                </div>
            </section>

            <section id="price">
                <div className="container pt-5">
                    <h2 className=" fw-bold display-4 mb-5">Bảng giá dịch vụ</h2>
                    <div className="row py-4">
                        <div className="col-lg-3 pb-4">
                            <div className="py-5 plan-post text-center">
                                <h6 className="mb-3">Tiêu chuẩn</h6>
                                <h2 className="heading-color display-5 fw-bold mb-5">1,425,000 VNĐ</h2>
                                <div className="price-option">
                                    <p><span className="price-tick">✓</span> Khám tổng quát</p>
                                    <p><span className="price-tick">✓</span> Xét nghiệm cơ bản</p>
                                    <p><span className="price-tick">✓</span> Tư vấn sức khỏe</p>
                                    <p><span className="price-tick">✓</span> Chụp X-quang</p>
                                </div>
                                <Link to="/booking" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Đặt ngay</Link>
                            </div>
                        </div>

                        <div className="col-lg-3 pb-4">
                            <div className="py-5 plan-post recommend-price text-center">
                                <h6 className="text-white mb-3">Cơ bản</h6>
                                <h2 className="text-white display-5 fw-bold mb-5">1,990,000 VNĐ</h2>
                                <div className="price-option">
                                    <p className="text-white"><span className="price-tick text-white">✓</span> Gói Tiêu chuẩn</p>
                                    <p className="text-white"><span className="price-tick text-white">✓</span> Siêu âm ổ bụng</p>
                                    <p className="text-white"><span className="price-tick text-white">✓</span> Điện tâm đồ</p>
                                    <p className="text-white"><span className="price-tick text-white">✓</span> Xét nghiệm máu</p>
                                    <p className="text-white"><span className="price-tick text-white">✓</span> Tư vấn chuyên sâu</p>
                                </div>
                                <Link to="/booking" className="btn btn-primary text-black mt-3 px-4 py-3 mx-2"
                                    style={{ background: 'white' }}>Đặt ngay</Link>
                            </div>
                        </div>

                        <div className="col-lg-3 pb-4">
                            <div className="py-5 plan-post text-center">
                                <h6 className="mb-3">Cao cấp</h6>
                                <h2 className="heading-color display-5 fw-bold mb-5">2,590,000 VNĐ</h2>
                                <div className="price-option">
                                    <p><span className="price-tick">✓</span> Gói Cơ bản</p>
                                    <p><span className="price-tick">✓</span> Chụp CT-Scanner</p>
                                    <p><span className="price-tick">✓</span> Tầm soát ung thư</p>
                                    <p><span className="price-tick">✓</span> Xét nghiệm nội tiết</p>
                                    <p><span className="price-tick">✓</span> Khám chuyên khoa</p>
                                    <p><span className="price-tick">✓</span> Theo dõi sức khỏe</p>
                                </div>
                                <Link to="/booking" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Đặt ngay</Link>
                            </div>
                        </div>

                        <div className="col-lg-3 pb-4">
                            <div className="py-5 plan-post text-center">
                                <h6 className="mb-3">Toàn diện</h6>
                                <h2 className="heading-color display-5 fw-bold mb-5">4,760,000 VNĐ</h2>
                                <div className="price-option">
                                    <p><span className="price-tick">✓</span> Gói Cao cấp</p>
                                    <p><span className="price-tick">✓</span> Chụp MRI</p>
                                    <p><span className="price-tick">✓</span> Xét nghiệm gen</p>
                                    <p><span className="price-tick">✓</span> Tầm soát đột quỵ</p>
                                    <p><span className="price-tick">✓</span> Tư vấn dinh dưỡng</p>
                                    <p><span className="price-tick">✓</span> Chăm sóc tại nhà</p>
                                    <p><span className="price-tick">✓</span> Bác sĩ riêng</p>
                                </div>
                                <Link to="/booking" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Đặt ngay</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="faqs" className="padding-large">
                <div className="container">
                    <div className="row">
                        <div className="display-header mb-5">
                            <h2 className="display-5 fw-bold text-center text-dark">Câu hỏi thường gặp</h2>
                        </div>
                        <div className="accordion" id="accordion">
                            <div className="accordion-item border-0 py-3">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button fs-4 fw-bold text-dark bg-transparent focus-transparent text-capitalize shadow-none"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                        aria-expanded="true" aria-controls="collapseOne">
                                        Tại sao nên tin tưởng vào dịch vụ chăm sóc sức khỏe của chúng tôi?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse border-0 collapse show"
                                    data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        <p>Chúng tôi có đội ngũ y bác sĩ giàu kinh nghiệm, trang thiết bị hiện đại và quy trình khám chữa bệnh chuyên nghiệp, luôn đặt lợi ích của bệnh nhân lên hàng đầu.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-0 py-3">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button fs-4 fw-bold text-dark bg-transparent collapsed focus-transparent text-capitalize shadow-none"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                        aria-expanded="false" aria-controls="collapseTwo">
                                        Chúng tôi có nhận được cập nhật về sức khỏe sau phẫu thuật không?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        <p>Có, bác sĩ sẽ theo dõi và cập nhật tình hình sức khỏe của bạn thường xuyên sau phẫu thuật để đảm bảo quá trình hồi phục tốt nhất.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-0 py-3">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button fs-4 fw-bold text-dark bg-transparent collapsed focus-transparent text-capitalize shadow-none"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                        aria-expanded="false" aria-controls="collapseThree">
                                        Chi phí cho một lần khám tổng quát là bao nhiêu?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        <p>Chi phí khám tổng quát phụ thuộc vào danh mục khám bạn chọn. Vui lòng liên hệ hotline 1900 1566 để được tư vấn chi tiết về các gói khám và chi phí.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-0 py-3">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button fs-4 fw-bold text-dark bg-transparent collapsed focus-transparent text-capitalize shadow-none"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                        aria-expanded="false" aria-controls="collapseFour">
                                        Tôi có thể hủy lịch hẹn không?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        <p>Có, bạn có thể hủy hoặc thay đổi lịch hẹn. Vui lòng báo trước cho chúng tôi ít nhất 24 giờ để chúng tôi có thể sắp xếp cho các bệnh nhân khác.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SubscribeSection />
        </React.Fragment>
    );
};

export default BookingPage;