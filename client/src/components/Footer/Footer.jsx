import React from "react";
import payment from '../../images/payment.png'
import './footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, totam
            sapiente doloremque aliquid quibusdam voluptates corporis fuga nemo
            nostrum obcaecati corrupti tenetur facilis assumenda optio. Corporis
            commodi aperiam ut architecto.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, totam
            sapiente doloremque aliquid quibusdam voluptates corporis fuga nemo
            nostrum obcaecati corrupti tenetur facilis assumenda optio. Corporis
            commodi aperiam ut architecto.
          </span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className="logo"> Lamastore </span>
          <span className="copyright">Copyright 2023. All rights Reserved</span>
        </div>
        <div className="right">
          <img src={payment} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
