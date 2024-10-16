import React from 'react';

function Footer(props) {
  return (
    <div>
      <footer className="footer-area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 single-footer-widget">
              <h4>Giới thiệu về Eiser Shop</h4>
              <ul>
                <li><a href="#">Quy chế hoạt động</a></li>
                <li><a href="#">Hợp tác với Eiser Shop</a></li>
                <li><a href="#">Phụ trách nội dung</a></li>
                <li><a href="#">Liên hệ</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Tin Tức</h4>
              <ul>
                <li><a href="#">Tuyển dụng</a></li>
                <li><a href="#">Thương hiệu cá nhân </a></li>
                <li><a href="#">Tuyển dụng</a></li>
                <li><a href="#">Điều khoản dịch vụ</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 single-footer-widget">
              <h4>Hỗ trợ khách hàng</h4>
              <ul>
                <li><a href="#">Chính sách bán hàng</a></li>
                <li><a href="#">Chính sách bảo hành</a></li>
                <li><a href="#">Chính sách giao hàng</a></li>
                <li><a href="#">Chính sách thanh toán</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 single-footer-widget">
              <h4>Chính sách mua hàng</h4>
              <ul>
                <li><a href="#">Điều khoản dịch vụ</a></li>
                <li><a href="#">Giải quyết tranh chấp</a></li>
                <li><a href="#">Quyền lợi thành viên</a></li>
                <li><a href="#">Hướng dẫn mua hàng trả góp</a></li>
              </ul>
            </div>

          </div>
          
        </div>
      </footer>

    </div>
  );
}

export default Footer;