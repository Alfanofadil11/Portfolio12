import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { greeting, projectsHeader } from "../../portfolio.js";
import "../../pages/projects/Project.css";
import "../../pages/projects/VideoContainer.css";
import "../../pages/projects/visualdesign.css";
import ProjectsImg from "../../pages/projects/ProjectImg.js";
import unselfishImage from "../../assests/images/unselfish/unselfish.jpg";
import Streetwear from "../../assests/images/unselfish/Streetwear.jpg";
import Unselfish from "../../assests/images/unselfish/Streetwear.png";
import Schedule from "../../assests/images/UIBG/Schedule.jpg";
import Valorant from "../../assests/images/UIBG/Valomarch2.jpg"
import Sunflower from "../../assests/images/designmarket/Sunflower.jpg";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      photoIndex: 0,
      images: [unselfishImage, Streetwear, Unselfish, Sunflower, Schedule, Valorant]
    };
  }
  openDriveLink = (link) => {
    window.open(link, '_blank');
  };
  
  render() {
    const theme = this.props.theme;
    const { isOpen, photoIndex, images } = this.state;

    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
         <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1 className="projects-heading-text" style={{ color: theme.text }}>
                  {projectsHeader.title}
                </h1>
                <p className="projects-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>

           {/* Video Section */}
        <Fade bottom duration={2000} distance="40px">
          <div className="video-heading-div">
            <div className="video-heading-text-div">
              <h1 className="video-heading-text" style={{ color: theme.text }}>
                Digital Projects
              </h1>
              <p className="video-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                Video and Motion.
              </p>
            </div>
          </div>
        </Fade>
        {/* Video Cards */}
        <Fade bottom duration={2000} distance="40px">
          <div className="video-card-container">
            <div className="video-card">
              <div className="video-card fade-in">
                <iframe
                  width="440"
                  height="216"
                  src="https://www.youtube.com/embed/tiazACgPpes"
                  title="Program Sarjana (S1) Program Studi Ilmu Filsafat FIB UI"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <div className="video-details">
                  <h3 className="video-title">Philosophy Program Profile Video</h3>
                  <p className="video-description">
                    This project is my first project in making videos in 2021.
                  </p>
                </div>
              </div>
            </div>
            <div className="video-card">
              <div className="video-card fade-in">
                <iframe
                  width="440"
                  height="216"
                  src="https://drive.google.com/file/d/1OBExFNLTiy34B6E8DOySTsiwFNJoTqrf/preview"
                  title="PT Karyasari Murni Animation Bumper"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <div className="video-details">
                  <h3 className="video-title">PT Karya Sari Murni Bumper</h3>
                  <p className="video-description">
                    Bumper animation project for the Karya Sari Murni company in 2024.
                  </p>
                </div>
              </div>
            </div>
            <div className="video-card">
              <div className="video-card fade-in">
                <iframe
                  width="440"
                  height="216"
                  src="https://drive.google.com/file/d/1b2kktNB9bbVzlUSn9iZFZkM-P3kYmQcI/preview"
                  title="Satu Persen Reels"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <div className="video-details">
                  <h3 className="video-title">Reels Video for Satu Persen</h3>
                  <p className="video-description">
                    This video is one of the videos I made when I was a freelancer at Satu Persen Indonesia Life School.
                  </p>
                </div>
              </div>
            </div>
            <div className="video-card">
              <div className="video-card fade-in">
                <iframe
                  width="440"
                  height="216"
                  src="https://drive.google.com/file/d/180DeadRJRGl4aH9Nitqx1WC6wKx-Rq_P/preview"
                  title="Panel Surya Animation"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <div className="video-details">
                  <h3 className="video-title">Panel Surya Animation</h3>
                  <p className="video-description">
                    This animation is a project that I made for my friend's college assignment.
                  </p>              
              </div>
              </div>
              </div>
              <div className="video-card">
                <div className="video-card fade-in">
                <iframe
                  width="440"
                  height="216"
                  src="https://drive.google.com/file/d/1CyNziXLO7K5zFRgehJ_kGiPz3GwSbgBx/preview"
                  title="Phone Motion"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <div className="video-details">
                  <h3 className="video-title">Phone Motion</h3>
                  <p className="video-description">
                    This is a self-project.
                  </p>
                </div>
                </div>
              </div>
          </div>
        </Fade>

        <Fade bottom duration={2000} distance="40px">
        <div className="video-heading-text-div">
              <p className="video-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                Visual Design.
              </p>
            </div>
        <div className="visual-design-section">
            {/* Display the first image */}
            <div className="visual-design-content" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}>
              <img
                src={unselfishImage}
                alt="Visual Design"
                className="visual-design-image"
              />
              <p className="visual-design-description">
                Cupid Design for T-Shirt.
              </p>
            </div>
            <div className="visual-design-content" onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}>
              <img
                src={Sunflower}
                alt="Visual Design"
                className="visual-design-image"
              />
              <p className="visual-design-description">
                Poster Example.
              </p>
            </div>
            <div className="visual-design-content" onClick={() => this.setState({ isOpen: true, photoIndex: 4 })}>
              <img
                src={Schedule}
                alt="Visual Design"
                className="visual-design-image"
              />
              <p className="visual-design-description">
                A few of my visual design at UI Battleground 2020 .
              </p>
            </div>
            <div className="visual-design-content"style={{ visibility: "hidden", width: 0, height: 0 }} 
            onClick={() => this.setState({ isOpen: true, photoIndex: -1 })}>
            </div>
            <div className="visual-design-content"style={{ visibility: "hidden", width: 0, height: 0 }} 
            onClick={() => this.setState({ isOpen: true, photoIndex: -1 })}>
            </div>
          </div>
        </Fade>

        <Fade bottom duration={2000} distance="40px">
          <div className="video-heading-div">
            <div className="video-heading-text-div">
              <h1 className="video-heading-text" style={{ color: theme.text }}>
                Article
              </h1>
            </div>
          </div>
        </Fade>
        <Fade bottom duration={2000} distance="40px">
        <div class="article-section">
      {/* Article Section */}
          <div className="article-card" onClick={() => this.openDriveLink('https://drive.google.com/file/d/10myaZ1Bqw3KsDTKzmwb2Tiq29icDFkxN/preview')}>
            <h2 className="article-title">Scientific Article</h2>
        <p class="article-description">Evaluasi Politik Pertahanan atau Agraria di Indonesia Dengan Basis Teori Keadilan John Rawls</p>
      </div>
      <div className="article-card" onClick={() => this.openDriveLink('https://drive.google.com/file/d/1GgAwvUecCmEKZZAJGHLSi0bZVJ9iPOt8/preview')}>
            <h2 className="article-title">Scientific Article</h2>
        <p class="article-description">Kesalahan Tindakan “Charity” Dalam Membantu Meringankan Kelaparan Dunia</p>
      </div>
      <div className="article-card" onClick={() => this.openDriveLink('https://drive.google.com/file/d/1lc-9Rcaq1EARoLhvpmeBCnL4tKKD0Y20/preview')}>
            <h2 className="article-title">Scientific Article</h2>
        <p class="article-description">Analisis atas Pelanggaran Hak Dasar oleh Pemerintahan Era Jokowi melalui Teori Libertarian John Locke</p>
      </div>
      <div className="article-card" onClick={() => this.openDriveLink('https://drive.google.com/file/d/1XcEd5xg009i5PQXNeKp1BcE-vsOvsKxi/preview')}>
            <h2 className="article-title">Scientific Article</h2>
        <p class="article-description">Revolusi Teknologi yang Menyebabkan Transformasi Sosial yang Sangat Cepat di Tapan Sumatra Barat</p>
      </div>
    </div>
    </Fade>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}

        {/* More Projects Button */}
        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.profileLink}
          newTab={true}
          theme={theme}
        />

        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Projects;
