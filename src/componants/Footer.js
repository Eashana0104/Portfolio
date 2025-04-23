import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logoPortfolio.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/githubIcon.png";

export const Footer = () => {

    const handleSocialClick = (socialPlatform) => {
        switch (socialPlatform) {
          case 'linkedin':
            console.log('Navigating to LinkedIn...');
            window.open('https://www.linkedin.com/in/eashana-ash-singhal-799080246/', '_blank'); // Open LinkedIn in a new tab
            break;
          case 'github':
            console.log('Navigating to GitHub...');
            window.open('https://github.com/Eashana0104', '_blank'); // Open GitHub in a new tab
            break;
    
          default:
            console.log('Unknown social platform');
        }
      }
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="#" onClick={() => handleSocialClick('linkedin')}>
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a href="#" onClick={() => handleSocialClick('github')}>
                  <img src={navIcon2} alt="GitHub" />
                </a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}