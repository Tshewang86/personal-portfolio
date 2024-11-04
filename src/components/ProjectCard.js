import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl }) => {
  const navigate = useNavigate();
  console.log(title,"hey")
  const handleViewClick = () => {
    navigate(`/projects/${title}`);
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br></br>
          <button className="btn btn-primary mt-2" onClick={handleViewClick}>View</button>
        </div>
      </div>
    </Col>
  );
};
