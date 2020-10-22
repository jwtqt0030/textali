import React, { Component } from "react";
import axios from "axios";
import Swiper from "swiper";
import "./Roll.css";
class Roll extends Component{
    state = {
        list:[]
    }
    componentDidMount() {
        axios.get("http://localhost:8000/Roll").then(res => {
            this.setState({
                list:res.data
            })
        })
    }
    componentDidUpdate() {
        var swipers=new Swiper(".Roll-center", {
            direction: "vertical",
            slidesPerView: 4,
            loop: true,
            autoplay: true,   
        });
        swipers.el.onmouseover = function () {
            swipers.autoplay.stop()
        }
        swipers.el.onmouseleave = function () {
            swipers.autoplay.start()
        }
    }
    render() {
        let {list}=this.state
        return (
        <div className="swiper-container Roll-center">
            <div className="swiper-wrapper Roll">
            {list.map((item, i) => (
            <div key={i} className="swiper-slide">
                <div className="Roll-name">{item.name}</div>
                <div className="Roll-location">{item.location}</div>
                <div className="Roll-time">{item.time}</div>
            </div>
          ))}
        </div>
      </div>
        )
    }
}
export default Roll
