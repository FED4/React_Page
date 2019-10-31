import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

class NavBar extends Component {
  render() {
    return (
      <div>

      <nav className="navbar navbar-inverse">
        <div className="container-fluid summit-blue">

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
          <li className="summit-white"><a href="/">Home</a></li>
            <li className="summit-white"><a href="news">About 2019 Summit</a></li>
            <li><a href="faqs">FAQs</a></li>
            <li className="dropdown">
              <a href="more" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">More <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="more1">Action</a></li>
                <li><a href="more2">Another action</a></li>
                <li><a href="more3">Something else here</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="more4">Separated link</a></li>
              </ul>
            </li>
            <li><a href="zh">中文</a></li>
          </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-default">
        <div className="container-fluid white-background">

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-left">
            <a className="logo-container" href="#">
              <img className="navbar-logo" src="https://i.imgur.com/RbGECQ1.png" alt="Brand" />
            </a>
          </ul>
          <ul className="nav navbar-nav navbar-right navbar-ul">
          <li className="navbar-text"><a href="/">SUMMIT</a></li>
            <li className="navbar-text"><a href="news">NEWS</a></li>
            <li className="navbar-text"><a href="docs">DOCUMENTS & MATERIALS</a></li>
            <li className="navbar-text"><a href="media">MEDIA INFOMATION</a></li>
            <li className="navbar-text"><a href="events">RELATED EVENTS</a></li>
          </ul>

          </div>
        </div>
      </nav>

      </div>
    );
  }
}

export default NavBar;
