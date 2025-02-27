import React, { Component } from "react";
import Card from "./Card";
import Preloader from "./Preloader";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      productItems: [],
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          productItems: data,
        });
      });
  }

  render() {
    return (
      <>
      <p className="h1 mb-5 text-center text-light" >Product text</p>
        <div className="row g-3">
          {this.state.productItems.length===0?<Preloader/>:this.state.productItems.map((item, i) => (
            <Card
              key={i}
              img={item.image}
              title={item.title}
              price={item.price}
              stock={item.id}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Products;
