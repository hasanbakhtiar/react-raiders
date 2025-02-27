import React, { Component } from "react";
import Counter from "./components/Counter";
import Products from "./components/Products";

class App extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage:
            "url('https://i1.wp.com/wallpaperxyz.com/wp-content/uploads/Gif-Animated-Wallpaper-Background-Full-HD-Free-Download-for-PC-Macbook-261121-Wallpaperxyz.com-19.gif')",
            
        }}
      >
        <div className="container">
          <Products />
        </div>
      </div>
    );
  }
}

export default App;
