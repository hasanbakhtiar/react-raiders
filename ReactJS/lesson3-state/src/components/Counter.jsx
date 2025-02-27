import React, { Component } from "react";
import Swal from "sweetalert2";

class MyText extends Component {
  constructor() {
    super();
  }

  componentWillUnmount() {
    Swal.fire({
      title: "Element Deleted!",
      icon: "error",
      confirmButtonText: "OK",
    });
  }

  render() {
    return <h1>My text</h1>;
  }
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.state = {
      count: 1,
      price: 2300,
      stock: this.props.stock,
      alert: {
        style: "",
        text: "",
      },
      display: true,
    };
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     Swal.fire({
  //       title: "App Started!",
  //       icon: "info",
  //       confirmButtonText: "OK",
  //     });
  //   }, 3000);
  // }

  //   componentDidUpdate() {
  //     Swal.fire({
  //       title: "App updated",
  //       icon: "info",
  //       confirmButtonText: "OK",
  //     });
  //   }

  increment() {
    if (this.state.stock > this.state.count) {
      this.setState(() => ({
        count: this.state.count + 1,
        alert: {
          style: "",
          text: "",
        },
      }));
    } else {
      Swal.fire({
        title: "Out of stock!",
        icon: "error",
        confirmButtonText: "OK",
      });
      // this.setState(()=>({
      //     alert:{
      //         style:"danger",
      //         text:"Out of stock",
      //         aosType:"fade-up"
      //     }
      // }))
    }
  }

  decrement = () => {
    if (this.state.count > 1) {
      this.setState(() => ({
        count: this.state.count - 1,
        alert: {
          style: "",
          text: "",
        },
      }));
    } else {
      Swal.fire({
        title: "You dont select this item",
        icon: "warning",
        confirmButtonText: "OK",
      });
      // this.setState(()=>({
      //     alert:{
      //         style:"warning",
      //         text:"You dont select this item"
      //     }
      // }))
    }
  };

  render() {
    // let text;
    // if (this.state.display) {
    //   text = <MyText />;
    // }
    return (
      <div className="mt-5">
        {/* {text}
        <button
          onClick={() => {
            this.setState(() => ({
              display: false,
            }));
          }}
        >
          delete text
        </button> */}

        {/* <p className={` w-50 alert alert-${this.state.alert.style}`}>
          {this.state.alert.text}
        </p>
        <p className="h3">Asus Rog Strix 16</p>
        <p className="h5">
          Price:{" "}
          <span className="text-danger">
            {this.state.price * this.state.count}
          </span>
          AZN
        </p> */}
        <button className="btn btn-danger" onClick={this.decrement}>
          -
        </button>
        <span className="mx-3">{this.state.count}</span>
        <button className="btn btn-success" onClick={this.increment}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
