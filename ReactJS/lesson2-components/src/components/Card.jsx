import React, { Component } from "react";
class Card extends Component {
  render() {
    return (
      <div className="col-12 col-sm-6 col-md-4">
        <div className="card">
          <img
            style={{ height: "200px", objectFit: "contain" }}
            src={this.props.photo}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.price}$</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
