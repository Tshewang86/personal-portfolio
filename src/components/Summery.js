
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import { projectData } from '../data/projectsData';
import "./summary.css";

export const Summery = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const project = projectData.find(proj => proj.title === title);
  console.log(project, "gey");

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <Container className="summary-container" style={{ marginTop: '80px' }}>
      <Row className="summary-header mb-4">
        <Col>
          <Button variant="outline-primary" onClick={() => navigate('/')} className="summary-back-btn">
            &larr; Back to Home
          </Button>
          <h2 className="summary-title">{project.title}</h2>
          <p className="summary-description">{project.description}</p>
        </Col>
      </Row>

      <Row>
        {/* Case Study Section */}
        <Col md={12} className="summary-section mb-3">
          <h4 className="section-title">Case Study On Art Gallery Mobile Application</h4>
          <div className="section-images">
            {project.caseStudy?.images?.map((image, index) => (
              <Image key={index} src={image} alt="Case Study" className="summary-image" />
            ))}
          </div>
          <div className="summary-details">
            <h5 className="details-title">Project Background</h5>
            <p>{project.caseStudy?.ProjectBackground}</p>
            <h5 className="details-title">Problem Statement</h5>
            <p>{project.caseStudy?.ProblemStatement}</p>
            <h5 className="details-title">Project Goal</h5>
            <p>{project.caseStudy?.ProjectGoals}</p>
            <h5 className="details-title">My Role in the Project</h5>
            <p>{project.caseStudy?.MyRole}</p>
            <h5 className="details-title">Target Audience</h5>
            <p>{project.caseStudy?.TargetAudience}</p>
          </div>
        </Col>

        {/* Research Conducted Section */}
        <Col md={12} className="summary-section mb-3">
          <h4 className="section-title">Research Conducted</h4>
          <div>
            <h5 className="details-title">User Research Summary</h5>
            <p>{project.researchConducted?.summary}</p>
            <p>{project.researchConducted?.interview}</p>
          </div>
          {/* <div>
            <h5 className="details-title">Survey Question Link or Interview Questions</h5>
            <p className="link-text">{project.researchConducted?.surveyLink}</p>

          </div> */}

          <div>
            <h5 className="details-title">Survey Question Link or Interview Questions</h5>
            {project.researchConducted?.surveyLink ? (
              <p className="link-text">{project.researchConducted.surveyLink}</p>
            ) : (
              <ul>
                {project.researchConducted.interviewquestion.map((question, index) => (
                  <li key={index}>{question}</li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <h5 className="details-title">Users' Pain Points</h5>
            <ListGroup variant="flush" className="list-group">
              {project.researchConducted?.userpainpoint?.map((painpoint, index) => (
                <ListGroup.Item key={index} className="list-item">{painpoint}</ListGroup.Item>
              ))}
            </ListGroup>
          </div>
          <div>
            <h5 className="details-title">Findings</h5>
            <ListGroup variant="flush" className="list-group">
              {project.researchConducted?.findings?.map((finding, index) => (
                <ListGroup.Item key={index} className="list-item">{finding}</ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Col>

        {/* User Persona Section */}
        <Col md={12} className="summary-section mb-3">
          <h4 className="section-title">User Persona</h4>
          <Image src={project.userPersona?.imgUrl} alt="User Persona" className="summary-image" />
          <Image src={project.userPersona?.img} alt="User Persona" className="summary-image" />
          <p>{project.userPersona?.description}</p>
        </Col>

        {/* User Journey Map Section */}
        <Col md={12} className="summary-section mb-3">
          <h4 className="section-title">User Journey Map</h4>
          <Image src={project.userJourneyMap?.imgUrl} alt="User Journey Map" className="summary-image" />
          <h5>{project.userJourneyMap?.title}</h5>
        </Col>

        {/* Wireframe Section */}
        <Col md={12} className="summary-section mb-3">
          <h4 className="section-title">Wireframe</h4>
          {['topic', 'title', 'T'].map((key, index) => (
            <div key={index}>
              <h6>{project.wireframe?.[key]}</h6>
              <Image src={project.wireframe?.[key === 'topic' ? 'photo' : key === 'title' ? 'image' : 'img']} alt="Wireframe" className="summary-image" />
            </div>
          ))}
        </Col>

        {/* Usability Testing Section */}
        <Col md={12} className="summary-section mb-3">
          <h4 className="section-title">Usability Testing</h4>
          <p>{project.usabilityTesting?.summary}</p>
          <Image src={project.usabilityTesting?.img} alt="Usability Testing" className="summary-image" />
          <ListGroup variant="flush" className="list-group">Findings
            {project.usabilityTesting?.findings?.map((finding, index) => (
              <ListGroup.Item key={index} className="list-item">{finding}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        {/* Final Design Section */}
        <Col md={12} className="summary-section mb-3">
          <h4 className="section-title">Final Design (High Fidelity)</h4>
          <Image src={project.finalDesign?.imgUrl} alt="Final Design" className="summary-image" />
          <p>{project.finalDesign?.description}</p>
        </Col>

        {/* Conclusion Section */}
        <Col md={12} className="summary-section mb-3">
          <h4 className="section-title">Conclusion</h4>
          <p>{project.conclusion?.summary}</p>
          <div>
            <h6>Impact</h6>
            <p>{project.conclusion?.Impact}</p>
          </div>
          <div>
            <h6>What I Have Learned</h6>
            <p>{project.conclusion?.Knowledge}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};



