import { Button,Nav,Navbar,Container,NavDropdown } from 'react-bootstrap';
import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import Slide from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const logo = "images/" + this.props.data.logo;
    const profilepic = "images/" + this.props.data.image;
    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="lines" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>
          <ul className="three columns logo">
            <li>
            <a className="smoothscroll" href="#home">
            <img
                src={logo}
                alt="Logo"
              />
              </a>
            
              {/* <a className="smoothscroll" href="#home">
              Rabiul Islam
              </a> */}
            </li>
          </ul>
          <ul id="nav" className="nav nine columns">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>


        <div className="row banner">
          <div className="banner-text">
            <Slide left>
              <h1 className="responsive-headline">{name}</h1>
            </Slide>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>Project
                </a>
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
