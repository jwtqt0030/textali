import React, { Component } from "react";
import IndexRouter from "./router/indexRouter";
import "./App.css";
import "swiper/css/swiper.css";
class App extends Component {
  render() {
    return (
      <div>
        <IndexRouter />
      </div>
    );
  }
}
export default App;