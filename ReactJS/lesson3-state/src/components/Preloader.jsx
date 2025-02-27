import React, { Component } from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";

class Preloader extends Component {
  render() {
    return (
      <div className='d-flex align-items-center justify-content-center' style={{height:"100vh"}}>
        <PacmanLoader size={40} color="#ff0" />

      </div>
    )
  }
}

export default Preloader