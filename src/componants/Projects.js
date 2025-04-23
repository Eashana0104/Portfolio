import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import stalendarImg from "../assets/img/stalendar.png";
import buzzlineImg from "../assets/img/buzzlineImg.png"
import novaBlasterImg from "../assets/img/novaBlaster.png";
import databaseImg from "../assets/img/databaseImg.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Stalendar",
      description: "Group Project Comp 3350",
      imgUrl: stalendarImg,
      link: "https://drive.google.com/file/d/1ERd7eeo4pWYIKpn6q_EbqkZU4LkhSy1C/view?usp=sharing" // Update this with actual link
    },
    {
      title: "Buzzline",
      description: "Personal Project",
      imgUrl: buzzlineImg,
      link: "https://github.com/Eashana0104/buzzline"
    },
    {
      title: "Nova Blaster",
      description: "Personal Project",
      imgUrl: novaBlasterImg,
      link: "https://github.com/Eashana0104/Nova-Blaster"
    },
    {
      title: "Winnipeg Transit Database System",
      description: "Group Project Comp 3380",
      imgUrl: databaseImg,
      link: "https://your-portfolio.com/winnipeg-transit"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Working on these projects has been an incredible learning journey. They've helped me level up my skills in Android development, web development, database management, and game development. Through group projects, I learned how to collaborate effectively, manage deadlines, and contribute to a shared vision. At the same time, personal projects gave me the freedom to turn ideas I've had for a long time into reality — challenging myself, exploring creativity, and growing as a developer along the way.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                 
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                 
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}