import React, { Component } from "react";
import Card from "./components/Card";
import products from "./data/product";

class App extends Component {
  render() {
    return (
      <div className="container">
        <p className="h1 text-center my-5">Product List</p>
        <div className="row g-4">
          {products.map((item, i) => {
            return (
              <Card
                key={i}
                photo={item.photo}
                title={item.title}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
