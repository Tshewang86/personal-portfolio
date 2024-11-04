import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/mobile.png";
import rest from "../assets/img/web.png";
import project from "../assets/img/project3.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Art Gallery Mobile Application",
      description: "Design for Art Euthistic",
      imgUrl: projImg1,

    },

  ];

  const projects1 = [
    {
      title: "Responsive Web design for Art Gallery" ,
      description: "Design for Art Euthistic",
      imgUrl: rest,

    },

  ];

  const projects2 = [
    {
      title: "Both App and web design for Gadget shopping",
      description: "Busy individuals seeking a quick and seamless shopping experience.",
      imgUrl: project,

    },

  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>I am currently working on a comprehensive application aimed at managing individual and group applicants in an educational context, utilizing UI/UX design tools to create a user-friendly interface. The application emphasizes an intuitive design that enhances the applicant experience, allowing for seamless navigation and easy access to relevant information.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                      <Tab.Pane eventKey="first">
                        <h3>Project 1 Mobile Application</h3>
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
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <h3>Project 2 Responsive Design</h3>
                        <Row>
                          {
                            projects1.map((project1, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project1}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <h3>Project 3 Both App and Website</h3>
                        <Row>
                          {
                            projects2.map((project2, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project2}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

