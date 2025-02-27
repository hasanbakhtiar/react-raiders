import React, { Component } from "react";
import AOS from "aos";
import Counter from "./Counter";

class Card extends Component {

  constructor() {
    super();
    AOS.init();
  }

  render() {
    const { img, title, price, stock } = this.props;
    return (
      <div className="col-12 col-sm-6 col-md-3" data-aos="flip-left">
        <div className="card">
          <img
            height={300}
            style={{ objectFit: "contain" }}
            src={img}
            className="card-img-top"
            alt={title}
          />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0, 10)}...</h5>
            <p className="card-text">${price}</p>
            <Counter stock={stock}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
