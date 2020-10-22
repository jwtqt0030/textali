import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Roll from "../../component/Roll";
import "./Home.css"
class Home extends Component{
    state= {
        mytext:""
    }
    render() {
        return (
            <div className="home">
                <div className="header">
                    <div className="header-center">
                        <div className="ico">
                            <img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" alt=""/>
                        </div>
                        <div className="line"></div>
                        <div className="index">社招官网</div>
                        <ul className="ul-one">
                            
                            <li>
                                <NavLink to="/home">首页</NavLink> 
                            </li>
                            <li>
                                <NavLink to="/socity">社会招聘</NavLink>  
                            </li>
                            <li>
                                <NavLink to="/school">校园招聘</NavLink>  
                            </li>
                            <li>
                                <NavLink to="/know">了解阿里</NavLink>  
                            </li>
                            <li>
                                <NavLink to="/name">个人中心</NavLink>  
                            </li>
                        </ul>
                        <div className="login">
                            欢迎来到阿里巴巴集团招聘！
                            <NavLink to="/login">登录</NavLink>
                            <div className="line-one"></div>
                            <NavLink to="/login">注册</NavLink> 
                        </div>
                    </div>
                </div> 
                <div className="center">
                    <img src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png" alt=""/>
                    <div className="center-position">
                        <div className="center-top">
                            <p>If not now, when?</p>
                            <p>If not me, who?</p> 
                            <p className="center-text">此时此刻，非我莫属！</p>
                            <div className="center-input">
                                <input className="input-text" value={this.state.mytext} onChange={(e) => {
                                    this.setState({
                                        mytext:e.target.value
                                    })
                                }} type="text" maxLength="30" placeholder="请输入职位关键词"/>
                                <button>搜索</button>
                            </div>
                            <ul className="list">
                                <li>热门推荐：</li>
                                <li>
                                    <NavLink to="/hr">JAVA</NavLink>    
                                </li>
                                <li>
                                    <NavLink to="/hr">IOS</NavLink>    
                                </li>
                                <li>
                                    <NavLink to="/hr">数据</NavLink>    
                                </li>
                                <li>
                                    <NavLink to="/hr">安全</NavLink>    
                                </li>
                                <li>
                                    <NavLink to="/hr">搜索</NavLink>   
                                </li>
                                <li>
                                    <NavLink to="/hr">算法</NavLink> 
                                </li>
                                <li>
                                    <NavLink to="/hr">运营</NavLink> 
                                </li>
                                <li>
                                    <NavLink to="/hr">视觉</NavLink> 
                                </li>
                                <li>
                                    <NavLink to="/hr">交互</NavLink> 
                                </li>
                                <li>
                                    <NavLink to="/hr">交互</NavLink> 
                                </li>
                                <li>
                                    <NavLink to="/hr">前端</NavLink> 
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="news">
                    <div className="news-left">
                        <div className="news-left-top">
                            <p>最新职位</p>
                            <p>更多</p>
                        </div>
                        <Roll></Roll>
                    </div>
                    <div className="news-right">
                        <div className="news-right-one">
                            <img src="https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png" alt=""/>
                        </div>
                        <div className="news-right-two">
                            <img src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-center">
		阿里巴巴集团 Copyright ©1999-2020 版权所有
	</div>
            </div>
            </div>  
        )
    }
    
}
export default Home