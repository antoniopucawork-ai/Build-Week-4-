import { Row, Col, Container } from "react-bootstrap";
import Aside from "../../components/main/aside/Aside";
import ExperienceDetails from "../../components/main/mainsection/experiencesSection/ExperienceDetails";

const ExperienceDetailsPage = () => {
  return (
    <Container className="py-2">
      <Row>
        <Col md={8} className="mt-2">
          <ExperienceDetails />
        </Col>

        <Col md={4} className="mt-2">
          <Aside />
        </Col>
      </Row>
    </Container>
  );
};

export default ExperienceDetailsPage;